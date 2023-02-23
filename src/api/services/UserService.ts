/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserResponseDTO } from '../models/UserResponseDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns UserResponseDTO
     * @throws ApiError
     */
    public static usersControllerGetUsers(): CancelablePromise<Array<UserResponseDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/user',
        });
    }

}
