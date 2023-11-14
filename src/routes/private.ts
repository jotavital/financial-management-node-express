import { Router } from 'express';
import { verifyAuthToken } from '~/middlewares/auth';
import transactionsRoutes from '~/routes/transactions';
import usersRoutes from '~/routes/users';

const privateRoutes: Router = Router();

privateRoutes.use(verifyAuthToken);

privateRoutes.use('/transactions', transactionsRoutes);
privateRoutes.use('/users', usersRoutes);

export default privateRoutes;
