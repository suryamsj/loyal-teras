<script lang="ts">
	import { page } from '$app/state';
	import { store } from '$lib/store.svelte';
	import type { MenuItem } from '$lib/types';
	import { Bot, LayoutGrid, Target, Trophy, Volume2 } from 'lucide-svelte';

	const sidebarMenu: MenuItem[] = [
		{ name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
		{ name: 'Smart Segmentation', icon: 'smartsegmen', path: '/dashboard/smart-segmentation' },
		{ name: 'Tiers', icon: 'tier', path: '/dashboard/tiers' },
		{ name: 'Interaction Suite', icon: 'interactsuite', path: '/dashboard/interaction-suite' },
		{ name: 'TerasAI', icon: 'bar-chart-2', path: '/dashboard/teras-ai' }
	];

	let pathname = $derived(page.url.pathname);

	$effect(() => {
		store.checkScreenSize();
		window.addEventListener('resize', store.checkScreenSize);
		return () => {
			window.removeEventListener('resize', store.checkScreenSize);
		};
	});
</script>

<!-- Mobile overlay -->
{#if store.isMobile && store.mobileMenuOpen}
	<div
		aria-hidden="true"
		class="fixed inset-0 z-20 bg-gray-600 opacity-75"
		onclick={store.closeMobileMenu}
	></div>
{/if}

<!-- Sidebar - Mobile & Desktop -->
<aside
	class={`${store.isMobile ? 'fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ' + (store.mobileMenuOpen ? 'translate-x-0' : '-translate-x-full') : store.sidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0 bg-white shadow-lg transition-all duration-300`}
>
	<div class="flex h-full flex-col">
		<!-- Logo -->
		<div class="flex h-16 items-center border-b px-6">
			{#if store.isMobile || store.sidebarOpen}
				<h1 class="text-xl font-bold">LoyalTeras</h1>
			{:else}
				<h1 class="text-xl font-bold">LT</h1>
			{/if}
		</div>

		<!-- Menu -->
		<nav class="flex-1 overflow-y-auto pt-4">
			<ul>
				{#each sidebarMenu as item}
					<li class="mb-2 px-3">
						<a
							href={item.path || '#'}
							class={`flex items-center rounded-md p-3 transition-colors ${item.path === pathname ? 'bg-primary-blue text-white' : 'hover:bg-gray-100'}`}
							onclick={store.closeMobileMenu}
						>
							{#if item.icon === 'dashboard'}
								<LayoutGrid />
							{:else if item.icon === 'smartsegmen'}
								<Target />
							{:else if item.icon === 'tier'}
								<Trophy />
							{:else if item.icon === 'interactsuite'}
								<Volume2 />
							{:else}
								<Bot />
							{/if}

							{#if store.isMobile || store.sidebarOpen}
								<span class="ml-3">{item.name}</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</aside>
