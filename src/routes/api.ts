import { Router, Request, Response } from 'express';
import User from '~/models/User';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello world with Typescript' });
});

router.get('/user', async (req: Request, res: Response) => {
    const users = await User.find();

    res.json({ message: users });
});

export default router;
