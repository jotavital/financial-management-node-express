import { Request, Response } from 'express';
import * as userRepository from '~/repositories/user';

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

export const create = (req: Request, res: Response) => {
    return userRepository
        .create(req.body)
        .then((user) => {
            return res.json(user);
        })
        .catch((error) => {
            return res.status(500).json(error._message);
        });
};

export const update = (req: Request, res: Response) => {
    return userRepository
        .update(req.userId, req.body)
        .then((user) => {
            return res.json(user);
        })
        .catch((error) => {
            return res.status(500).json(error._message);
        });
};
