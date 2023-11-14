import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import * as authController from '~/controllers/auth';
import { errorHandler } from '~/middlewares/errors';
import privateRoutes from '~/routes/private';

const app = express();

app.use(
    cors({
        origin: '*',
    })
);
app.use(express.json());

app.post('/api/signin', authController.signIn);

app.use('/api/private', privateRoutes);

app.use(errorHandler);

export default app;
