/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentResponseDTO } from '../models/CommentResponseDTO';
import type { CreateCommentDTO } from '../models/CreateCommentDTO';
import type { CreatePostDTO } from '../models/CreatePostDTO';
import type { CreateReplyDTO } from '../models/CreateReplyDTO';
import type { DeleteCommentDTO } from '../models/DeleteCommentDTO';
import type { DeletePostDTO } from '../models/DeletePostDTO';
import type { DeleteReplyDTO } from '../models/DeleteReplyDTO';
import type { PostResponseDTO } from '../models/PostResponseDTO';
import type { ReplyResponseDTO } from '../models/ReplyResponseDTO';
import type { UpdateCommentDTO } from '../models/UpdateCommentDTO';
import type { UpdatePostDTO } from '../models/UpdatePostDTO';
import type { UpdateReplyDTO } from '../models/UpdateReplyDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostService {

    /**
     * @returns PostResponseDTO
     * @throws ApiError
     */
    public static postControllerCreatePost({
        requestBody,
    }: {
        requestBody: CreatePostDTO,
    }): CancelablePromise<PostResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PostResponseDTO
     * @throws ApiError
     */
    public static postControllerGetPosts(): CancelablePromise<Array<PostResponseDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/post',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static postControllerDeletePost({
        requestBody,
    }: {
        requestBody: DeletePostDTO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/app/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PostResponseDTO
     * @throws ApiError
     */
    public static postControllerUpdatePost({
        requestBody,
    }: {
        requestBody: UpdatePostDTO,
    }): CancelablePromise<PostResponseDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/app/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CommentResponseDTO
     * @throws ApiError
     */
    public static postControllerCreateComment({
        requestBody,
    }: {
        requestBody: CreateCommentDTO,
    }): CancelablePromise<CommentResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/post/comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static postControllerDeleteComment({
        requestBody,
    }: {
        requestBody: DeleteCommentDTO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/app/post/comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CommentResponseDTO
     * @throws ApiError
     */
    public static postControllerUpdateComment({
        requestBody,
    }: {
        requestBody: UpdateCommentDTO,
    }): CancelablePromise<CommentResponseDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/app/post/comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CommentResponseDTO
     * @throws ApiError
     */
    public static postControllerGetComments({
        postId,
    }: {
        postId: number,
    }): CancelablePromise<Array<CommentResponseDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/post/comment/{postId}',
            path: {
                'postId': postId,
            },
        });
    }

    /**
     * @returns ReplyResponseDTO
     * @throws ApiError
     */
    public static postControllerCreateReply({
        requestBody,
    }: {
        requestBody: CreateReplyDTO,
    }): CancelablePromise<ReplyResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/app/post/reply',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static postControllerDeleteReply({
        requestBody,
    }: {
        requestBody: DeleteReplyDTO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/app/post/reply',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ReplyResponseDTO
     * @throws ApiError
     */
    public static postControllerUpdateReply({
        requestBody,
    }: {
        requestBody: UpdateReplyDTO,
    }): CancelablePromise<ReplyResponseDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/app/post/reply',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ReplyResponseDTO
     * @throws ApiError
     */
    public static postControllerGetReplies({
        commentId,
    }: {
        commentId: number,
    }): CancelablePromise<Array<ReplyResponseDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/app/post/reply/{commentId}',
            path: {
                'commentId': commentId,
            },
        });
    }

}
