import compose from 'koa-compose';
import Router from 'koa-router';

import RouterCompany from './company';

const router = new Router();

router.get('/error', async () => {
	throw Error('Error handling works!');
});

router.get('/', (ctx) => ctx.body = {hello: 'world'});

router.use('/api/company',  RouterCompany.routes(), RouterCompany.allowedMethods())

// router.get('*', async (ctx, next) => {
//     ctx.body = { status : 404 }
// })

export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}
