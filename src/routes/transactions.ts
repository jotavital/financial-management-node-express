import { Router } from 'express';
import * as transactionController from '~/controllers/transaction';

const transactionsRoutes: Router = Router();

transactionsRoutes.get('/totals', transactionController.findTransactionTotals);

transactionsRoutes.get('/', transactionController.findTransactions);
transactionsRoutes.post('/', transactionController.createTransaction);

transactionsRoutes.put(
    '/:transactionId',
    transactionController.updateTransaction
);
transactionsRoutes.delete(
    '/:transactionId',
    transactionController.deleteTransaction
);

export default transactionsRoutes;
