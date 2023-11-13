import { Router } from 'express';
import * as transactionController from '~/controllers/transaction';
import { verifyAuthToken } from '~/middlewares/auth';

const transactionsRoutes: Router = Router();

transactionsRoutes.get(
    '/totals',
    verifyAuthToken,
    transactionController.findTransactionTotals
);

transactionsRoutes.get(
    '/',
    verifyAuthToken,
    transactionController.findTransactions
);

export default transactionsRoutes;
