import {IReturn, Route} from "../src/Route";

interface IIndexParams {

}

interface IIndexReturn extends IReturn {
    toto: number;
}

export default class IndexRoute extends Route<IIndexParams, IIndexReturn> {

    constructor() {
        super('/', undefined);
    }

    protected computeData(params: IIndexParams): IIndexReturn {
        return {
            success: true,
            toto: 8
        };
    }

}
