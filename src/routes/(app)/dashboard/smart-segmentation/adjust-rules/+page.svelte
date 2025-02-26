<script lang="ts">
	const realtimeCharts = [
		{ title: 'Retention Rate', value: '87%' },
		{ title: 'Churn Rate', value: '13%' },
		{ title: 'Revenue Contribution', value: '$1.2M' }
	];

	const segments = [
		{
			name: 'High Value Customers',
			type: 'Loyalty-Based',
			totalMembers: 2456,
			lastUpdated: 'Jan 15, 2025'
		}
	];

	function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();

		console.log('Form submitted');
	}
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
			<h1 class="text-2xl font-semibold text-gray-800">Rule Configuration Panel</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Define customer segmentation rules based on behavior, spending, and engagement.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row sm:space-x-3">
			<button
				type="button"
				class="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white p-3 text-center text-gray-700 shadow-md transition-colors hover:bg-gray-50"
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
					<path d="M5 12h14"></path>
					<path d="M12 5l7 7-7 7"></path>
				</svg>
				Reset Default
			</button>
			<button
				type="submit"
				form="segmentation-form"
				class="hover:bg-opacity-90 bg-primary-blue flex cursor-pointer items-center justify-center gap-2 rounded-md p-3 text-center text-white shadow-md transition-colors"
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
					<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
					<polyline points="17 21 17 13 7 13 7 21"></polyline>
					<polyline points="7 3 7 8 15 8"></polyline>
				</svg>
				Save & Apply
			</button>
		</div>
	</div>

	<form id="segmentation-form" on:submit={handleSubmit} class="mt-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<!-- AI Segments -->
			<div class="rounded-lg bg-white p-6 shadow-sm">
				<h2 class="mb-2 text-xl font-medium text-gray-700">AI Segments</h2>
				<p class="mb-6 text-sm text-gray-500">
					Define how AI should categorize customers into segments based on predefined metrics.
				</p>

				<!-- High Value Customers -->
				<div class="mb-6">
					<div class="mb-4 flex items-center gap-2">
						<div
							class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>
						<h3 class="font-medium text-gray-700">High Value Customers</h3>
					</div>

					<div class="space-y-4">
						<div>
							<select
								name="highValueFrequency"
								class="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							>
								<option value="monthly">Purchase Frequency: Monthly</option>
								<option value="weekly">Purchase Frequency: Weekly</option>
								<option value="daily">Purchase Frequency: Daily</option>
							</select>
						</div>
						<div>
							<input
								name="highValueThreshold"
								type="text"
								placeholder="Spending Threshold ($)"
								class="w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>
				</div>

				<!-- Regular Customers -->
				<div class="mb-6">
					<div class="mb-4 flex items-center gap-2">
						<div
							class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-600"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
						</div>
						<h3 class="font-medium text-gray-700">Regular Customers</h3>
					</div>

					<div class="space-y-4">
						<div>
							<select
								name="regularFrequency"
								class="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							>
								<option value="quarterly">Purchase Frequency: Quarterly</option>
								<option value="monthly">Purchase Frequency: Monthly</option>
								<option value="weekly">Purchase Frequency: Weekly</option>
							</select>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<input
								name="regularMin"
								type="text"
								placeholder="Min ($)"
								class="w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							/>
							<input
								name="regularMax"
								type="text"
								placeholder="Max ($)"
								class="w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>
				</div>

				<!-- At Risk Customers -->
				<div class="mb-6">
					<div class="mb-4 flex items-center gap-2">
						<div
							class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
								></path>
								<line x1="12" y1="9" x2="12" y2="13"></line>
								<line x1="12" y1="17" x2="12.01" y2="17"></line>
							</svg>
						</div>
						<h3 class="font-medium text-gray-700">At Risk Customers</h3>
					</div>

					<div class="space-y-4">
						<div>
							<select
								name="atRiskPurchase"
								class="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							>
								<option value="6months">No purchase in last: 6 months</option>
								<option value="3months">No purchase in last: 3 months</option>
								<option value="1month">No purchase in last: 1 month</option>
							</select>
						</div>
						<div>
							<input
								name="atRiskSpending"
								type="text"
								placeholder="Spending less than ($)"
								class="w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Custom Segments + Preview -->
			<div class="space-y-6">
				<!-- Custom Segments -->
				<div class="rounded-lg bg-white p-6 shadow-sm">
					<h2 class="mb-2 text-xl font-medium text-gray-700">Custom Segments</h2>
					<p class="mb-6 text-sm text-gray-500">
						Define your own customer segments with custom criteria.
					</p>

					<!-- VIP Members -->
					<div class="mb-6">
						<div class="mb-4 flex items-center gap-2">
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
									></path>
								</svg>
							</div>
							<h3 class="font-medium text-gray-700">VIP Members</h3>
						</div>

						<div class="space-y-4">
							<div>
								<select
									name="vipMembership"
									class="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								>
									<option value="gold">Membership Level: Gold</option>
									<option value="silver">Membership Level: Silver</option>
									<option value="bronze">Membership Level: Bronze</option>
								</select>
							</div>
						</div>
					</div>

					<!-- New Customers -->
					<div class="mb-6">
						<div class="mb-4 flex items-center gap-2">
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M12 2v20"></path>
									<path d="M2 12h20"></path>
								</svg>
							</div>
							<h3 class="font-medium text-gray-700">New Customers</h3>
						</div>

						<div class="space-y-4">
							<div>
								<select
									name="newCustomerPurchase"
									class="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								>
									<option value="30days">First purchase in last: 30 days</option>
									<option value="60days">First purchase in last: 60 days</option>
									<option value="90days">First purchase in last: 90 days</option>
								</select>
							</div>
							<div>
								<input
									name="timeRange"
									type="text"
									placeholder="Time range (days)"
									class="w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>
						</div>
					</div>
				</div>

				<!-- Real-time Preview -->
				<div class="rounded-lg bg-white p-6 shadow-sm">
					<div class="mb-4 flex items-center justify-between">
						<h2 class="text-xl font-medium text-gray-700">Real-time Preview</h2>
						<button
							aria-label="chart"
							type="button"
							class="cursor-pointer text-gray-500 hover:text-gray-700"
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
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
							</svg>
						</button>
					</div>

					<h3 class="mb-4 font-medium text-gray-700">Customer Distribution</h3>
					<div class="flex h-40 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
						Preview chart will appear here
					</div>
				</div>
			</div>
		</div>

		<!-- Exclusion Rules -->
		<div class="mt-6 rounded-lg bg-white p-6 shadow-sm">
			<h2 class="mb-2 text-xl font-medium text-gray-700">Exclusion Rules</h2>
			<p class="mb-6 text-sm text-gray-500">
				Exclude specific customer groups from loyalty segmentation.
			</p>

			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<input
						type="checkbox"
						id="exclude-unsub"
						name="excludeUnsub"
						class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					<label for="exclude-unsub" class="text-gray-700"
						>Exclude customers who unsubscribed from marketing emails</label
					>
				</div>
				<div class="flex items-center gap-3">
					<input
						type="checkbox"
						id="exclude-opted-out"
						name="excludeOptedOut"
						class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					<label for="exclude-opted-out" class="text-gray-700"
						>Exclude customers who opted out of loyalty program</label
					>
				</div>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="mt-6 flex justify-end space-x-4">
			<button
				type="button"
				class="cursor-pointer rounded-md border border-gray-300 bg-white px-6 py-2 text-gray-700 hover:bg-gray-50"
			>
				Cancel
			</button>
			<button
				type="submit"
				class="bg-primary-blue flex cursor-pointer items-center gap-2 rounded-md px-6 py-2 text-white"
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
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
				Save & Apply Changes
			</button>
		</div>
	</form>
</div>
