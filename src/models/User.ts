import { Schema, Types, model } from 'mongoose';
import { TransactionProps } from '~/models/Transaction';

export interface UserProps {
    name: string;
    transactions: Types.DocumentArray<TransactionProps>;
}

const usersSchema = new Schema<UserProps>(
    {
        name: String,
        transactions: [
            {
                title: String,
                amount: Number,
                date: Date,
                type: String,
            },
        ],
    },
    { typeKey: '$type', timestamps: true }
);

const User = model('User', usersSchema);

export default User;
