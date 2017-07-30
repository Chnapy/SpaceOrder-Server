import {IReturn, Route} from "../src/Route";

interface IUsersParams {

}

interface IUsersReturn extends IReturn {
    users: string;
}

export default class UsersRoute extends Route<IUsersParams, IUsersReturn> {

    constructor() {
        super('/users', undefined);
    }

    protected computeData(params: IUsersParams): IUsersReturn {
        return {
            success: true,
            users: 'coucou'
        };
    }

}
