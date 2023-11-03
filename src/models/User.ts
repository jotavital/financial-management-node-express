import { Schema, Types, model } from 'mongoose';
import { TransactionProps, transactionSchema } from '~/models/Transaction';

export interface UserProps {
    name: string;
    transactions: Types.DocumentArray<TransactionProps>;
}

const usersSchema = new Schema<UserProps>(
    {
        name: String,
        transactions: [transactionSchema],
    },
    { typeKey: '$type', timestamps: true }
);

const User = model<UserProps>('User', usersSchema);

export default User;
