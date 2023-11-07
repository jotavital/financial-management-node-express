import { Request, Response } from 'express';
import * as transactionRepository from '~/repositories/transactionRepository';

export const findTransactionTotals = (req: Request, res: Response) => {
    const { userId } = req.params;

    return transactionRepository
        .findTransactionTotals(userId)
        .then((transactions) => {
            return res.json(transactions);
        });
};

export const deleteTransaction = (req: Request, res: Response) => {
    const { userId } = req.params;
    const { transactionId } = req.params;

    return transactionRepository
        .deleteTransaction(userId, transactionId)
        .then((response) => {
            return res.json(response);
        });
};

export const updateTransaction = (req: Request, res: Response) => {
    const { userId } = req.params;
    const { transactionId } = req.params;
    const attributes = req.body;

    return transactionRepository
        .updateTransaction(userId, transactionId, attributes)
        .then((response) => {
            return res.json(response);
        });
};
