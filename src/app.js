import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import handleErrors from './middlewares/handleErrors'
import routes from './routes';

const router = new Router();


const app = new Koa()
	.use(handleErrors)
  .use(cors())
  .use(bodyParser())
  .use(routes());


export default app;
