import * as express from "express";
import {Route} from "../src/Route";
import {NextFunction, Request, Response} from "express-serve-static-core";
import {ErrorCode} from "../src/ErrorCodes";
import Socket = SocketIO.Socket;

export default class Error404Route extends Route<undefined, undefined> {

    constructor() {
        super(undefined, undefined, undefined, 1);
    }

    setupHttp(app: express.Express): void {
        app.use((req: Request, res: Response, next: NextFunction) => {
            const err: any = new Error('Not Found');
            err.status = 404;
            err.errorCode = ErrorCode.General.REQ_NOT_RECOGNIZED;
            next(err);
        });
    }

    setupIO(socket: Socket): void {
    }

    protected computeData(params: undefined): undefined {
        return undefined;
    }

}
