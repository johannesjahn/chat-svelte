<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { OpenAPI } from '../api';
	onMount(() => {
		OpenAPI.BASE = 'http://localhost:3000';
		const token = localStorage.getItem('token');
		if (token) {
			goto('/home', { replaceState: true });
		} else {
			goto('/login', { replaceState: true });
		}
	});
</script>
