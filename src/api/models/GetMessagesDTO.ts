/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetMessagesDTO = {
    conversationId: number;
    /**
     * To reduce the amount of data fetched the client can send the id of the last received message and only get messages that are newer than that
     */
    lastMessage?: number;
};

