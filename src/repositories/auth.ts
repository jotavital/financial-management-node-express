import CustomError from '~/errors/CustomError';
import User from '~/models/User';
import { SignInData } from '~/types/signIn';

export const signIn = async (data: SignInData) => {
    const user = await User.findOne({ email: data.email }).select('+password');

    if (!user) {
        throw new CustomError({ message: 'Usuário não encontrado', code: 404 });
    }

    const passwordMatches = await user.comparePassword(data.password);

    if (!passwordMatches) {
        throw new CustomError({ message: 'Senha incorreta', code: 401 });
    }

    user.password = '';

    return user;
};
