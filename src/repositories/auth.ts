import 'dotenv/config';
import jwt from 'jsonwebtoken';
import CustomError from '~/errors/CustomError';
import User from '~/models/User';
import { SignInData, SignInResponse } from '~/types/signIn';

export const signIn = async (data: SignInData): Promise<SignInResponse> => {
    const user = await User.findOne({ email: data.email }).select('+password');

    if (!user) {
        throw new CustomError({ message: 'Usuário não encontrado', code: 404 });
    }

    const passwordMatches = await user.comparePassword(data.password);

    if (!passwordMatches) {
        throw new CustomError({ message: 'Senha incorreta', code: 401 });
    }

    const jwtPayload = {
        userId: user.id,
    };

    const token = jwt.sign(jwtPayload, String(process.env.JWT_SECRET_KEY), {
        // TODO: testar valor menor e redirecionar no front
        expiresIn: '2 days',
    });

    if (!token) {
        throw new CustomError({ message: 'Erro ao gerar o token de acesso' });
    }

    user.password = '';

    return { user, token };
};
