import Route from "./Route";


export default new Route('/', (req, res, next) => {
    res.send('index');
}).get();
