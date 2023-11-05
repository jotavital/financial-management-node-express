import { Router } from 'express';
import * as userController from '~/controllers/userController';
import * as transactionController from '~/controllers/transactionController';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.post('/', userController.create);

usersRoutes.get('/:id/transactions', userController.findTransactions);
usersRoutes.post('/:id/transactions', userController.createTransaction);

usersRoutes.get(
    '/:userId/transactions/totals',
    transactionController.findTransactionTotals
);

export default usersRoutes;
