import authRouter from './authRouter.js';
import utilRouter from './utilsRouter.js';
import itemsRouter from './itemsRouter.js';
import salesRouter from './salesRouter.js';
import express from 'express';

const router = express.Router()
router.use(authRouter)
router.use(utilRouter)
router.use(itemsRouter)
router.use(salesRouter)
export default router;