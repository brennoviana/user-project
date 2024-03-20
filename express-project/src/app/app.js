import express from 'express';
import cors from 'cors';
import { userRoutes } from '../modules/user/routes/userRoutes.js';

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express' });
});

//Routes
app.use('/users', userRoutes);

export { app };