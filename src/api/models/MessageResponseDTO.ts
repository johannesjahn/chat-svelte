/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponseDTO } from './UserResponseDTO';

export type MessageResponseDTO = {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    contentType: string;
    author: UserResponseDTO;
};

