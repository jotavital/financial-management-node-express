import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import * as authController from '~/controllers/auth';
import { errorHandler } from '~/middlewares/errors';
import transactionsRoutes from '~/routes/transactions';
import usersRoutes from '~/routes/users';

const app = express();

app.use(
    cors({
        origin: '*',
    })
);
app.use(express.json());

app.post('/api/signin', authController.signIn);
app.use('/api/users', usersRoutes);
app.use('/api/transactions', transactionsRoutes);

app.use(errorHandler);

export default app;
