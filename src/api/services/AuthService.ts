/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDTO } from '../models/LoginDTO';
import type { LoginResponseDTO } from '../models/LoginResponseDTO';
import type { RegisterDTO } from '../models/RegisterDTO';
import type { UserResponseDTO } from '../models/UserResponseDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @returns LoginResponseDTO
     * @throws ApiError
     */
    public static authControllerLogin({
        requestBody,
    }: {
        requestBody: LoginDTO,
    }): CancelablePromise<LoginResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserResponseDTO
     * @throws ApiError
     */
    public static authControllerRegister({
        requestBody,
    }: {
        requestBody: RegisterDTO,
    }): CancelablePromise<UserResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
