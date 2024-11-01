// server.js
import express, { json } from 'express';
import cors from 'cors';
import { userRouter } from './routes/authRoutes.js';

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


app.use(json());

const PORT = process.env.PORT || 3000;

app.use('/auth', userRouter);

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
