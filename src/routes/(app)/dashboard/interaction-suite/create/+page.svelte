<script>
	let currentStep = $state(1);
	let totalSteps = $state(3);

	// Form data
	let campaignForm = $state({
		// Campaign Details
		name: '',
		targetAudience: '',
		bonusPoints: '',
		pointsCreditingCriteria: '',
		communicationTemplate: ''
	});

	// Target audience options
	let targetAudienceOptions = [
		'All Members',
		'Premium Members',
		'New Customers',
		'Inactive Members',
		'High-Value Customers'
	];

	// Points crediting criteria options
	let criteriaOptions = [
		{ value: 'existing', label: 'Existing Members' },
		{ value: 'new', label: 'New Signups' }
	];

	// Template options
	let templateOptions = [
		'Welcome Template',
		'Bonus Points Notification',
		'Loyalty Program Update',
		'Special Offer'
	];

	// Move to next step
	function nextStep() {
		if (currentStep < totalSteps) {
			currentStep = currentStep + 1;
		}
	}

	// Move to previous step
	function prevStep() {
		if (currentStep > 1) {
			currentStep = currentStep - 1;
		}
	}

	// Handle form submission
	function handleSubmit() {
		// Here you would typically send the form data to your backend
		console.log('Form submitted:', campaignForm);
		alert('Campaign created successfully!');
		// Reset form after submission
		campaignForm = {
			name: '',
			targetAudience: '',
			bonusPoints: '',
			pointsCreditingCriteria: '',
			communicationTemplate: ''
		};
		currentStep = 1;
	}

	function createNewTemplate() {
		alert('Open new template form');
		// This would typically open a modal or navigate to a template creation page
	}
</script>

<svelte:head>
	<title>LoyalTeras - Creating & Configuring Campaigns</title>
	<meta
		name="description"
		content="Set up, automate, and optimize campaigns to boost engagement and customer loyalty."
	/>
</svelte:head>

