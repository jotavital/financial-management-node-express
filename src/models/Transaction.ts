import { Schema } from 'mongoose';

export type TransactionTypes = 'income' | 'outcome';

export interface TransactionProps {
    title: string;
    amount: number;
    date: Date;
    type: TransactionTypes;
}

export const transactionSchema = new Schema<TransactionProps>({
    title: String,
    amount: Number,
    date: Date,
    type: String,
});
