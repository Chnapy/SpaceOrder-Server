import Route from "./Route";

export default new Route('/', (req, res, next) => {
    res.send('some users...');
}).get();
