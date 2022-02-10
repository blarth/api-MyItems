import {validateSchemaSignUp} from '../middlewares/validationAuth.js';
import { signUp} from '../controllers/authController.js';
import express from 'express';
import { validateSchemaSignIn } from '../middlewares/validationAuth.js';
import { signIn } from '../controllers/authController.js';

const authRouter = express.Router()

authRouter.post("/sign-up", validateSchemaSignUp ,signUp);
authRouter.post("/sign-in", validateSchemaSignIn, signIn)

export default authRouter