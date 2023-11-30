import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import CustomError from '~/errors/CustomError';

export const verifyAuthToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        throw new CustomError({
            message: 'É necessário um token de autenticação.',
            code: 401,
        });
    }

    let userId = null;

    try {
        ({ userId } = jwt.verify(
            token,
            String(process.env.JWT_SECRET_KEY)
        ) as JwtPayload);
    } catch (error) {
        throw new CustomError({
            message: 'Token inválido.',
            code: 401,
        });
    }

    // TODO: verificar se token está expirado
    if (!userId) {
        throw new CustomError({
            message: 'Token inválido.',
            code: 401,
        });
    }

    req.userId = userId;

    return next();
};
