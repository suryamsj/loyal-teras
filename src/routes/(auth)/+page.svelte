<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let { form } = $props();
	let loading = $state(false);

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					break;
				case 'failure':
					break;
				default:
					break;
			}
			loading = false;
			await update();
		};
	};
</script>

<svelte:head>
	<title>LoyalTeras - Login</title>
	<meta name="description" content="Login to your LoyalTeras account" />
</svelte:head>

<!-- Login Form Section -->
<section class="flex w-full items-center justify-center bg-white p-8 md:w-1/2">
	<div class="w-full max-w-md">
		<div class="mb-8">
			<h1 class="mb-1 text-3xl font-bold text-gray-800">LoyalTeras</h1>
		</div>

		<div class="mb-10">
			<h3 class="mb-2 text-2xl font-semibold text-gray-700">Login</h3>
			<p class="text-gray-500">
				Don't have an account?
				<a href="/" class="text-primary-blue hover:text-primary-blue transition-colors">
					Request account
				</a>
			</p>
		</div>

		<form action="" method="post" class="space-y-6" use:enhance={handleSubmit}>
			<div class="space-y-2">
				<label for="username" class="block text-sm font-medium text-gray-700"> Username </label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Enter your username"
					class="focus:ring-primary-blue focus:border-primary-blue w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:ring-2 {form
						?.errors?.username
						? 'border-red-500 focus:border-red-500 focus:ring-red-500'
						: ''}"
				/>
				{#if form?.errors?.username}
					<p class="text-sm text-red-500">{form.errors.username}</p>
				{/if}
			</div>

			<div class="space-y-2">
				<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter your password"
					class="focus:ring-primary-blue focus:border-primary-blue w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:ring-2 {form
						?.errors?.password
						? 'border-red-500 focus:border-red-500 focus:ring-red-500'
						: ''}"
				/>
				{#if form?.errors?.password}
					<p class="text-sm text-red-500">{form.errors.password}</p>
				{/if}
				<div class="flex justify-end">
					<a
						href="/forgot-password"
						class="text-primary-blue hover:text-primary-blue text-sm transition-colors"
					>
						Forgot password?
					</a>
				</div>
			</div>

			<button
				type="submit"
				class="bg-primary-blue hover:bg-primary-blue focus:ring-primary-blue w-full rounded-lg px-4 py-3 font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none {loading
					? 'cursor-not-allowed opacity-50'
					: ''}"
				disabled={loading}
			>
				{#if loading}
					Loading
				{:else}
					Login
				{/if}
			</button>
		</form>
	</div>
</section>

<!-- Image Section -->
<section class="relative hidden w-1/2 md:block">
	<img
		src="https://picsum.photos/1920/1080?random"
		alt="Decorative background"
		class="absolute inset-0 h-full w-full object-cover"
	/>
</section>
