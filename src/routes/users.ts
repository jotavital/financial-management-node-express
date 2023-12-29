import { Router } from 'express';
import multer from 'multer';
import * as userController from '~/controllers/user';

const upload = multer({ dest: 'uploads/tmp' });
const usersRoutes: Router = Router();

usersRoutes.get('/', userController.find);
usersRoutes.get('/:id', userController.findById);
usersRoutes.post('/', userController.create);
usersRoutes.put('/', userController.update);
usersRoutes.put(
    '/avatar',
    upload.single('avatar'),
    userController.updateAvatar
);

export default usersRoutes;
