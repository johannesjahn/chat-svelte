<script>
	import { onMount } from 'svelte';
	import { OpenAPI, PostService } from '../../api';
	import { invalidate, invalidateAll } from '$app/navigation';

	/**
	 * @type {import('./$types').PageData}
	 */
	export let data;

	OpenAPI.BASE = 'http://localhost:3000';
	// set the base url for the api on mount
</script>

<h1>Posts</h1>

{#each data.posts as post}
	<div>
		<h2>{post.author?.username}</h2>
		<p>{post.content}</p>
	</div>
{/each}

<button
	on:click={async () => {
		invalidate('posts');
	}}>Create Post</button
>
