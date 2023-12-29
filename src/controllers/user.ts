import { Request, Response } from 'express';
import * as fs from 'fs';
import * as userRepository from '~/repositories/user';
import { getFileUrl, uploadFile } from '~/services/firebase';

export const find = (req: Request, res: Response) => {
    return userRepository.find().then((users) => {
        return res.json(users);
    });
};

export const findById = (req: Request, res: Response) => {
    const id = req.params.id;

    return userRepository.findById(id).then((users) => {
        return res.json(users);
    });
};

export const create = (req: Request, res: Response) => {
    return userRepository
        .create(req.body)
        .then((user) => {
            return res.json(user);
        })
        .catch((error) => {
            return res.status(500).json(error._message);
        });
};

export const update = (req: Request, res: Response) => {
    return userRepository
        .update(req.userId, req.body)
        .then((user) => {
            return res.json(user);
        })
        .catch((error) => {
            return res.status(500).json(error._message);
        });
};

export const updateAvatar = async (req: Request, res: Response) => {
    if (req.file) {
        const fileResponse = await uploadFile(
            req.file.path,
            req.file.originalname
        );

        const fileUrl = await getFileUrl(fileResponse[0]);

        if (req.file) {
            fs.unlink(req.file.path, () => null);
        }

        return userRepository
            .update(req.userId, {
                avatar: fileUrl,
            })
            .then((user) => {
                return res.json(user);
            })
            .catch((error) => {
                return res.status(500).json(error._message);
            });
    }
};
