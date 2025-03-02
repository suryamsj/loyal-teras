<script lang="ts">
	const realtimeCharts = $derived([
		{ title: 'Ongoing Campaigns', value: '25', description: '+12.5% vs last month' },
		{ title: 'Scheduled Campaigns', value: '12', description: '+2.8% vs last month' },
		{ title: 'Successful Campaigns', value: '89', description: '+5.2% vs last month' },
		{ title: 'Failed Campaigns', value: '3', description: '-1.2% vs last month' }
	]);

	const allCampaigns = $derived([
		{
			name: 'Summer Loyalty Program',
			segment: 'Premium Members',
			engagement: '12.5%',
			issued: '25,000',
			status: 'Ongoing'
		},
		{
			name: 'Winter Loyalty Program',
			segment: 'All Members',
			engagement: '8.5%',
			issued: '15,000',
			status: 'Scheduled'
		},
		{
			name: 'Spring Loyalty Program',
			segment: 'All Members',
			engagement: '15.5%',
			issued: '30,000',
			status: 'Successful'
		},
		{
			name: 'Fall Loyalty Program',
			segment: 'Premium Members',
			engagement: '10.5%',
			issued: '20,000',
			status: 'Failed'
		}
	]);
</script>

<svelte:head>
	<title>LoyalTeras - Interaction Suites</title>
	<meta
		name="description"
		content="Monitor, optimize, and analyze campaigns to enhance customer engagement and loyalty rewards."
	/>
</svelte:head>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Interaction Suites</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Monitor, optimize, and analyze campaigns to enhance customer engagement and loyalty rewards.
			</p>
		</div>
	</div>

	<div class="flex flex-col gap-4 sm:flex-row sm:gap-3">
		<a
			href="/dashboard/interaction-suite/create"
			class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-center text-white shadow-md transition-colors"
			>Create New Campaign</a
		>
		<a
			href="/"
			class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md border-1 border-gray-300 px-4 py-2 text-center shadow-md transition-colors"
			>Campaign Settings</a
		>
		<a
			href="/dashboard/interaction-suite/automated-reports"
			class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md border-1 border-gray-300 px-4 py-2 text-center shadow-md transition-colors"
			>View Automated Reports</a
		>
		<a
			href="/dashboard/interaction-suite/ai-generated-campaigns"
			class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md border-1 border-gray-300 px-4 py-2 text-center shadow-md transition-colors"
			>AI Generated Campaigns</a
		>
		<a
			href="/dashboard/interaction-suite/optimize"
			class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md border-1 border-gray-300 px-4 py-2 text-center shadow-md transition-colors"
			>Failed Campaigns</a
		>
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
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Segments</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Engagement Rate</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Points issued</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Status</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-100">
						{#each allCampaigns as campaign}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 text-sm font-medium text-gray-700">{campaign.name}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{campaign.segment.toLocaleString()}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{campaign.engagement}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{campaign.issued}</td>
								<td class="px-6 py-4 text-sm text-gray-500">
									{#if campaign.status === 'Ongoing'}
										<span class="rounded-md bg-green-500 px-3 py-1 text-white"
											>{campaign.status}</span
										>
									{:else if campaign.status === 'Scheduled'}
										<span class="rounded-md bg-blue-500 px-3 py-1 text-white"
											>{campaign.status}</span
										>
									{:else if campaign.status === 'Successful'}
										<span class="rounded-md bg-green-500 px-3 py-1 text-white"
											>{campaign.status}</span
										>
									{:else if campaign.status === 'Failed'}
										<span class="rounded-md bg-red-500 px-3 py-1 text-white">{campaign.status}</span
										>
									{:else}
										<span class="rounded-md bg-gray-500 px-3 py-1">{campaign.status}</span>
									{/if}
								</td>
								<td class="flex space-x-2 px-6 py-4 text-sm">
									<a href="/" class="text-gray-500 hover:text-gray-700" aria-label="Edit">
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
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</a>
									<a href="/" class="text-gray-500 hover:text-gray-700" aria-label="View Analytics">
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
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</a>
									<button
										class="cursor-pointer text-gray-500 hover:text-red-500"
										aria-label="Delete"
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
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
