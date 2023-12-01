import { Request, Response } from 'express';
import * as transactionRepository from '~/repositories/transaction';

export const findTransactions = (req: Request, res: Response) => {
    return transactionRepository
        .findTransactions(req.userId)
        .then((transactions) => {
            return res.json(transactions);
        })
        .catch(() => {
            return res.status(400);
        });
};

export const findTransactionTotals = (req: Request, res: Response) => {
    return transactionRepository
        .findTransactionTotals(req.userId)
        .then((totals) => {
            return res.json(totals);
        });
};

export const createTransaction = (req: Request, res: Response) => {
    return transactionRepository
        .createTransaction(req.userId, req.body)
        .then((user: any) => {
            return res.json(user);
        });
};

export const deleteTransaction = (req: Request, res: Response) => {
    const { transactionId } = req.params;

    return transactionRepository
        .deleteTransaction(req.userId, transactionId)
        .then((response) => {
            return res.json(response);
        });
};

export const updateTransaction = (req: Request, res: Response) => {
    const { transactionId } = req.params;
    const attributes = req.body;

    return transactionRepository
        .updateTransaction(req.userId, transactionId, attributes)
        .then((response) => {
            return res.json(response);
        });
};
