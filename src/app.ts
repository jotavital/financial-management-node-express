import express from 'express';
import usersRoutes from '~/routes/users';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: '*',
    })
);
app.use(express.json());

app.use('/api/users', usersRoutes);

export default app;
