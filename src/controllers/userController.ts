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
