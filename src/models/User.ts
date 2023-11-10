import bcrypt from 'bcrypt';
import { Schema, Types, model } from 'mongoose';
import { TransactionProps, transactionSchema } from '~/models/Transaction';

export interface UserProps {
    name: string;
    email: string;
    password: string;
    transactions: Types.DocumentArray<TransactionProps>;
}

const usersSchema = new Schema<UserProps>(
    {
        name: { $dataType: String, required: true },
        email: { $dataType: String, required: true, unique: true },
        password: { $dataType: String, required: true },
        transactions: [transactionSchema],
    },
    { typeKey: '$dataType', timestamps: true }
);

usersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
});

const User = model<UserProps>('User', usersSchema);

export default User;
