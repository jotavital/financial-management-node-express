import { Router } from 'express';
import * as userController from '~/controllers/userController';
import * as transactionController from '~/controllers/transactionController';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.post('/', userController.create);

// TODO: mover rotas de transactions
usersRoutes.get('/:id/transactions', userController.findTransactions);
usersRoutes.post('/:id/transactions', userController.createTransaction);

usersRoutes.get(
    '/:userId/transactions/totals',
    transactionController.findTransactionTotals
);

usersRoutes.put(
    '/:userId/transactions/:transactionId',
    transactionController.updateTransaction
);
usersRoutes.delete(
    '/:userId/transactions/:transactionId',
    transactionController.deleteTransaction
);

export default usersRoutes;
