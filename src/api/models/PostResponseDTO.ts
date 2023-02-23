/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentResponseDTO } from './CommentResponseDTO';
import type { UserResponseDTO } from './UserResponseDTO';

export type PostResponseDTO = {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    contentType: string;
    author: UserResponseDTO | null;
    comments: Array<CommentResponseDTO>;
};

