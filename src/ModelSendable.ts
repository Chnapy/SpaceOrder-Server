import {Model} from "sequelize-typescript";

export abstract class ModelSendable<T, S> extends Model<T> {

    abstract toSend(): S;

    toString(): string {
        return JSON.stringify(this.toSend());
    }

}