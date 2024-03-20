import express from 'express';
import userRoutes from '../modules/user/routes/userRoutes.js';

const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express' });
  });

app.use(express.json());
app.use('/users', userRoutes);

export default app;
