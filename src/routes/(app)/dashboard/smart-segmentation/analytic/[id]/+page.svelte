<script>
	const rateData = $derived([
		{ title: 'Retentation Rate', value: '85%', impact: '+2.1%' },
		{ title: 'Churn Rate', value: '15%', impact: '-2.1%' },
		{ title: 'Revenue Impact', value: '$1.2M', impact: '+5.8%' }
	]);

	const chartData = $derived([
		{ title: 'Retention & Churn Trends', description: 'Line Chart Visualization' },
		{ title: 'Revenue by Segment', description: 'Pie Chart Visualization' }
	]);

	const tableData = $derived([
		{
			segmen_name: 'Premium Members',
			total_members: 15847,
			retention: '85%',
			revenue: '$1.2M',
			growth: '+2.1%'
		},
		{
			segmen_name: 'Standard Members',
			total_members: 2456,
			retention: '75%',
			revenue: '$0.8M',
			growth: '-1.5%'
		},
		{
			segmen_name: 'New Members',
			total_members: 1245,
			retention: '65%',
			revenue: '$0.5M',
			growth: '-3.2%'
		}
	]);
</script>

<svelte:head>
	<title>LoyalTeras - Segmentation Performance Analytics & Reporting</title>
	<meta
		name="description"
		content="Optimize customer loyalty with AI-powered smart segmentation."
	/>
</svelte:head>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">
				Segmentation Performance Analytics & Reporting
			</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Gain AI-powered insights to optimize segment strategies and maximize loyalty impact.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row sm:space-x-3">
			<button class="cursor-pointer rounded-md p-3 text-center shadow-md transition-colors"
				>Download Report</button
			>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6 lg:grid-cols-3">
		{#each rateData as item}
			<div class="rounded-md bg-white p-4 shadow-sm">
				<div class="flex flex-row items-start justify-between">
					<div class="flex flex-col gap-2">
						<h1 class="text-gray-500">{item.title}</h1>
						<h3 class="text-2xl font-semibold">{item.value}</h3>
					</div>
					<p class="text-gray-500">{item.impact}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6 lg:grid-cols-2">
		{#each chartData as item}
			<div class="rounded-lg bg-white p-4 shadow-sm md:p-6">
				<h3 class="mb-3 text-sm font-semibold text-gray-800 md:mb-4 md:text-base">
					{item.title}
				</h3>
				<div
					class="mb-3 flex h-48 items-center justify-center rounded-md border border-gray-200 bg-gray-50 md:h-64"
				>
					<p class="text-sm text-gray-500">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-4 grid grid-cols-1 md:mb-6">
		<div class="rounded-lg border border-gray-100 bg-white shadow-sm">
			<div class="border-b border-gray-100 p-4">
				<h2 class="text-lg font-semibold text-gray-800">ROI-Driven Segment Analyis</h2>
			</div>

			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="bg-gray-50 text-left">
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Segment Name</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Total Members</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Retention %</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Revenue</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Growth %</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-100">
						{#each tableData as segment}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 text-sm font-medium text-gray-700">{segment.segmen_name}</td>
								<td class="px-6 py-4 text-sm text-gray-500"
									>{segment.total_members.toLocaleString()}</td
								>
								<td class="px-6 py-4 text-sm text-gray-500">{segment.retention}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{segment.revenue}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{segment.growth}</td>
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
