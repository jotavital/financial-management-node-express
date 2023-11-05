import { Request, Response } from 'express';
import * as transactionRepository from '~/repositories/transactionRepository';

export const findTransactionTotals = (req: Request, res: Response) => {
    const userId = req.params.userId;

    return transactionRepository
        .findTransactionTotals(userId)
        .then((transactions) => {
            return res.json(transactions);
        });
};
