import { UserProps } from '~/types/user';

export interface SignInData {
    email: string;
    password: string;
}

export interface SignInResponse {
    user: UserProps;
    token?: string;
}
