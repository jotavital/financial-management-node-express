import { Router } from 'express';
import * as userController from '~/controllers/userController';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.get('/:id/transactions', userController.findTransactions);
usersRoutes.post('/:id/transactions', userController.createTransaction);
usersRoutes.post('/', userController.create);

export default usersRoutes;
