import User from '~/models/User';

export const find = async () => {
    return await User.find();
};

export const findById = async (id: string) => {
    return await User.findById(id);
};
