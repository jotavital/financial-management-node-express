import { Router } from 'express';
import * as transactionController from '~/controllers/transaction';
import * as userController from '~/controllers/user';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.post('/', userController.create);

// TODO: mover rotas de transactions
usersRoutes.post('/:id/transactions', userController.createTransaction);

usersRoutes.put(
    '/:userId/transactions/:transactionId',
    transactionController.updateTransaction
);
usersRoutes.delete(
    '/:userId/transactions/:transactionId',
    transactionController.deleteTransaction
);

export default usersRoutes;
