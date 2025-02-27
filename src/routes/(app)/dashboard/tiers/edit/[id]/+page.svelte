<script lang="ts">
	let tierIcon = $state(null);

	const rateData = $derived([
		{ title: 'Revenue Rate', value: '$1.2M', impact: '+5.8%' },
		{ title: 'Churn Rate', value: '15%', impact: '-2.1%' },
		{ title: 'Revenue Contribution', value: '85%', impact: '+2.1%' }
	]);

	function handleFileUpload(event: { target: { files: any[] } }) {
		const file = event.target.files[0];
		if (file) {
			// Handle file upload logic here
			tierIcon = file;
		}
	}

	function handleDragOver(event: { preventDefault: () => void }) {
		event.preventDefault();
	}

	function handleDrop(event: { preventDefault: () => void; dataTransfer: { files: any[] } }) {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file) {
			// Handle file drop logic here
			tierIcon = file;
		}
	}
</script>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Tier Details & Settings</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Modify tiers details, rules, and performance insights.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row sm:space-x-3">
			<a
				href="/dashboard/tiers"
				class="bg-netral-dark hover:bg-opacity-90 rounded-md p-3 text-center text-white shadow-md transition-colors"
				>Back to Tiers</a
			>
		</div>
	</div>

	<div class="mb-4 grid grid-cols-1 gap-4 md:mb-6 md:grid-cols-2 md:gap-6">
		<form action="" method="post" class="grid grid-cols-1 space-y-4">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div class="grid grid-cols-1 gap-4 rounded-md bg-white p-4 shadow-sm md:p-6">
				<div class="space-y-2">
					<label for="tierName" class="block text-sm font-medium text-gray-700">Tier Name</label>
					<input
						type="text"
						id="tierName"
						name="tier_name"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div class="space-y-2">
					<label for="fileInput" class="block text-sm font-medium text-gray-700">Tier Icon</label>
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="cursor-pointer rounded-md border border-dashed border-gray-300 p-10 text-center"
						ondragover={() => handleDragOver}
						ondrop={() => handleDrop}
						onclick={() => document?.getElementById('fileInput')?.click()}
					>
						<input
							type="file"
							id="fileInput"
							class="hidden"
							onchange={() => handleFileUpload}
							accept="image/*"
						/>
						<svg
							class="mx-auto h-10 w-10 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
							/>
						</svg>
						<p class="mt-2 text-sm text-gray-500">Drag and drop or click to upload</p>
					</div>
				</div>

				<div class="space-y-2">
					<label for="multiplier" class="block text-sm font-medium text-gray-700">Multiplier</label>
					<input
						type="text"
						id="multiplier"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div class="space-y-2">
					<label for="entryMilestone" class="block text-sm font-medium text-gray-700"
						>Entry Milestone (Points)</label
					>
					<input
						type="text"
						id="entryMilestone"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div class="space-y-2">
					<label for="bonusMilestone" class="block text-sm font-medium text-gray-700"
						>Bonus for Milestone</label
					>
					<input
						type="text"
						id="bonusMilestone"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div class="flex justify-end space-x-2">
					<button
						type="reset"
						class="hover:bg-opacity-90 rounded-md border-1 border-gray-200 px-10 py-2 text-center shadow-md"
						>Cancel</button
					>
					<button
						type="submit"
						class="bg-netral-dark hover:bg-opacity-90 rounded-md px-10 py-2 text-center text-white shadow-md transition-colors"
						>Save</button
					>
				</div>
			</div>
		</form>

		<div class="grid grid-cols-1 gap-4 md:gap-6">
			<div class="rounded-lg bg-white p-4 shadow-sm md:p-6">
				<div class="flex justify-between">
					<h1 class="mb-3 text-sm font-semibold text-gray-800 md:mb-4 md:text-xl">
						Member Distribution
					</h1>
				</div>
				<div
					class="mb-3 flex h-48 items-center justify-center rounded-md border border-gray-200 bg-gray-50 md:h-64"
				>
					<p class="text-sm text-gray-500">Pie Chart Visualization</p>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
				{#each rateData as item}
					<div class="h-auto rounded-md bg-white p-4 shadow-sm md:h-30">
						<div class="flex flex-col gap-2">
							<h1 class="text-sm text-gray-500">{item.title}</h1>
							<h3 class="text-2xl font-semibold">{item.value}</h3>
							<p class="text-sm text-gray-500">{item.impact}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
