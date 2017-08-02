import {Sequelize} from "sequelize-typescript";
import {Transaction} from "sequelize";
import {ErrorCode, ErrorCoded} from "../ErrorCodes";
import Bluebird = require("bluebird");

export interface SequelizeRequest<IParam, IData> {
    request: (t: Transaction, params: IParam, data: IData, next: () => Promise<any>) => Bluebird<any> | Promise<any>;
    thenRequest?: SequelizeRequest<IParam, IData>[];
    catchCallback?: (err: Error) => Bluebird<any> | Promise<any> | never;
}

export abstract class ModelData<IParam, IData> {

    private readonly sequelize: Sequelize;

    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;
    }

    start(params: IParam): Bluebird<Transaction> {
        const requestRoot: SequelizeRequest<IParam, IData> = this.getAllSequelizeRequests();
        const defaultCatch = (err: Error) => {
            console.info(err);
            throw new ErrorCoded(ErrorCode.General.UNHANDLED);
        };

        return this.sequelize.transaction((t: Transaction) => {
            const data: IData = {} as IData;
            let request = requestRoot.request(t, params, data, () => this.next(t, params, requestRoot.thenRequest || [], data));
            if (request instanceof Bluebird) {
                request = request.catch(requestRoot.catchCallback || defaultCatch);
            } else {
                request = request.catch(requestRoot.catchCallback || defaultCatch);
            }
            return request;
        });
    }

    protected abstract getAllSequelizeRequests(): SequelizeRequest<IParam, IData>;

    protected next(t: Transaction, params: IParam, thenRequest: SequelizeRequest<IParam, IData>[], data: IData): Promise<IData | any> {
        return thenRequest.length ? Promise.all(
            thenRequest.map(r => {
                let request = r.request(t, params, data, () => this.next(t, params, r.thenRequest || [], data));
                if (r.catchCallback) {
                    if (request instanceof Bluebird) {
                        request = request.catch(r.catchCallback);
                    } else {
                        request = request.catch(r.catchCallback);
                    }
                }
                return request;
            })
        ) : new Promise<IData>((resolve) => resolve(data));
    }

}