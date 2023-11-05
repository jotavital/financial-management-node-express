import mongoose from 'mongoose';
import User from '~/models/User';

const ObjectId = mongoose.Types.ObjectId;

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
