import { TransactionProps } from '~/models/Transaction';
import User from '~/models/User';
import { UserProps } from '~/types/user';

export const find = async () => {
    return await User.find();
};

export const findById = async (id: string) => {
    return await User.findById(id);
};

export const findTransactions = async (id: string) => {
    const user = await User.findById(id);

    return user?.transactions;
};

export const create = async (attributes: UserProps) => {
    return await User.create(attributes);
};

export const createTransaction = async (
    userId: string,
    attributes: TransactionProps
) => {
    const user = await findById(userId);

    user?.transactions.push(attributes);

    return await user?.save();
};
