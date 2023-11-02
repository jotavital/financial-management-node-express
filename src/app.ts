import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import router from '~/routes/api';

const app = express();

app.use(express.json());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
});

app.use(router);

export default app;
