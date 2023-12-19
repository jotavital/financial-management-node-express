import { Router } from 'express';
import * as userController from '~/controllers/user';

const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.post('/', userController.create);
usersRoutes.put('/', userController.update);

export default usersRoutes;
