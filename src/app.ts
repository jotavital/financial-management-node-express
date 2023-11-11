import cors from 'cors';
import express from 'express';
import * as authController from '~/controllers/auth';
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

export default app;
