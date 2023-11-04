import { Schema, SchemaDefinitionProperty } from 'mongoose';
import { formatDate } from '~/helpers/date';

export type TransactionTypes = 'income' | 'outcome';

export interface TransactionProps {
    title: string;
    amount: number;
    date: Date;
    type: TransactionTypes;
}

export const transactionSchema = new Schema<TransactionProps>(
    {
        title: String,
        amount: Number,
        date: {
            type: Date,
            get: formatDate,
        } as SchemaDefinitionProperty<Date, TransactionProps> | undefined,
        type: String,
    },
    { timestamps: true, toJSON: { getters: true } }
);
