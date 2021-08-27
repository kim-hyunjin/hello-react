import Router from 'koa-router';
import * as postCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();
posts.get('/', postCtrl.list);
posts.post('/', checkLoggedIn, postCtrl.write);

const post = new Router();
post.get('/', postCtrl.read);
post.delete('/', checkLoggedIn, postCtrl.remove);
post.patch('/', checkLoggedIn, postCtrl.update);
posts.use('/:id', postCtrl.checkObjectId, post.routes()); // id 파라미터 검증 미들웨어 적용

export default posts;
