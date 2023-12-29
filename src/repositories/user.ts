import CustomError from '~/errors/CustomError';
import User from '~/models/User';
import { deleteFile } from '~/services/firebase';
import { UpdateUserProps, UserProps } from '~/types/user';

export const find = async () => {
    return await User.find();
};

export const findById = async (id: string) => {
    return await User.findById(id);
};

export const create = async (attributes: UserProps) => {
    return await User.create(attributes);
};

export const update = async (userId: string, attributes: UpdateUserProps) => {
    const user = await findById(userId);

    if (user) {
        if (attributes.name !== undefined) {
            user.name = attributes.name;
        }

        if (attributes.avatar !== undefined) {
            if (user.avatar) {
                await deleteFile(user.avatar);
            }

            user.avatar = String(attributes.avatar);
        }

        return await user.save();
    } else {
        throw new CustomError();
    }
};
