import { Router } from 'express';
import { login } from '../controllers/authControllers.js';

const userRouter = Router();

userRouter.post('/login', login);

export { userRouter };
