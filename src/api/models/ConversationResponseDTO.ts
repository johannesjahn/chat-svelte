/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageResponseDTO } from './MessageResponseDTO';
import type { UserResponseDTO } from './UserResponseDTO';

export type ConversationResponseDTO = {
    id: number;
    createdAt: string;
    updatedAt: string;
    participants: Array<UserResponseDTO>;
    messages: Array<MessageResponseDTO>;
};

