import { Request, Response } from 'express';
import * as authRepository from '~/repositories/auth';

export const signIn = async (req: Request, res: Response) => {
    const response = await authRepository.signIn(req.body);

    return res.json(response);
};
