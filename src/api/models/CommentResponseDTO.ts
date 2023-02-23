/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReplyResponseDTO } from './ReplyResponseDTO';
import type { UserResponseDTO } from './UserResponseDTO';

export type CommentResponseDTO = {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    author: UserResponseDTO | null;
    replies: Array<ReplyResponseDTO>;
};

