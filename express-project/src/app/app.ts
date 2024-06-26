import express, {Request, Response} from 'express';
import cors from 'cors';
import { userRoutes } from '../modules/user/routes/userRoutes';

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/users', userRoutes);

export { app };