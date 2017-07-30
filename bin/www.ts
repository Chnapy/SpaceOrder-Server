import App from "../src/App";
import debug from "debug";

debug('spaceorder:server');

/**
 * Get port from environment.
 */

const port = normalizePort(process.env.PORT || '3000');
if(port === false) {
    throw new Error('Bad port: please give a non empty string or a number');
}

/**
 * Initialize app.
 */

const app: App = new App();
app.setup(port);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any): number | false {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}