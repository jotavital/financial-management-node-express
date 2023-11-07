import { Request, Response } from 'express';
import * as userRepository from '~/repositories/userRepository';

export const find = (req: Request, res: Response) => {
    return userRepository.find().then((users) => {
        return res.json(users);
    });
};

export const findById = (req: Request, res: Response) => {
    const id = req.params.id;

    return userRepository.findById(id).then((users) => {
        return res.json(users);
    });
};

export const findTransactions = (req: Request, res: Response) => {
    const id = req.params.id;

    return userRepository
        .findTransactions(id)
        .then((transactions) => {
            return res.json(transactions);
        })
        .catch(() => {
            return res.status(400);
        });
};

export const create = (req: Request, res: Response) => {
    return userRepository.create(req.body).then((user) => {
        return res.json(user);
    });
};

export const createTransaction = (req: Request, res: Response) => {
    return userRepository
        .createTransaction(req.params.id, req.body)
        .then((user) => {
            return res.json(user);
        });
};
