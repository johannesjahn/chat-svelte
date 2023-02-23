/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationResponseDTO } from '../models/ConversationResponseDTO';
import type { CreateConversationRequestDTO } from '../models/CreateConversationRequestDTO';
import type { CreateMessageDTO } from '../models/CreateMessageDTO';
import type { GetMessagesDTO } from '../models/GetMessagesDTO';
import type { MessageResponseDTO } from '../models/MessageResponseDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatService {

    /**
     * @returns MessageResponseDTO
     * @throws ApiError
     */
    public static chatControllerSendMessage({
        requestBody,
    }: {
        requestBody: CreateMessageDTO,
    }): CancelablePromise<MessageResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/chat/send-message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ConversationResponseDTO Fetches the messages for a given conversation.
     * @throws ApiError
     */
    public static chatControllerGetMessages({
        requestBody,
    }: {
        requestBody: GetMessagesDTO,
    }): CancelablePromise<ConversationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/chat/get-messages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ConversationResponseDTO
     * @throws ApiError
     */
    public static chatControllerCreateConversation({
        requestBody,
    }: {
        requestBody: CreateConversationRequestDTO,
    }): CancelablePromise<ConversationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/chat/create-conversation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ConversationResponseDTO
     * @throws ApiError
     */
    public static chatControllerGetConversations(): CancelablePromise<Array<ConversationResponseDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/chat/get-conversations',
        });
    }

}
