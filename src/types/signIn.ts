import { UserBasicInfo } from '~/types/user';

export interface SignInData {
    email: string;
    password: string;
}

export interface SignInResponse {
    user: UserBasicInfo;
    token?: string;
}
