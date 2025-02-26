<script>
	import { uuidv4 } from '$lib/utils/utils';

	const tiers = $derived([
		{
			name: 'Bronze',
			member_count: 100,
			multiplier: 1.5,
			entry_points: 0,
			welcome_bonus: '100pts'
		},
		{ name: 'Silver', member_count: 50, multiplier: 2, entry_points: 100, welcome_bonus: '200pts' },
		{ name: 'Gold', member_count: 25, multiplier: 2.5, entry_points: 200, welcome_bonus: '300pts' },
		{
			name: 'Platinum',
			member_count: 10,
			multiplier: 3,
			entry_points: 300,
			welcome_bonus: '400pts'
		}
	]);
</script>

<svelte:head>
	<title>LoyalTeras - Tiers</title>
	<meta
		name="description"
		content="Optimize customer loyalty with AI-powered smart segmentation."
	/>
</svelte:head>

<div class="flex-1 overflow-auto bg-gray-50 p-4 sm:space-y-4 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Tiers</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Customize, automate, and optimize customer tiers to boost loyalty and maximize engagement.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row sm:space-x-3">
			<a
				href="/dashboard/tiers/create-new-tier"
				class="bg-netral-dark hover:bg-opacity-90 rounded-md p-3 text-center text-white shadow-md transition-colors"
				>Add New Tier</a
			>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 md:mb-6">
		<div class="rounded-lg border border-gray-100 bg-white shadow-sm">
			<div class="border-b border-gray-100 p-4">
				<h2 class="text-lg font-semibold text-gray-800">Segment Overview</h2>
			</div>

			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="bg-gray-50 text-left">
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Tier Name</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Member Count</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Multiplier</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Entry Points</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Welcome Bonus</th>
							<th class="px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-100">
						{#each tiers as tier}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 text-sm font-medium text-gray-700">{tier.name}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.member_count.toLocaleString()}</td
								>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.multiplier}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.entry_points}</td>
								<td class="px-6 py-4 text-sm text-gray-500">{tier.welcome_bonus}</td>
								<td class="flex space-x-2 px-6 py-4 text-sm">
									<a
										href="/dashboard/tiers/edit/{uuidv4()}"
										class="text-gray-500 hover:text-gray-700"
										aria-label="Edit"
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
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</a>
									<a
										href="/dashboard/tiers/report/{uuidv4()}"
										class="text-gray-500 hover:text-gray-700"
										aria-label="View Analytics"
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
