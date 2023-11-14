import { Router } from 'express';
import * as transactionController from '~/controllers/transaction';

const transactionsRoutes: Router = Router();

transactionsRoutes.get('/totals', transactionController.findTransactionTotals);

transactionsRoutes.get('/', transactionController.findTransactions);

export default transactionsRoutes;
