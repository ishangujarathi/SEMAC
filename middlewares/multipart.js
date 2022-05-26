import nextConnect from 'next-connect';
import formidables from './formidables';
import { timetableUpload } from './upload';

const middleware = nextConnect();

middleware.use(formidables);
middleware.use(timetableUpload);

export default middleware;
