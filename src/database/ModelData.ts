import {Sequelize} from "sequelize-typescript";
import {Transaction} from "sequelize";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import Bluebird = require("bluebird");

export interface SequelizeRequest<IParam, IData> {
    request: ((t: Transaction, params: IParam, data: IData) => Bluebird<any> | Promise<any>)[];
    thenRequest?: SequelizeRequest<IParam, IData>;
    catchCallback?: (err: Error) => Bluebird<any> | Promise<any> | never;
}

export abstract class ModelData<IParam, IData> {

    private readonly sequelize: Sequelize;

    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;
    }

    start(params: IParam): Bluebird<Transaction> {
        const requestRoot: SequelizeRequest<IParam, IData> = this.getAllSequelizeRequests();
        const defaultCatch = (err: ErrorCoded | Error) => {
            // console.info(err);
            if (err instanceof ErrorCoded) {
                throw err;
            }
            throw new ErrorCoded(ErrorCode.General.UNHANDLED);
        };

        return this.sequelize.transaction((t: Transaction) => {
            const data: IData = {} as IData;

            return Promise.all(requestRoot.request.map(r => r(t, params, data)))
                .then(() => this.next(t, params, requestRoot.thenRequest, data))
                .catch(requestRoot.catchCallback || defaultCatch);
        });
    }

    protected abstract getAllSequelizeRequests(): SequelizeRequest<IParam, IData>;

    protected next(t: Transaction, params: IParam, thenRequest: SequelizeRequest<IParam, IData>, data: IData): Promise<IData | any> {

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

}