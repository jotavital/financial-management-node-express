import CustomError from '~/errors/CustomError';
import User from '~/models/User';
import { UserProps } from '~/types/user';

export const find = async () => {
    return await User.find();
};

export const findById = async (id: string) => {
    return await User.findById(id);
};

export const create = async (attributes: UserProps) => {
    return await User.create(attributes);
};

export const update = async (userId: string, attributes: UserProps) => {
    const user = await findById(userId);

    if (user) {
        user.name = attributes.name;

        return await user.save();
    } else {
        throw new CustomError();
    }
};
