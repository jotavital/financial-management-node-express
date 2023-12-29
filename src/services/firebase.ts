import { File } from '@google-cloud/storage';
import 'dotenv/config';
import * as admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { getDownloadURL } from 'firebase-admin/storage';
import CustomError from '~/errors/CustomError';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'financial-management-rn.firebaseapp.com',
    projectId: 'financial-management-rn',
    storageBucket: 'financial-management-rn.appspot.com',
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    credential: cert('./secret/firebaseServiceKey.json'),
};

export const firebase = admin.initializeApp(firebaseConfig);

export const uploadFile = (path: string, fileName: string) => {
    return firebase
        .storage()
        .bucket()
        .upload(path, {
            destination: `avatars/${fileName}`,
        })
        .then((response) => response)
        .catch(() => {
            throw new CustomError({
                message: 'Erro ao fazer o upload do arquivo',
            });
        });
};

export const getFileUrl = (fileRef: File) => {
    return getDownloadURL(fileRef);
};