<div class="flex-1 space-y-4 overflow-auto bg-gray-50 p-4 sm:space-y-6 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Creating & Configuring Campaigns</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Set up, automate, and optimize campaigns to boost engagement and customer loyalty.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 rounded-lg bg-white p-6 shadow-sm md:gap-6">
		<div class="grid grid-cols-1 gap-4 sm:gap-6">
			<div class="flex justify-center">
				<div class="flex w-full max-w-3xl justify-between">
					{#each Array(totalSteps) as _, i}
						<div class="flex flex-col items-center">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full {i + 1 ===
								currentStep
									? 'bg-blue-900 text-white'
									: i + 1 < currentStep
										? 'bg-blue-900 text-white'
										: 'bg-gray-200 text-gray-700'}"
							>
								{i + 1}
							</div>
							<div class="mt-2 text-sm font-medium text-gray-600">
								{i === 0 ? 'Campaign Details' : i === 1 ? 'Reward Settings' : 'Communication'}
							</div>
							{#if i < totalSteps - 1}
								<div
									class="absolute top-9 h-0.5 w-24 {i + 1 < currentStep
										? 'bg-blue-900'
										: 'bg-gray-200'}"
									style="left: calc(50% + {(i - 0.5) * 50}%);"
								></div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<form>
				<!-- Step 1: Campaign Details -->
				{#if currentStep === 1}
					<div class="space-y-6">
						<div class="space-y-4">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium text-gray-700"
									>Campaign Name</label
								>
								<input
									type="text"
									id="name"
									bind:value={campaignForm.name}
									class="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									placeholder="Enter campaign name"
								/>
							</div>

							<div>
								<label for="targetAudience" class="mb-2 block text-sm font-medium text-gray-700"
									>Target Audience</label
								>
								<div class="relative">
									<select
										id="targetAudience"
										bind:value={campaignForm.targetAudience}
										class="w-full appearance-none rounded-md border border-gray-300 p-3 pr-10 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									>
										<option value="" disabled selected>Select audience segment</option>
										{#each targetAudienceOptions as option}
											<option value={option}>{option}</option>
										{/each}
									</select>
									<div
										class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3"
									>
										<svg
											class="h-4 w-4 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</div>
								</div>
							</div>

							<div>
								<label for="bonusPoints" class="mb-2 block text-sm font-medium text-gray-700"
									>Bonus Points Allocation</label
								>
								<input
									type="number"
									id="bonusPoints"
									bind:value={campaignForm.bonusPoints}
									class="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									placeholder="Enter points"
								/>
							</div>

							<div>
								<label for="points" class="mb-2 block text-sm font-medium text-gray-700"
									>Points Crediting Criteria</label
								>
								<div class="space-y-2">
									{#each criteriaOptions as option}
										<div class="flex items-center">
											<input
												type="radio"
												id={option.value}
												name="criteria"
												value={option.value}
												bind:group={campaignForm.pointsCreditingCriteria}
												class="h-4 w-4 border-gray-300 text-blue-900 focus:ring-blue-500"
											/>
											<label for={option.value} class="ml-2 block text-sm text-gray-700">
												{option.label}
											</label>
										</div>
									{/each}
								</div>
							</div>

							<div>
								<label for="template" class="mb-2 block text-sm font-medium text-gray-700"
									>Communication Template</label
								>
								<div class="flex items-center gap-2">
									<div class="relative flex-1">
										<select
											id="template"
											bind:value={campaignForm.communicationTemplate}
											class="w-full appearance-none rounded-md border border-gray-300 p-3 pr-10 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
										>
											<option value="" disabled selected>Select template</option>
											{#each templateOptions as option}
												<option value={option}>{option}</option>
											{/each}
										</select>
										<div
											class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3"
										>
											<svg
												class="h-4 w-4 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M19 9l-7 7-7-7"
												></path>
											</svg>
										</div>
									</div>
									<button
										type="button"
										onclick={createNewTemplate}
										class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
									>
										<svg
											class="mr-1 h-4 w-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 6v6m0 0v6m0-6h6m-6 0H6"
											></path>
										</svg>
										New Template
									</button>
								</div>
							</div>
						</div>
					</div>
				{/if}

				<!-- Step 2: Reward Settings (placeholder) -->
				{#if currentStep === 2}
					<div class="space-y-6">
						<h2 class="text-xl font-medium text-gray-800">Reward Settings</h2>
						<p class="text-gray-500">Configure reward settings for your campaign.</p>

						<!-- Placeholder content for step 2 -->
						<div class="space-y-4">
							<div>
								<label for="rewardType" class="mb-2 block text-sm font-medium text-gray-700"
									>Reward Type</label
								>
								<div class="relative">
									<select
										id="rewardType"
										class="w-full appearance-none rounded-md border border-gray-300 p-3 pr-10 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									>
										<option value="" disabled selected>Select reward type</option>
										<option value="percentage">Percentage Discount</option>
										<option value="fixed">Fixed Amount</option>
										<option value="points">Loyalty Points</option>
									</select>
									<div
										class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3"
									>
										<svg
											class="h-4 w-4 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</div>
								</div>
							</div>

							<div>
								<label for="rewardValue" class="mb-2 block text-sm font-medium text-gray-700"
									>Reward Value</label
								>
								<input
									type="number"
									id="rewardValue"
									class="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									placeholder="Enter reward value"
								/>
							</div>
						</div>
					</div>
				{/if}

				<!-- Step 3: Communication (placeholder) -->
				{#if currentStep === 3}
					<div class="space-y-6">
						<h2 class="text-xl font-medium text-gray-800">Communication</h2>
						<p class="text-gray-500">Configure communication settings for your campaign.</p>

						<!-- Placeholder content for step 3 -->
						<div class="space-y-4">
							<div>
								<label
									for="notificationChannel"
									class="mb-2 block text-sm font-medium text-gray-700">Notification Channel</label
								>
								<div class="relative">
									<select
										id="notificationChannel"
										class="w-full appearance-none rounded-md border border-gray-300 p-3 pr-10 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									>
										<option value="" disabled selected>Select notification channel</option>
										<option value="email">Email</option>
										<option value="sms">SMS</option>
										<option value="push">Push Notification</option>
									</select>
									<div
										class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3"
									>
										<svg
											class="h-4 w-4 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</div>
								</div>
							</div>

							<div>
								<label for="messageContent" class="mb-2 block text-sm font-medium text-gray-700"
									>Message Content</label
								>
								<textarea
									id="messageContent"
									rows="4"
									class="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
									placeholder="Enter message content"
								></textarea>
							</div>
						</div>
					</div>
				{/if}

				<!-- Button Group -->
				<div class="mt-8 flex justify-between">
					<button
						type="button"
						class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
						onclick={currentStep === 1 ? null : prevStep}
					>
						{currentStep === 1 ? 'Cancel' : 'Previous'}
					</button>

					{#if currentStep === totalSteps}
						<button
							type="submit"
							class="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
						>
							Create Campaign
						</button>
					{:else}
						<button
							type="button"
							class="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							onclick={nextStep}
						>
							Next
						</button>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>
