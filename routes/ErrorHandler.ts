import * as express from "express";
import {IReturnFail, Route} from "../src/Route";
import {NextFunction, Request, Response} from "express-serve-static-core";
import {ErrorCode} from "../src/ErrorCodes";
import Socket = SocketIO.Socket;

export default class ErrorHandlerRoute extends Route<number, IReturnFail> {

    constructor() {
        super(undefined, undefined, undefined, 2);
    }

    setupHttp(app: express.Express): void {
        app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            const errorCode = err.errorCode || ErrorCode.General.UNHANDLED;

            // render the error page
            res.status(err.status || 500);
            const retContent = this.beforeComputeData(errorCode);
            this.httpSend(res, retContent);
        });
    }

    setupIO(socket: Socket): void {
    }

    protected computeData(errorCode: number): IReturnFail {
        return {
            success: false,
            errorCode: errorCode
        };
    }

}
