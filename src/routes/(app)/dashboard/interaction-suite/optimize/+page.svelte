<script lang="ts">
	const realtimeCharts = $derived([
		{ title: 'Failed Campaigns', value: '25', description: '+12% vs last month' },
		{ title: 'Average Recovery Rate', value: '68', description: '+5% vs last month' },
		{ title: 'Revenue Impact', value: '$45,678', description: '-8% vs last month' },
		{ title: 'AI Sugestions Applied', value: '18', description: '+15% vs last month' }
	]);

	const tableData = $derived([
		{
			name: 'Summer Sale 2025',
			engangement: '2.4%',
			rate: '0.8%',
			revenue: '$1,234',
			status: 'Failed'
		},
		{
			name: 'Winter Sale 2025',
			engangement: '3.4%',
			rate: '1.2%',
			revenue: '$2,345',
			status: 'Failed'
		}
	]);

	const AIDrivenRecomendations = $derived([
		{
			title: 'Optimize Email Timing',
			description:
				'Data suggest shifting email campaigns to Tuesday mornings cloud increase open rates by 15%'
		},
		{
			title: 'Segment Refinement',
			description:
				'Data suggest refining the segmentation of the loyalty program to increase engagement by 10%'
		},
		{
			title: 'Content Strategy',
			description: 'Data suggest refining the content strategy to increase conversion rates by 5%'
		}
	]);
</script>

<svelte:head>
	<title>LoyalTeras - Campign Recovery & Optimize</title>
	<meta
		name="description"
		content="Identify failed campaign, analyze reasons and apply AI-driven optimizations."
	/>
</svelte:head>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Campign Recovery & Optimize</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Identify failed campaign, analyze reasons and apply AI-driven optimizations.
			</p>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6 lg:grid-cols-4">
		{#each realtimeCharts as item}
			<div class="flex flex-col space-y-3 rounded-md bg-white p-4 shadow-md">
				<h1 class="text-sm text-gray-500">{item.title}</h1>
				<h2 class="text-2xl font-semibold text-gray-800">{item.value}</h2>
				<p class="text-sm text-gray-500">{item.description}</p>
			</div>
		{/each}
	</div>

	<div class="mb-4 grid grid-cols-1 md:mb-6">
		<div class="rounded-lg border border-gray-100 bg-white shadow-sm">
			<div class="border-b border-gray-100 p-4">
				<h2 class="text-lg font-semibold text-gray-800">All Campaigns</h2>
			</div>

			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="bg-gray-50 text-left">
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Campaign Name</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Engagement Rate</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Coversation Rate</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Revenue</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Status</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-100">
						{#each tableData as failedCampaign}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 text-sm font-medium text-gray-700">{failedCampaign.name}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{failedCampaign.engangement}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{failedCampaign.rate}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{failedCampaign.revenue}</td>
								<td class="px-6 py-4 text-sm text-gray-500">
									{#if failedCampaign.status === 'Ongoing'}
										<span class="rounded-md bg-green-500 px-3 py-1 text-white"
											>{failedCampaign.status}</span
										>
									{:else if failedCampaign.status === 'Scheduled'}
										<span class="rounded-md bg-blue-500 px-3 py-1 text-white"
											>{failedCampaign.status}</span
										>
									{:else if failedCampaign.status === 'Successful'}
										<span class="rounded-md bg-green-500 px-3 py-1 text-white"
											>{failedCampaign.status}</span
										>
									{:else if failedCampaign.status === 'Failed'}
										<span class="rounded-md bg-red-500 px-3 py-1 text-white"
											>{failedCampaign.status}</span
										>
									{:else}
										<span class="rounded-md bg-gray-500 px-3 py-1">{failedCampaign.status}</span>
									{/if}
								</td>
								<td class="flex space-x-2 px-6 py-4 text-sm">
									<a href="/" class="text-gray-500 hover:text-gray-700" aria-label="Edit">
										View Analytics
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 md:mb-6 md:gap-6 lg:grid-cols-2">
		<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6">
			<div class="flex flex-col gap-4 rounded-md bg-white p-4 shadow-sm">
				<h3 class="text-lg font-semibold text-gray-800">AI-Driven Recommendations</h3>
				{#each AIDrivenRecomendations as item}
					<div class="rounded-md bg-gray-100 p-4 shadow-sm">
						<div class="flex flex-col items-start justify-between gap-1 sm:gap-1">
							<h1 class="font-semibold">{item.title}</h1>
							<p class="text-gray-500">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6">
			<div class="rounded-lg bg-white p-4 shadow-sm md:p-6">
				<h3 class="mb-3 text-sm font-semibold text-gray-800 md:mb-4 md:text-base">
					ROI Optimization
				</h3>
				<div
					class="mb-3 flex h-48 items-center justify-center rounded-md border border-gray-200 bg-gray-50 md:h-64"
				>
					<p class="text-sm text-gray-500">ROI Trend Chart</p>
				</div>
				<p class="text-sm text-gray-500">
					Projected ROI Improvement +45% with suggested optimizations
				</p>
			</div>
		</div>
	</div>
</div>
