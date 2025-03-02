<script lang="ts">
	// Sample audience options
	const audienceOptions = [
		'Premium Members',
		'New Customers',
		'High Spenders',
		'Inactive Members',
		'Seasonal Shoppers',
		'Loyalty Program Tier 1',
		'Loyalty Program Tier 2'
	];

	// Sample campaign data
	const allCampaigns = [
		{
			name: 'Spring Loyalty Boost',
			audience: 'Premium Members',
			reward: '2x Points',
			predictions: {
				engagement: '45%',
				revenue: '+$12,000'
			},
			status: 'Pending Review',
			totalUsers: 2854
		},
		{
			name: 'Summer Flash Sale',
			audience: 'Inactive Members',
			reward: '15% Discount',
			predictions: {
				engagement: '38%',
				revenue: '+$8,500'
			},
			status: 'Approved',
			totalUsers: 3150
		},
		{
			name: 'Holiday Bundle Offer',
			audience: 'High Spenders',
			reward: 'Free Gift',
			predictions: {
				engagement: '52%',
				revenue: '+$15,200'
			},
			status: 'Pending Review',
			totalUsers: 1890
		},
		{
			name: 'Welcome Bonus',
			audience: 'New Customers',
			reward: '500 Points',
			predictions: {
				engagement: '65%',
				revenue: '+$7,800'
			},
			status: 'Rejected',
			totalUsers: 745
		}
	];

	// Filtering
	let showFilterDropdown = false;
	let selectedFilter = 'All';
	let filteredCampaigns = [...allCampaigns];

	function toggleFilterDropdown() {
		showFilterDropdown = !showFilterDropdown;
	}

	function selectFilter(filter: string) {
		selectedFilter = filter;
		showFilterDropdown = false;

		if (filter === 'All') {
			filteredCampaigns = [...allCampaigns];
		} else {
			filteredCampaigns = allCampaigns.filter((campaign) => campaign.status === filter);
		}
	}

	// Get all unique statuses for filters
	const statusFilters = ['All', ...new Set(allCampaigns.map((campaign) => campaign.status))];

	// Target audience dropdown
	let selectedAudience = 'Premium Members';
	let showAudienceDropdown = false;
	let selectedCampaign = allCampaigns[0];

	function toggleAudienceDropdown() {
		showAudienceDropdown = !showAudienceDropdown;
	}

	function selectAudience(audience: string) {
		selectedAudience = audience;
		showAudienceDropdown = false;
	}

	function viewCampaignDetails(campaign: any) {
		selectedCampaign = campaign;
		selectedAudience = campaign.audience;
	}
</script>

<svelte:head>
	<title>LoyalTeras - AI-Generated Campaigns & Approval Process</title>
	<meta
		name="description"
		content="AI Automatically generates campaigns based on historical data and engagement patterns."
	/>
</svelte:head>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">
				AI-Generated Campaigns & Approval Process
			</h1>
			<p class="text-base text-gray-500 md:text-lg">
				AI Automatically generates campaigns based on historical data and engagement patterns.
			</p>
		</div>
	</div>

	<div class="rounded-lg bg-white p-6 shadow-sm">
		<div class="mb-6 flex items-center justify-between">
			<h2 class="text-xl font-medium text-gray-700">AI-Generated Campaigns</h2>
			<div class="flex items-center gap-4">
				<div class="relative">
					<button
						onclick={toggleFilterDropdown}
						class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-gray-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
						</svg>
						Filter: {selectedFilter}
					</button>
					<!-- Filter dropdown -->
					{#if showFilterDropdown}
						<div class="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
							{#each statusFilters as filter}
								<button
									onclick={() => selectFilter(filter)}
									class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 {selectedFilter ===
									filter
										? 'bg-gray-50 font-medium'
										: ''}"
								>
									{filter}
								</button>
							{/each}
						</div>
					{/if}
				</div>
				<button class="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="12" y1="5" x2="12" y2="19" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
					New Campaign
				</button>
			</div>
		</div>

		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
						>
							Campaign Name
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
						>
							Audience
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
						>
							Reward
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
						>
							Predictions
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
						>
							Status
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-right text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each filteredCampaigns as campaign}
						<tr class="hover:bg-gray-50">
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
								{campaign.name}
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
								{campaign.audience}
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
								{campaign.reward}
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap">
								<div>
									<div class="text-gray-700">Engagement: {campaign.predictions.engagement}</div>
									<div class="text-gray-700">Revenue: {campaign.predictions.revenue}</div>
								</div>
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap">
								{#if campaign.status === 'Pending Review'}
									<span
										class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800"
									>
										Pending Review
									</span>
								{:else if campaign.status === 'Approved'}
									<span
										class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
									>
										Approved
									</span>
								{:else if campaign.status === 'Rejected'}
									<span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
										Rejected
									</span>
								{/if}
							</td>
							<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
								<div class="flex items-center justify-end space-x-2">
									<button
										onclick={() => viewCampaignDetails(campaign)}
										class="text-gray-600 hover:text-gray-900"
										aria-label="View Campaign Details"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M12 20h9" />
											<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
										</svg>
									</button>
									<button class="text-green-600 hover:text-green-900" aria-label="Approve Campaign">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</button>
									<button class="text-red-600 hover:text-red-900" aria-label="Reject Campaign">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M3 6h18" />
											<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
											<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
										</svg>
									</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Campaign Details Section -->
	<div class="rounded-lg bg-white p-6 shadow-sm">
		<h2 class="mb-6 text-xl font-medium text-gray-700">Campaign Details</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<label for="campaign_name" class="block text-sm font-medium text-gray-600"
					>Campaign Name</label
				>
				<div class="mt-1 text-gray-800">{selectedCampaign.name}</div>
			</div>

			<div>
				<label for="target" class="block text-sm font-medium text-gray-600">Target Audience</label>
				<div class="relative">
					<button
						onclick={toggleAudienceDropdown}
						class="mt-1 flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					>
						<span>{selectedAudience}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-gray-400"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>

					{#if showAudienceDropdown}
						<div
							class="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg"
						>
							<ul class="max-h-60 overflow-auto py-1">
								{#each audienceOptions as audience}
									<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
									<!-- svelte-ignore a11y_click_events_have_key_events -->
									<li
										onclick={() => selectAudience(audience)}
										class="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 {selectedAudience ===
										audience
											? 'bg-gray-50 font-medium'
											: ''}"
									>
										{audience}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>

			<div>
				<label for="bonus" class="block text-sm font-medium text-gray-600"
					>Bonus Points Allocation</label
				>
				<div class="mt-1 text-gray-800">
					{selectedCampaign.reward.includes('Points')
						? selectedCampaign.reward.split(' ')[0].replace('x', '')
						: '0'}
				</div>
			</div>
		</div>

		<div class="mt-8 flex justify-end space-x-4">
			<button
				class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				Cancel
			</button>
			<button
				class="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
			>
				Approve Campaign
			</button>
		</div>
	</div>
</div>
