import * as express from "express";
import debug from "debug";
import * as http from "http";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as sassMiddleware from "node-sass-middleware";
import {Sequelize} from "sequelize-typescript";

import index from "./routes/index";
import users from "./routes/users";
import Password from "./models/Password";
import User from "./models/User";
import Faction from "./models/Faction";
import {default as Rank, RankEnum} from "./models/Rank";

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
            modelPaths: [__dirname + '/models', __dirname + '/models/StructureStatic']
        });

        //Drop then create all tables
        this.sequelize.sync({force: true}).then(err => {

            const rankIds = Object.keys(RankEnum).map((k, i) => ({id_rank: i + 1}));
            Rank.bulkCreate<Rank>(rankIds);


            const top = new User({
                username: "C2aaaa",
                password: {
                    value: 'test2',
                    salt: [97, 34, 56]
                },
                email: "toto@aaa.com",
                date_register: new Date(),
                date_last_activity: new Date(),
                mo_actu: 0,
                mo_total: 1,
                ma_actu: 2,
                mi_actu: 3,
                mi_total: 4,
                id_rank: RankEnum.LEADER
            }, {include: [{model: User}, {model: Password}]});

            const user = new User({
                username: "Chnapy",
                password: {
                    value: 'test_pwd',
                    salt: [21, 34, 56]
                },
                email: "toto@aaa.com",
                date_register: new Date(),
                date_last_activity: new Date(),
                mo_actu: 0,
                mo_total: 1,
                ma_actu: 2,
                mi_actu: 3,
                mi_total: 4,
                id_rank: RankEnum.OFFICER1
            }, {include: [{model: User}, {model: Password}]});

            const faction = new Faction({
                name: 'Test_faction',
                slogan: 'Test_slogan',
                color: '#FF8844'
            });

            Promise.all([top.save(), user.save(), faction.save()]).then(() => {
                user.$set('top', top);
                user.$set('faction', faction);
            });


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

}