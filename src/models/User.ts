import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { transactionSchema } from '~/models/Transaction';
import { UserMethods, UserModel, UserProps } from '~/types/user';

const usersSchema = new Schema<UserProps, UserModel, UserMethods>(
    {
        name: { $dataType: String, required: true },
        email: { $dataType: String, required: true, unique: true },
        password: { $dataType: String, required: true, select: false },
        avatar: { $dataType: String, required: false, select: true },
        transactions: [transactionSchema],
    },
    { typeKey: '$dataType', timestamps: true }
);

usersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
});

usersSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
};

const User = model<UserProps, UserModel>('User', usersSchema);

export default User;
