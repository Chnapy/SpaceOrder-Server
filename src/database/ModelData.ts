import {Sequelize} from "sequelize-typescript";
import {Transaction} from "sequelize";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
import {IParamsToken} from "../Route";
import {default as User, Payload} from "../../models/User";
import Bluebird = require("bluebird");

export interface SequelizeRequest<IParam, IData> {
    request: ((t: Transaction, params: IParam, data: IData) => Bluebird<any> | Promise<any>)[];
    thenRequest?: SequelizeRequest<IParam, IData>;
    catchCallback?: (err: Error) => Bluebird<any> | Promise<any> | never;
}

export interface IDataToken {
    tokenPayload: Payload;
}

export abstract class ModelData<IParams, IData> {

    protected static readonly privateKey: string = fs.readFileSync(path.join(__dirname, '../private.key'), 'utf8');
    protected static readonly tokenAlgo = 'HS256';

    private readonly sequelize: Sequelize;
    private readonly needToken: boolean;

    constructor(sequelize: Sequelize, needToken?: boolean) {
        this.sequelize = sequelize;
        this.needToken = needToken;
    }

    start(params: IParams): Bluebird<IData> {
        const requestRoot: SequelizeRequest<IParams, IData> = this.beforeGetAllRequelizeRequests();
        const defaultCatch = (err: ErrorCoded | Error) => {
            if (err instanceof ErrorCoded) {
                throw err;
            }
            console.error(err);
            throw new ErrorCoded(ErrorCode.General.UNHANDLED);
        };

        return this.sequelize.transaction((t: Transaction) => {
            const data: IData = {} as IData;

            return Promise.all(requestRoot.request.map(r => r(t, params, data)))
                .then(() => this.next(t, params, requestRoot.thenRequest, data))
                .catch(requestRoot.catchCallback || defaultCatch);
        });
    }

    protected abstract getAllSequelizeRequests(): SequelizeRequest<IParams, IData>;

    protected next(t: Transaction, params: IParams, thenRequest: SequelizeRequest<IParams, IData>, data: IData): Promise<IData | any> {

        if (!thenRequest) {
            return new Promise<IData>(resolve => resolve(data));
        }

        let request = Promise.all(thenRequest.request.map(r => r(t, params, data)))
            .then(() => this.next(t, params, thenRequest.thenRequest, data));

        if (thenRequest.catchCallback) {
            request = request.catch(thenRequest.catchCallback);
        }

        return request;
    }

    protected verifyToken(t: Transaction, params: IParamsToken, data: IDataToken): Promise<void> {

        return new Promise((resolve, reject) => {

            jwt.verify(params.token, ModelData.privateKey, {algorithms: [ModelData.tokenAlgo]}, (err: Error, decoded: Payload) => {
                if (err) {
                    reject(new ErrorCoded(ErrorCode.General.TOKEN_WRONG, err));
                    return;
                }

                data.tokenPayload = decoded;

                User.findOne<User>({
                    where: {id_user: data.tokenPayload.id_user},
                    transaction: t
                }).then(result => {
                    if (!result) {
                        reject(new ErrorCoded(ErrorCode.General.TOKEN_WRONG, err));
                        return;
                    }

                    resolve();
                });

            });
        });

    }

    private beforeGetAllRequelizeRequests(): SequelizeRequest<IParams | IParamsToken, IData | IDataToken> {
        if (!this.needToken) {
            return this.getAllSequelizeRequests();
        }

        return {
            request: [(t, params, data) => this.verifyToken(t, params as IParamsToken, data as IDataToken)],
            thenRequest: this.getAllSequelizeRequests()
        };
    }

}