import { OpenAPI, PostService } from '../../api';
import type { PageLoad } from './$types';

export const load = (async ({ depends }) => {
	OpenAPI.BASE = 'http://localhost:3000';

	depends('posts');

	return {
		posts: await PostService.postControllerGetPosts()
	};
}) satisfies PageLoad;
