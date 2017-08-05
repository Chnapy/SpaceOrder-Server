import * as express from "express";
import debug from "debug";
import * as http from "http";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import {Sequelize} from "sequelize-typescript";
import * as socketIO from 'socket.io';
import * as fs from "fs";
import {IReturn, Route} from "./Route";
import InitStaticData from "./database/InitStaticData";
import Socket = SocketIO.Socket;

export default class App {

    // private static readonly USE_SASS: boolean = true;
    private static readonly ROUTES_PATH: string = '../routes/';
    private static readonly MODELS_PATH: string = '../models/';
    private static readonly SEQUELIZE_RESET: boolean = false;

    private readonly app: express.Express;
    private io: SocketIO.Server;
    private routes: Route<any, IReturn>[];
    private sequelize: Sequelize;
    private server: http.Server;

    constructor() {
        this.app = express();
    }

    public setup(port: number) {
        this.setPort(port);
        this.setupFirstUses();

        this.setupDatabase(() => {
            this.setupRoutes();
            this.setupServer(port);

            this.setupSocketIO();
        });

    }

    private setPort(port: number) {
        this.app.set('port', port);
    }

    private setupFirstUses() {
        // uncomment after placing your favicon in /public
        //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        this.app.use(logger('dev')); //Logger
        this.app.use(bodyParser.json()); //Parser JSON
        this.app.use(bodyParser.urlencoded({extended: false}));  //Parser URL
        this.app.use(cookieParser());    //Parser Cookie
        // this.app.use(sassMiddleware({    //Compile SASS/SCSS
        //     src: path.join(__dirname, 'public'),
        //     dest: path.join(__dirname, 'public'),
        //     indentedSyntax: App.USE_SASS, // true = .sass and false = .scss
        //     sourceMap: true
        // }));
        this.app.use(express.static(path.join(__dirname, 'public')));    //Répertoire des fichiers static
    }

    private setupRoutes() {

        this.routes = fs.readdirSync(path.join(__dirname, App.ROUTES_PATH)).map((fileName: string) => {
            const classe = require(path.join(__dirname, App.ROUTES_PATH, fileName));
            return new (classe.default)(this.sequelize);
        }).sort((a, b) => a.order - b.order);

        console.log(this.routes.map(r => r.path));

        this.routes.forEach(r => r.setupHttp(this.app));
    }

    private setupDatabase(callback: () => void) {
        this.sequelize = new Sequelize({
            name: 'spaceorder',
            dialect: 'postgres',
            username: 'spaceorder_admin',
            password: 'vtffede1',
            host: 'localhost',
            port: 5432,
            modelPaths: ['', 'StructureStatic', 'Action', 'Enum']
                .map(d => path.join(__dirname, App.MODELS_PATH, d))
        });

        //Drop then create all tables
        this.sequelize.sync({force: App.SEQUELIZE_RESET}).then(err => {

            if (App.SEQUELIZE_RESET) {
                this.sequelize.transaction(t => Promise.all(InitStaticData.compute(t)))
                    .then(data => callback());
            } else {
                callback();
            }

        }).catch(err => console.error(err));


    }

    private setupServer(port: number) {
        this.server = http.createServer(this.app);

        /**
         * Listen on provided port, on all network interfaces.
         */

        this.server.listen(port);

        this.server.on('error', (error: any) => {
            if (error.syscall !== 'listen') {
                throw error;
            }

            const bind = typeof port === 'string'
                ? 'Pipe ' + port
                : 'Port ' + port;

            // handle specific listen errors with friendly messages
            switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        });

        this.server.on('listening', () => {
            const addr = this.server.address();
            const bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
            debug('Listening on ' + bind);
        });
    }

    private setupSocketIO() {

        this.io = socketIO(this.server);

        this.io.on('connection', function (socket: Socket) {
            this.routes.forEach(r => r.setupIO(socket));
        });
    }

}