<script>
	import { onMount } from 'svelte';
	import { AuthService, OpenAPI } from '../../api';

	let username = '';
	let password = '';

	onMount(() => {
		OpenAPI.BASE = 'http://localhost:3000';
	});

	// set the base url for the api on mount
</script>

<!-- username and password input -->
<input type="text" placeholder="username" bind:value={username} />
<input type="password" placeholder="password" bind:value={password} />
<!-- login button -->
<button
	on:click={async () => {
		try {
			const result = await AuthService.authControllerLogin({ requestBody: { username, password } });
			localStorage.setItem('token', result.access_token);
		} catch (e) {
			await AuthService.authControllerRegister({ requestBody: { username, password } });
			const result = await AuthService.authControllerLogin({ requestBody: { username, password } });
			localStorage.setItem('token', result.access_token);
		}
	}}>Login/Register</button
>
