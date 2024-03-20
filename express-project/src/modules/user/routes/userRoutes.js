import { Router } from 'express';
import { userController } from '../controller/userController.js';

const userRoutes = Router();

userRoutes.get('/', userController.getAll);

userRoutes.post('/', userController.post);

userRoutes.delete('/:id', userController.delete);

export { userRoutes };
