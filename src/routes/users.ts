import { Router, Request, Response } from 'express';
import * as userController from '~/controllers/userController';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);

export default usersRoutes;
