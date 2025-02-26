<script lang="ts">
	const realtimeCharts = $derived([
		{ title: 'Revenue Contribution', value: '$1.2M', description: '+12.5% vs last month' },
		{ title: 'Churn Rate', value: '2.4%', description: '-0.8% vs last month' },
		{ title: 'Avg. Lifetime Value', value: '$1,200', description: '+5.2% vs last month' }
	]);
</script>

<svelte:head>
	<title>LoyalTeras - Smart Segmentation</title>
	<meta
		name="description"
		content="Optimize customer loyalty with AI-powered smart segmentation."
	/>
</svelte:head>

<div class="flex-1 overflow-auto bg-gray-50 p-4 sm:space-y-4 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Segment Details & Settings</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Optimize customer loyalty with AI-powered smart segmentation.
			</p>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:gap-6">
		<form action="" method="post" class="grid grid-cols-1 space-y-4">
			<div class="grid grid-cols-1 gap-4 rounded-md bg-white p-4 shadow-sm md:p-6">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="flex flex-col gap-4">
						<label for="name">Segment Name</label>
						<input
							type="text"
							id="name"
							name="name"
							class="rounded-md border border-gray-200 p-2"
						/>
					</div>
					<div class="flex flex-col gap-4">
						<label for="tag">Segment Tag</label>
						<input type="text" id="tag" name="tag" class="rounded-md border border-gray-200 p-2" />
					</div>
				</div>
				<div class="bg-secondary-gray rounded-md p-4">
					<div class="flex flex-row items-center justify-between gap-4">
						<div class="flex flex-col">
							<h3 class="text-lg font-semibold">Segment Members</h3>
							<p class="text-gray-500">Current member count with applied filters</p>
						</div>
						<h2 class="text-3xl font-bold">24,968</h2>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-4 rounded-md bg-white p-4 shadow-sm md:p-6">
				<h2 class="mb-4 text-lg font-medium text-gray-700">Segmentation Criteria</h2>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="flex flex-col">
						<label for="primary" class="mb-2 text-sm text-gray-600">Primary Filter</label>
						<div class="relative">
							<select
								class="focus:border-primary-blue focus:ring-primary-blue focus:ring-opacity-50 w-full appearance-none rounded-md border border-gray-200 p-2 pr-8 focus:ring focus:outline-none"
								id="primary"
							>
								<option>Loyalty-Based</option>
							</select>
							<div
								class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
							>
								<svg
									class="h-4 w-4 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="flex flex-col">
						<label for="sub" class="mb-2 text-sm text-gray-600">Sub-Filter</label>
						<div class="relative">
							<select
								class="focus:border-primary-blue focus:ring-primary-blue focus:ring-opacity-50 w-full appearance-none rounded-md border border-gray-200 p-2 pr-8 focus:ring focus:outline-none"
								id="sub"
							>
								<option>Transaction History</option>
							</select>
							<div
								class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
							>
								<svg
									class="h-4 w-4 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-end">
					<button
						type="button"
						class="bg-primary-blue hover:bg-primary-blue cursor-pointer rounded-md px-8 py-2 font-semibold text-white"
					>
						Add Filter
					</button>
				</div>

				<div class="mt-1">
					<div class="flex items-center gap-2">
						<svg
							class="h-5 w-5 rotate-180 transform text-gray-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="font-medium text-gray-600">Active Filters (3)</span>
					</div>

					<div class="mt-4 flex flex-wrap gap-2">
						<span
							class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
						>
							Spend > $1000
						</span>
						<span
							class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
						>
							Last 90 days
						</span>
						<span
							class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
						>
							Loyalty Tier: Gold
						</span>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
