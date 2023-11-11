import User from '~/models/User';
import { SignInData } from '~/types/signIn';

export const signIn = async (data: SignInData) => {
    const user = await User.findOne({ email: data.email }).select('+password');

    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    const passwordMatches = await user.comparePassword(data.password);

    if (!passwordMatches) {
        throw new Error('Senha incorreta.');
    }

    user.password = '';

    return user;
};
