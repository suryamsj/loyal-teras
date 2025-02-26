<script lang="ts">
	import { store } from '$lib/store.svelte';
</script>

<header class="flex h-16 items-center justify-between bg-white px-4 shadow-sm md:px-6">
	<div class="flex items-center">
		<!-- Mobile menu button -->
		{#if store.isMobile}
			<button
				aria-label="menuMobile"
				onclick={store.toggleSidebar}
				class="mr-2 rounded-md p-2 hover:bg-gray-100"
			>
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
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		{/if}
	</div>

	<!-- Right section -->
	<div class="flex items-center space-x-2 md:space-x-4">
		<!-- Notification -->
		<div class="relative">
			<button
				onclick={store.toggleNotifications}
				class="relative rounded-full p-2 hover:bg-gray-100"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				{#if store.getUnreadCount() > 0}
					<span
						class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
					>
						{store.getUnreadCount()}
					</span>
				{/if}
			</button>

			<!-- Notification dropdown -->
			{#if store.showNotifications}
				<div
					class="absolute right-0 z-10 mt-2 w-72 rounded-md border border-gray-200 bg-white py-2 shadow-lg md:w-80"
				>
					<div class="border-b border-gray-200 px-4 py-2">
						<h3 class="font-semibold text-gray-700">Notifikasi</h3>
					</div>
					{#if store.notifications.length > 0}
						<div class="max-h-80 overflow-y-auto">
							{#each store.notifications as notification}
								<div
									class={`border-b border-gray-100 px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
								>
									<div class="flex items-start justify-between">
										<p class={`text-sm ${!notification.read ? 'font-semibold' : 'text-gray-700'}`}>
											{notification.text}
										</p>
									</div>
									<p class="mt-1 text-xs text-gray-500">{notification.time}</p>
								</div>
							{/each}
						</div>
					{:else}
						<p class="px-4 py-2 text-sm text-gray-600">Tidak ada notifikasi baru</p>
					{/if}
					<div class="border-t border-gray-200 px-4 py-2">
						<a href="/" class="text-sm text-blue-600 hover:text-blue-800">Lihat semua notifikasi</a>
					</div>
				</div>
			{/if}
		</div>

		<!-- Profile -->
		<div class="relative">
			<button onclick={store.toggleProfileMenu} class="flex items-center space-x-2">
				<div
					class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-blue-500 text-white"
				>
					<img
						src="https://picsum.photos/500/500?random"
						alt="User profile"
						class="h-full w-full object-cover"
					/>
				</div>
				<span class="hidden text-sm font-medium text-gray-700 md:inline-block">Admin</span>
			</button>

			<!-- Profile dropdown -->
			{#if store.showProfileMenu}
				<div
					class="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg"
				>
					<a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
					<a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
					<div class="my-1 border-t border-gray-100"></div>
					<a href="/" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
				</div>
			{/if}
		</div>
	</div>
</header>
