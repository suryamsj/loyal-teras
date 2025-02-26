<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { store } from '$lib/store.svelte';

	let { children } = $props();

	$effect(() => {
		store.checkScreenSize();
		window.addEventListener('resize', store.checkScreenSize);

		return () => {
			window.removeEventListener('resize', store.checkScreenSize);
		};
	});
</script>

<main class="flex h-screen overflow-hidden bg-gray-50">
	<Sidebar />
	<div class="flex flex-1 flex-col overflow-hidden">
		<Header />
		{@render children()}
	</div>
</main>
