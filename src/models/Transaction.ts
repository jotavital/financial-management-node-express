export type TransactionTypes = 'income' | 'outcome';

export interface TransactionProps {
    title: string;
    amount: number;
    date: Date;
    type: TransactionTypes;
}
