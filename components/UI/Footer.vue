<template>
	<footer class="max-w-screen-xl mx-auto text-base text-ink dark:text-paper mt-8">
		<div class="flex justify-center">
			<div role="group" aria-label="Farvetema" class="flex justify-center space-x-2">
				<button
					type="button"
					aria-label="Følg systemets tema"
					:aria-pressed="$colorMode.preference === 'system' ? 'true' : 'false'"
					class="p-3 rounded hover:bg-paper-deep dark:hover:bg-ink-soft transition duration-300 ease-in-out"
					:class="[$colorMode.preference === 'system' ? 'bg-paper-deep dark:bg-ink-soft' : 'cursor-pointer']"
					@click="$colorMode.preference = 'system'">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</button>

				<button
					type="button"
					aria-label="Lyst tema"
					:aria-pressed="$colorMode.preference === 'light' ? 'true' : 'false'"
					class="p-3 rounded hover:bg-paper-deep dark:hover:bg-ink-soft transition duration-300 ease-in-out"
					:class="[$colorMode.preference === 'light' ? 'bg-paper-deep dark:bg-ink-soft' : 'cursor-pointer']"
					@click="$colorMode.preference = 'light'">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</button>

				<button
					type="button"
					aria-label="Mørkt tema"
					:aria-pressed="$colorMode.preference === 'dark' ? 'true' : 'false'"
					class="p-3 rounded hover:bg-paper-deep dark:hover:bg-ink-soft transition duration-300 ease-in-out"
					:class="[$colorMode.preference === 'dark' ? 'bg-paper-deep dark:bg-ink-soft' : 'cursor-pointer']"
					@click="$colorMode.preference = 'dark'">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				</button>
			</div>
		</div>

		<p class="text-center text-sm text-ink dark:text-paper mt-4">
			© {{ getYear }} Hundefotografi
			&middot;
			Trine Dreisig
			&middot;
			CVR. <a href="https://datacvr.virk.dk/enhed/virksomhed/43554506" target="_blank" rel="noopener">43554506</a>
		</p>
	</footer>
</template>

<script>
export default {
  computed: {
    getYear() {
    	return (new Date).getFullYear();
    }
  }
}
</script>