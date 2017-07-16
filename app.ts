import * as express from "express";
import debug from "debug";
import * as http from "http";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as sassMiddleware from "node-sass-middleware";
import {Model, Sequelize} from "sequelize-typescript";

import index from "./routes/index";
import users from "./routes/users";
import Password from "./models/Password";
import User from "./models/User";

export default class App {

    private static readonly USE_SASS: boolean = true;

    private readonly app: express.Express;
    private sequelize: Sequelize;
    private server: http.Server;

    constructor() {
        this.app = express();
    }

    public setup(port: number) {
        this.setPort(port);
        this.setupViewEngine();
        this.setupFirstUses();
        this.setupRoutes();
        this.setup404();
        this.setupErrorHandler();

        this.setupDatabase();

        this.setupServer(port);
    }

    private setPort(port: number) {
        this.app.set('port', port);
    }

    private setupViewEngine() {
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'jade');
    }

    private setupFirstUses() {
        // uncomment after placing your favicon in /public
        //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        this.app.use(logger('dev')); //Logger
        this.app.use(bodyParser.json()); //Parser JSON
        this.app.use(bodyParser.urlencoded({extended: false}));  //Parser URL
        this.app.use(cookieParser());    //Parser Cookie
        this.app.use(sassMiddleware({    //Compile SASS/SCSS
            src: path.join(__dirname, 'public'),
            dest: path.join(__dirname, 'public'),
            indentedSyntax: App.USE_SASS, // true = .sass and false = .scss
            sourceMap: true
        }));
        this.app.use(express.static(path.join(__dirname, 'public')));    //Répertoire des fichiers static
    }

    private setupRoutes() {
        this.app.use('/', index);
        this.app.use('/users', users);
    }

    private setup404() {
        this.app.use((req, res, next) => {
            const err: any = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    private setupErrorHandler() {
        this.app.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.send('error');
        });
    }

    private setupDatabase() {
        this.sequelize = new Sequelize({
            name: 'spaceorder',
            dialect: 'postgres',
            username: 'spaceorder_admin',
            password: 'vtffede1',
            host: 'localhost',
            port: 5432,
            modelPaths: [__dirname + '/models']
        });

        //Drop then create all tables
        this.sequelize.sync({force: true}).then(err => {

            const password = new Password({
                id_password: 2,
                value: 'test_pwd',
                salt: [21, 34, 56]
            });

            const user = new User({
                username: "Chnapy",
                password: password,
                email: "toto@aaa.com",
                date_register: new Date(),
                date_last_activity: new Date()
            });

            password.save();
            user.save();

            // validate(user);
        });


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

}