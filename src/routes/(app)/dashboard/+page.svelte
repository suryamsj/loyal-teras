<script lang="ts">
	import { store } from '$lib/store.svelte';
	import type { StatCard } from '$lib/types';

	const statCards: StatCard[] = [
		{ title: 'Total Members', value: '1,264', change: '+12%', isPositive: true },
		{ title: 'Active Campaigns', value: 'Rp 8.2 Juta', change: '-4%', isPositive: false },
		{ title: 'Engagement Rate', value: '184', change: '+8%', isPositive: true },
		{ title: 'Loyalty Tiers', value: '342', change: '-2%', isPositive: false }
	];

	const realtimeCharts = [
		{ title: 'Lifetime Value (LTV)', value: '$487', description: 'per customer' },
		{ title: 'Cost per Acquisition', value: '$24.50', description: 'per customer' },
		{ title: 'Incentive Effectiveness', value: '342%', description: 'return on rewards' }
	];
</script>

<svelte:head>
	<title>LoyalTeras - Dashboard</title>
	<meta
		name="description"
		content="Monitor key performance metrics, customer segmentation insights, and manage loyalty
			strategies."
	/>
</svelte:head>

<!-- Main content area -->
<div class="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
	<div class="mb-4 flex flex-col space-y-2">
		<h1 class="text-2xl font-semibold text-gray-800">Dashboard</h1>
		<p class="text-base text-gray-500 md:text-lg">
			Monitor key performance metrics, customer segmentation insights, and manage loyalty
			strategies.
		</p>
	</div>
	<!-- Stat Cards -->
	<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-6 md:gap-6 lg:grid-cols-4">
		{#each statCards as stat}
			<div class="rounded-lg bg-white p-4 shadow-sm md:p-6">
				<h3 class="text-xs font-medium text-gray-500 md:text-sm">{stat.title}</h3>
				<div class="mt-2 flex items-baseline justify-between">
					<div class="text-lg font-semibold text-gray-900 md:text-2xl">
						{stat.value}
					</div>
					<span class={`text-xs md:text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
						{stat.change}
					</span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Charts Section -->
	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6 lg:grid-cols-3">
		{#each realtimeCharts as item}
			<div class="rounded-lg bg-white p-4 shadow-sm md:p-6">
				<h3 class="mb-3 text-sm font-semibold text-gray-800 md:mb-4 md:text-base">
					{item.title}
				</h3>
				<div
					class="mb-3 flex h-48 items-center justify-center rounded-md border border-gray-200 bg-gray-50 md:h-64"
				>
					<p class="text-sm text-gray-500">{item.title}</p>
				</div>
				<h1 class="text-2xl font-bold">{item.value}</h1>
				<p class="text-gray-500">{item.description}</p>
			</div>
		{/each}
	</div>
</div>
