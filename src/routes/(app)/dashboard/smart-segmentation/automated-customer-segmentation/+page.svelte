<svelte:head>
	<title>LoyalTeras - Automated Customer Segmentation</title>
	<meta name="description" content="Automated customer segmentation for your business." />
</svelte:head>

<div class="flex-1 overflow-auto bg-gray-50 p-4 sm:space-y-4 md:p-6">
	<div class="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-semibold text-gray-800">Automated Customer Segmentation</h1>
			<p class="text-base text-gray-500 md:text-lg">
				Automatically categorize customers based on predefined AI rules and behavioral insights.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row sm:space-x-3">
			<div class="flex items-center gap-2">
				<span class="text-gray-700">Auto-Segmentation</span>
				<label class="relative inline-flex cursor-pointer items-center">
					<input type="checkbox" value="" class="peer sr-only" />
					<div
						class="peer-checked:bg-primary-blue h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"
					></div>
				</label>
			</div>
			<a
				href="/dashboard/smart-segmentation/adjust-rules"
				class="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
						clip-rule="evenodd"
					/>
				</svg>
				Adjust Rules
			</a>
		</div>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
		<!-- AI Segments Card -->
		<div class="rounded-lg bg-white p-6 shadow-sm">
			<h2 class="mb-4 text-xl font-medium text-gray-800">AI Segments</h2>

			<div class="space-y-4">
				<!-- High Value Customers -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
						</span>
						<span class="font-medium">High Value Customers</span>
					</div>
					<span class="text-lg font-semibold">2,456</span>
				</div>

				<!-- Regular Customers -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</span>
						<span class="font-medium">Regular Customers</span>
					</div>
					<span class="text-lg font-semibold">5,891</span>
				</div>

				<!-- At Risk Customers -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-amber-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</span>
						<span class="font-medium">At Risk Customers</span>
					</div>
					<span class="text-lg font-semibold">892</span>
				</div>
			</div>
		</div>

		<!-- Exclusions Card -->
		<div class="rounded-lg bg-white p-6 shadow-sm">
			<h2 class="mb-4 text-xl font-medium text-gray-800">Exclusions</h2>

			<div class="space-y-4">
				<!-- Do Not Contact -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
								/>
							</svg>
						</span>
						<span class="font-medium">Do Not Contact</span>
					</div>
					<span class="text-lg font-semibold">145</span>
				</div>

				<!-- Opted Out -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
								/>
							</svg>
						</span>
						<span class="font-medium">Opted Out</span>
					</div>
					<span class="text-lg font-semibold">267</span>
				</div>
			</div>
		</div>

		<!-- Custom Segments Card -->
		<div class="rounded-lg bg-white p-6 shadow-sm">
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-xl font-medium text-gray-800">Custom Segments</h2>
				<a
					aria-label="add"
					href="/"
					class="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>

			<div class="space-y-4">
				<!-- VIP Members -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
								/>
							</svg>
						</span>
						<span class="font-medium">VIP Members</span>
					</div>
					<span class="text-lg font-semibold">328</span>
				</div>

				<!-- New Customers -->
				<div class="flex items-center justify-between rounded-lg border border-gray-200 p-4">
					<div class="flex items-center">
						<span class="mr-3 text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
								/>
							</svg>
						</span>
						<span class="font-medium">New Customers</span>
					</div>
					<span class="text-lg font-semibold">1,245</span>
				</div>
			</div>
		</div>
	</div>
</div>
