import Router from 'koa-router';
import db from '../db';

const router = new Router();

router.get('/', async(ctx, next) => {
    ctx.body = await db.Company.find();
})

router.get('/:id', async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await db.Company.findOneById(id);
});

router.put('/:id', async (ctx, next) => {
    const id = ctx.params.id;
    const data = ctx.request.body;
    ctx.body = await db.Company.findOneAndUpdate(id, data);
});

router.del('/:id', async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await db.Company.removeOne(id);
});

export default router;