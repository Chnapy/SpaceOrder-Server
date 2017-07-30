import {IUserRegistrationParams} from "../../routes/UserRegistration";
import User from "../../models/User";

export default class UserData {

    static register(params: IUserRegistrationParams) {

        User.findOrCreate({});

    }

}