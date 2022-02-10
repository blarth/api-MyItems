
import express from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { validateSchemaSignIn, validateSchemaSignUp } from '../middlewares/validationAuth.js';


const authRouter = express.Router()

authRouter.post("/sign-up", validateSchemaSignUp ,signUp);
authRouter.post("/sign-in", validateSchemaSignIn, signIn)

export default authRouter