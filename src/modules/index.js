import { Router } from 'express';
import UserRoute from './users';

const router = new Router();

router.use('/users', UserRoute);

export default router;