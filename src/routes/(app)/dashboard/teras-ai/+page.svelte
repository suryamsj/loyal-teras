<script lang="ts">
	let messageCount = $state(0);
	let totalMessages = $state(2000);
	let inputText = $state('');

	function handleInput(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const text = event.currentTarget.value;
		inputText = text;
		messageCount = text.length;
	}

	function sendMessage() {
		if (inputText.trim()) {
			inputText = '';
			messageCount = 0;
		}
	}

	$effect(() => {
		if (messageCount >= totalMessages) {
			alert('You have reached the maximum message limit.');
		}

		return () => {
			// Cleanup
		};
	});
</script>

<svelte:head>
	<title>LoyalTeras - Teras AI</title>
	<meta
		name="description"
		content="Teras AI is a powerful AI tool that helps you to optimize your customer loyalty."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col overflow-auto bg-white pb-10">
	<header
		class="flex items-center justify-between border-b border-gray-100 bg-white px-8 py-4 shadow-sm"
	>
		<h1 class="text-2xl font-light tracking-tight text-gray-800">
			Teras<span class="font-semibold">AI</span>
		</h1>
		<p class="hidden max-w-md text-xs text-gray-500 md:block">
			Optimize customer loyalty with AI-powered smart segmentation
		</p>
		<div class="flex items-center gap-4">
			<div class="relative">
				<input
					type="text"
					placeholder="Quick Access"
					class="w-56 rounded-full border-0 bg-gray-50 py-2 pr-4 pl-10 text-sm transition focus:ring-2 focus:ring-blue-100 focus:outline-none"
				/>
				<div class="absolute top-1/2 left-3 -translate-y-1/2 transform">
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
						class="text-gray-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
					>
				</div>
			</div>
			<button
				class="rounded-full p-2 text-gray-500 transition hover:bg-gray-50"
				aria-label="Notifications"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path
						d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
					/></svg
				>
			</button>
		</div>
	</header>

	<main
		class="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-8"
	>
		<div class="flex w-full max-w-3xl flex-col items-center">
			<div class="mb-10 rounded-full bg-blue-50 p-4 text-blue-500 shadow-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M20 12v10H4V12" /><path d="M2 7h20v5H2z" /><path d="M12 22V7" /><path
						d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
					/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg
				>
			</div>

			<h1 class="mb-4 text-center text-3xl font-light text-gray-800">
				Optimize Your Loyalty Strategy <span class="font-semibold">with AI</span>
			</h1>
			<p class="mb-12 max-w-xl text-center text-gray-600">
				Ask anything about customer segmentation, campaign optimization, and AI-powered insights to
				enhance your loyalty program.
			</p>

			<div class="mb-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
				<button
					class="group rounded-lg border border-gray-100 bg-white p-4 text-left shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-md"
				>
					<span class="text-gray-700 transition duration-300 group-hover:text-gray-900"
						>Group customers based on behavior, demographics, or location</span
					>
				</button>
				<button
					class="group rounded-lg border border-gray-100 bg-white p-4 text-left shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-md"
				>
					<span class="text-gray-700 transition duration-300 group-hover:text-gray-900"
						>Identify similar customers and exclude irrelevant ones</span
					>
				</button>
				<button
					class="group rounded-lg border border-gray-100 bg-white p-4 text-left shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-md"
				>
					<span class="text-gray-700 transition duration-300 group-hover:text-gray-900"
						>Get AI-driven insights on customer behavior and future trends</span
					>
				</button>
				<button
					class="group rounded-lg border border-gray-100 bg-white p-4 text-left shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-md"
				>
					<span class="text-gray-700 transition duration-300 group-hover:text-gray-900"
						>Analyze and improve the effectiveness of loyalty rewards</span
					>
				</button>
				<button
					class="group rounded-lg border border-gray-100 bg-white p-4 text-left shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-md"
				>
					<span class="text-gray-700 transition duration-300 group-hover:text-gray-900"
						>Let AI manage and optimize your marketing campaigns</span
					>
				</button>
				<button
					class="group rounded-lg border border-gray-100 bg-white p-4 text-left shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-md"
				>
					<span class="text-gray-700 transition duration-300 group-hover:text-gray-900"
						>Set up automated incentives for birthdays and special occasions</span
					>
				</button>
			</div>
		</div>
	</main>

	<footer class="border-t border-gray-100 bg-white p-6">
		<div class="mx-auto max-w-3xl">
			<div class="rounded-xl bg-white p-4 shadow-sm">
				<div class="mb-4 flex items-center">
					<div class="relative w-full">
						<input
							type="text"
							placeholder="Ask AI Question or Make Request..."
							class="w-full rounded-lg border border-gray-200 py-3 pr-10 pl-4 transition focus:border-blue-200 focus:ring-2 focus:ring-blue-100 focus:outline-none"
							oninput={handleInput}
							onkeypress={(e) => e.key === 'Enter' && sendMessage()}
						/>
						<div class="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400">
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
								class="lucide lucide-sparkles"
								><path
									d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
								/><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path
									d="M17 19h4"
								/></svg
							>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<select
							class="rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-600 focus:ring-1 focus:ring-blue-100 focus:outline-none"
						>
							<option>Source</option>
						</select>
					</div>
					<div class="flex items-center">
						<span class="mr-3 text-sm text-gray-500">{messageCount}/{totalMessages}</span>
						<button
							class="rounded-full bg-blue-500 p-2 text-white transition hover:bg-blue-600"
							aria-label="Send"
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
								><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg
							>
						</button>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
