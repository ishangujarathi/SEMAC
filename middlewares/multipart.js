import nextConnect from 'next-connect';
import formidables from './formidables';

const middleware = nextConnect();

middleware.use(formidables);

export default middleware;
