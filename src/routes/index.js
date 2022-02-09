import authRouter from './authRouter.js';
import utilRouter from './utilsRouter.js';
import express from 'express';

const router = express.Router()
router.use(authRouter)
router.use(utilRouter)
export default router;