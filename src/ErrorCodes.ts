export class ErrorCoded extends Error {

    readonly code: number;
    readonly error: Error;

    constructor(code: number, error?: Error) {
        super(code + `${error ? ' ' + error : ''}`);
        Object.setPrototypeOf(this, ErrorCoded.prototype);

        this.code = code;
        this.error = error;
    }

    toString() {
        return this.code + `${this.error ? ' ' + this.error : ''}`;
    }

}

export module ErrorCode {

    export enum General {

        UNHANDLED = 1000,
        REQ_NOT_RECOGNIZED = 1001,
        REQ_NO_LONGER_ACCEPTED = 1002,
        SERVER_NO_RESPONDING = 1003,
        USER_CANNOT_SEND = 1004,
        USER_NOT_LOGGED = 1005,
        TOKEN_WRONG = 1006,
        PARAMETERS_MISSING = 1007

    }

    export enum User {

        USERNAME_WRONG = 1101,
        PASSWORD_WRONG = 1101,
        USERNAME_EXIST = 1121,
        EMAIL_EXIST = 1122,
        USERS_NOTFOUND = 1131
    }

    export enum Faction {

        USER_INFACTION = 1201,
        FACTION_NAMEEXIST = 1202

    }

}