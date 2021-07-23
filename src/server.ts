import express, {Application} from 'express';
import morgan from 'morgan';

/**
 * Import routers
 */
import routerAPI from './routers/testAPI';

const app:Application = express();

/**
 * Config middlewares
 */
app.use(morgan('dev'));

/**
 * Config routers
 */
app.use('/', routerAPI);

export default app;
