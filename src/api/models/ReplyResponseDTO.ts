/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponseDTO } from './UserResponseDTO';

export type ReplyResponseDTO = {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    author: UserResponseDTO | null;
};

