import mongoose from 'mongoose';
import { TransactionProps } from '~/models/Transaction';
import User from '~/models/User';
import * as userRepository from '~/repositories/user';

const ObjectId = mongoose.Types.ObjectId;

export const findTransactions = async (id: string) => {
    const user = await User.findById(id).slice('transactions', -5);

    return user?.transactions;
};

export const findTransactionTotals = async (userId: string) => {
    const transactionTotals = await User.aggregate([
        { $unwind: { path: '$transactions' } },
        {
            $match: {
                _id: { $eq: new ObjectId(userId) },
            },
        },
        {
            $group: {
                _id: null,
                incomesAmount: {
                    $sum: {
                        $cond: [
                            { $eq: ['$transactions.type', 'income'] },
                            '$transactions.amount',
                            0,
                        ],
                    },
                },
                outcomesAmount: {
                    $sum: {
                        $cond: [
                            { $eq: ['$transactions.type', 'outcome'] },
                            '$transactions.amount',
                            0,
                        ],
                    },
                },
            },
        },
    ]).exec();

    return transactionTotals[0];
};

export const createTransaction = async (
    userId: string,
    attributes: TransactionProps
) => {
    const user = await userRepository.findById(userId);

    user?.transactions.push(attributes);

    return await user?.save();
};

export const deleteTransaction = async (
    userId: string,
    transactionId: string
) => {
    const user = await userRepository.findById(userId);

    user?.transactions.pull({ _id: new ObjectId(transactionId) });

    return user?.save();
};

export const updateTransaction = async (
    userId: string,
    transactionId: string,
    attributes: TransactionProps
) => {
    return await User.findOneAndUpdate(
        {
            _id: userId,
            'transactions._id': transactionId,
        },
        {
            $set: {
                'transactions.$.title': attributes.title,
                'transactions.$.amount': attributes.amount,
                'transactions.$.date': attributes.date,
                'transactions.$.type': attributes.type,
            },
        }
    );
};
