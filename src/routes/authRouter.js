import {validateSchemaSignUp} from '../middlewares/validationAuth.js';
import { signUp} from '../controllers/authController.js';
import express from 'express';

const authRouter = express.Router()

authRouter.post("/sign-up", validateSchemaSignUp ,signUp);

export default authRouter