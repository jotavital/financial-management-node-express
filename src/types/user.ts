import { Model, Types } from 'mongoose';
import { TransactionProps } from '~/models/Transaction';

export interface UserProps {
    name: string;
    email: string;
    password: string;
    transactions: Types.DocumentArray<TransactionProps>;
}

export interface UserMethods {
    comparePassword: (password: string) => Promise<boolean>;
}

export type UserModel = Model<UserProps, Record<string, never>, UserMethods>;
