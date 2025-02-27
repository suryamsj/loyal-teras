<script lang="ts">
	let selectedTimeFrame: 'Day' | 'Week' | 'Month' = $state('Week');
	let filterOpen = $state(false);
	let selectedFilter: 'All Tiers' | 'Platinum' | 'Gold' | 'Silver' = $state('All Tiers');
	let filterOptions = $state(['All Tiers', 'Platinum', 'Gold', 'Silver'] as (
		| 'All Tiers'
		| 'Platinum'
		| 'Gold'
		| 'Silver'
	)[]);

	const rateData = $derived([
		{ title: 'Retention Rate', value: '85.4%', impact: '+12%' },
		{ title: 'Churn Rate', value: '4.2%', impact: '-3%' },
		{ title: 'Revenue Impact', value: '$847.5K', impact: '+18%' }
	]);

	const chartData = $derived([
		{
			id: 'performance',
			title: 'Tier Performance Trends',
			timeFrames: ['Day', 'Week', 'Month'],
			description: 'Performance Chart'
		},
		{
			id: 'revenue',
			title: 'Revenue Contribution by Tier',
			description: 'Revenue Chart',
			hasFilter: true
		}
	]);

	const tableData = $derived([
		{
			tier_name: 'Platinum',
			members: 2456,
			retention: '92%',
			revenue: '$425.8K',
			growth: '+24%'
		},
		{
			tier_name: 'Gold',
			members: 8145,
			retention: '87%',
			revenue: '$284.3K',
			growth: '+18%'
		},
		{
			tier_name: 'Silver',
			members: 15890,
			retention: '78%',
			revenue: '$137.4K',
			growth: '+12%'
		}
	]);

	// Sample chart data for different time frames
	const performanceChartData: { [key in 'Day' | 'Week' | 'Month']: { label: string } } = {
		Day: { label: 'Daily Performance (Last 7 Days)' },
		Week: { label: 'Weekly Performance (Last 4 Weeks)' },
		Month: { label: 'Monthly Performance (Last 6 Months)' }
	};

	// Sample data for revenue chart with filters
	const revenueChartData = {
		'All Tiers': { label: 'All Tiers Revenue Distribution' },
		Platinum: { label: 'Platinum Tier Revenue Analysis' },
		Gold: { label: 'Gold Tier Revenue Analysis' },
		Silver: { label: 'Silver Tier Revenue Analysis' }
	};

	function changeTimeFrame(timeFrame: 'Day' | 'Week' | 'Month') {
		selectedTimeFrame = timeFrame;
		// In a real application, you would fetch or recalculate chart data here
	}

	function changeFilter(filter: 'All Tiers' | 'Platinum' | 'Gold' | 'Silver') {
		selectedFilter = filter;
		filterOpen = false;
		// In a real application, you would fetch or recalculate filtered data here
	}

	function toggleFilter() {
		filterOpen = !filterOpen;
	}
</script>

<svelte:head>
	<title>LoyalTeras - Tier Performance Analytics & Reporting</title>
	<meta
		name="description"
		content="Gain data-driven insights to optimize tier strategies and maximize engagement."
	/>
</svelte:head>

<div class="flex-1 space-y-6 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Tier Performance Analytics & Reporting</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Gain data-driven insights to optimize tier strategies and maximize engagement.
			</p>
		</div>
		<div class="flex flex-row">
			<button
				class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-center text-white shadow-md transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
					/>
				</svg>
				Download Report
			</button>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
		{#each rateData as item, i}
			<div class="rounded-md bg-white p-4 shadow-sm">
				<div class="flex flex-col">
					<div class="flex flex-row items-center justify-between">
						<h3 class="text-sm text-gray-500">{item.title}</h3>
						<p class="text-sm text-gray-500">
							{item.impact}
						</p>
					</div>
					<h2 class="mt-2 text-3xl font-semibold">{item.value}</h2>
					<div class="mt-4 h-16 rounded bg-gray-100"></div>
				</div>
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
		{#each chartData as item, i}
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold text-gray-800">
						{item.title}
					</h3>
					{#if item.timeFrames}
						<div class="flex overflow-hidden rounded-md border border-gray-200">
							{#each item.timeFrames as frame}
								<button
									class={`px-3 py-1 text-sm ${frame === selectedTimeFrame ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'}`}
									onclick={() => changeTimeFrame(frame as 'Day' | 'Week' | 'Month')}
								>
									{frame}
								</button>
							{/each}
						</div>
					{/if}
					{#if item.hasFilter}
						<div class="relative">
							<button
								aria-label="filter"
								class="text-gray-500 hover:text-gray-700"
								onclick={toggleFilter}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
									/>
								</svg>
							</button>

							{#if filterOpen}
								<div
									class="ring-opacity-5 absolute right-0 z-10 mt-2 w-48 rounded-md bg-white ring-1 shadow-lg ring-black"
								>
									<div class="py-1" role="menu" aria-orientation="vertical">
										{#each filterOptions as option}
											<button
												class={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${selectedFilter === option ? 'bg-gray-50 font-medium' : ''}`}
												role="menuitem"
												onclick={() => changeFilter(option)}
											>
												{option}
											</button>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/if}
				</div>

				<!-- Performance Chart -->
				{#if item.id === 'performance'}
					<div
						class="flex h-64 flex-col items-center justify-center rounded-md bg-gray-100 p-4 text-center"
					>
						<p class="text-gray-500">{performanceChartData[selectedTimeFrame].label}</p>
						<p class="mt-2 text-sm text-gray-400">
							Chart data changes based on {selectedTimeFrame} selection
						</p>
					</div>
				{/if}

				<!-- Revenue Chart -->
				{#if item.id === 'revenue'}
					<div
						class="flex h-64 flex-col items-center justify-center rounded-md bg-gray-100 p-4 text-center"
					>
						<p class="text-gray-500">{revenueChartData[selectedFilter].label}</p>
						<p class="mt-2 text-sm text-gray-400">Chart data filtered by {selectedFilter}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-1">
		<div class="rounded-lg border border-gray-100 bg-white shadow-sm">
			<div class="flex items-center justify-between border-b border-gray-100 p-4">
				<h2 class="text-lg font-semibold text-gray-800">Tier Details</h2>
				<div class="flex space-x-2">
					<button class="text-gray-500 hover:text-gray-700" aria-label="Download">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
					</button>
					<button class="text-gray-500 hover:text-gray-700" aria-label="More Options">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="bg-gray-50 text-left">
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Tier Name</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Members</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Retention</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Revenue</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Growth</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-100">
						{#each tableData.filter((tier) => selectedFilter === 'All Tiers' || tier.tier_name === selectedFilter) as tier}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 text-sm font-medium text-gray-700">{tier.tier_name}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.members.toLocaleString()}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.retention}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.revenue}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.growth}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
