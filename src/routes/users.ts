import { Router } from 'express';
import * as userController from '~/controllers/userController';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.post('/', userController.create);

usersRoutes.get('/:id/transactions', userController.findTransactions);
usersRoutes.post('/:id/transactions', userController.createTransaction);

export default usersRoutes;
