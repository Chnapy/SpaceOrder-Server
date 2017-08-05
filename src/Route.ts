import * as express from "express";
import {NextFunction, Request, Response} from "express-serve-static-core";
import {ErrorCode} from "./ErrorCodes";
import {Sequelize} from "sequelize-typescript";
import Bluebird = require("bluebird");
import Socket = SocketIO.Socket;

export interface IReturn {
    success: boolean;
}

export interface IReturnFail extends IReturn {
    success: false;
    errorCode: number;
}

export interface IParamChecker {
    [key: string]: {
        allowUndefined?: boolean;
        isArray?: boolean;
        validators: ((param: string) => boolean)[];
        formaters?: ((param: string) => any)[];
    };
}

interface NoParamChecker extends IParamChecker {
}

export interface IParamsToken {
    token: string;
}

export abstract class Route<IParams, R extends IReturn> {

    readonly path: string;
    readonly sequelize: Sequelize;
    readonly paramChecker: IParamChecker;
    readonly order: number;

    constructor(path: string, sequelize: Sequelize, paramChecker?: IParamChecker, order?: number) {
        this.path = path;
        this.sequelize = sequelize;
        this.paramChecker = paramChecker || {};
        this.order = order || 0;
    }

    setupHttp(app: express.Express): void {
        const fct = (req: Request, res: Response, next: NextFunction) => this.onHttpCall(req, res, next);
        app.get(this.path, fct);
        app.post(this.path, fct);
    }

    setupIO(socket: Socket): void {
        socket.on(this.path, (data: IParams) => this.onIOCall(socket, data));
    }

    protected onHttpCall(req: Request, res: Response, next: NextFunction): void {
        console.log(this.path + ' - HTTP - ', req.body, req.query);

        let params = Object.keys(req.body).length ? req.body : req.query;

        const retContent = this.beforeComputeData(params);
        retContent.then(ret => this.httpSend(res, ret));
    }

    protected onIOCall(socket: Socket, params: IParams): void {
        console.log(this.path + ' - IO - ', params);
        const retContent = this.beforeComputeData(params);
        retContent.then(ret => this.IOSend(socket, ret));
    }

    protected beforeComputeData(params: IParams): Bluebird<R | IReturnFail> {

        try {

            const check = this.checkParams(params);
            if (!check) {
                return new Bluebird((resolve, reject) => resolve({
                    success: false,
                    errorCode: ErrorCode.General.PARAMETERS_MISSING
                }));
            }

            this.formatParams(params);

            return this.computeData(params);
        } catch (e) {
            console.error(e);
            return new Bluebird((resolve, reject) => resolve({
                success: false,
                errorCode: ErrorCode.General.UNHANDLED
            }));
        }
    }

    protected checkParams(params: IParams): boolean {
        const keys = Object.keys(this.paramChecker);
        for (let ki = 0; ki < keys.length; ki++) {
            const k = keys[ki];

            const value = params[k];
            const checker = this.paramChecker[k];

            if (value === undefined && !checker.allowUndefined) {
                console.log('value undefined not allowed: ' + k);
                return false;
            }

            if (checker.isArray && value.constructor !== Array) {
                console.log('want value as array but isn\'t: ' + value);
                return false;
            }

            if (!checker.isArray && value.constructor === Array) {
                console.log('want value as not array but is: ' + value);
                return false;
            }

            let valid;
            for (let i = 0; i < checker.validators.length; i++) {
                valid = checker.validators[i];

                if (checker.isArray) {
                    for (let i = 0; i < value.length; i++) {
                        if (!valid(value[i] + '')) {
                            console.log('no valid: ' + k, value[i], valid);
                            return false;
                        }
                    }
                } else if (!valid(value + '')) {
                    console.log('no valid: ' + k, value, valid);
                    return false;
                }
            }

        }
        return true;
    }

    protected formatParams(params: IParams): void {
        const keys = Object.keys(this.paramChecker);
        for (let ki = 0; ki < keys.length; ki++) {
            const k = keys[ki];

            const value = params[k];
            const checker = this.paramChecker[k];

            if (!checker.formaters) {
                continue;
            }

            let newValue = value;

            if (checker.isArray) {
                checker.formaters.forEach(f => {
                    newValue = value.map((v, i) => f(v));
                });
            } else {
                checker.formaters.forEach(f => newValue = f(value));
            }

            params[k] = newValue;
        }
    }

    protected abstract computeData(params: IParams): Bluebird<R | IReturnFail>;

    protected httpSend(res: Response, content: R | IReturnFail): void {
        res.json(content);
    }

    protected IOSend(socket: Socket, content: R | IReturnFail): void {
        socket.emit(this.path, content);
    }

}