import { TransactionProps } from '~/models/Transaction';
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
