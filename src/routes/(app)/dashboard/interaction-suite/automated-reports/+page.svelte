<script lang="ts">
	const rateData = $derived([
		{ title: 'Engagement Rate', value: '68.7%', description: '+12.5% vs last month' },
		{ title: 'Conversion Rate', value: '24.5%', description: '+2.8% vs last month' },
		{ title: 'ROI', value: '386%', description: '+5.2% vs last month' }
	]);

	const chartData = $derived([
		{ title: 'Engangement Trends', description: 'Engagement Chart Visualization' },
		{ title: 'Revenue Impact', description: 'Revenue Chart Visualization' }
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
	<title>Campaign Performance & Automated Reports</title>
	<meta
		name="description"
		content="Review campaign performance insight and AI-driven recomendations"
	/>
</svelte:head>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Campaign Performance & Automated Reports</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Review campaign performance insight and AI-driven recomendations
			</p>
		</div>

		<div class="flex flex-col gap-4 sm:flex-row sm:gap-3">
			<button
				class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md border-1 border-gray-300 px-4 py-2 text-center shadow-md transition-colors"
				>Download Report</button
			>
			<button
				class="hover:bg-opacity-90 flex cursor-pointer items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-center text-white shadow-md transition-colors"
				>Optimize Strategy</button
			>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6 lg:grid-cols-3">
		{#each rateData as item}
			<div class="rounded-md bg-white p-4 shadow-sm">
				<div class="flex flex-col items-start justify-between gap-1 sm:gap-1">
					<h1 class="text-gray-500">{item.title}</h1>
					<h3 class="text-3xl font-semibold">{item.value}</h3>
					<p class="text-gray-500">{item.description}</p>
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
</div>
