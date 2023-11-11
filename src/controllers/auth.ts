import { Request, Response } from 'express';
import * as authRepository from '~/repositories/auth';

export const signIn = async (req: Request, res: Response) => {
    // TODO: tratativa de errors da api
    try {
        return res.json(await authRepository.signIn(req.body));
    } catch (error) {
        console.log(error);
    }
};
