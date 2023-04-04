<template>
	<footer class="max-w-screen-lg mx-auto text-base text-gray-800 dark:text-gray-300 mt-8">
		<nav class="block sm:flex justify-between">
			<div class="flex justify-center space-x-2">
				<div
					class="p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out"
					:class="[$colorMode.preference == 'system' ? 'bg-gray-200 dark:bg-black' : 'cursor-pointer']"
					@click="$colorMode.preference = 'system'">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</div>

				<div
					class="p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out"
					:class="[$colorMode.preference == 'light' ? 'bg-gray-200 dark:bg-black' : 'cursor-pointer']"
					@click="$colorMode.preference = 'light'">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</div>

				<div
					class="p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out"
					:class="[$colorMode.preference == 'dark' ? 'bg-gray-200 dark:bg-black' : 'cursor-pointer']"
					@click="$colorMode.preference = 'dark'">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				</div>
			</div>

			<div class="flex justify-center space-x-2 mt-2 sm:mt-0">
				<a href="https://www.instagram.com/hundefotografi/" 
           target="_blank"
           alt="Instagram"
           class="p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" fill="none" viewBox="0 0 24 24" stroke="none"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
				</a>

				<a href="https://www.facebook.com/hundefotografi/" 
           target="_blank"
           alt="Facebook"
           class="p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" fill="none" viewBox="0 0 24 24" stroke="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
				</a>
			</div>
		</nav>

		<p class="text-center text-sm text-gray-700 dark:text-gray-400 mt-4">
			© {{ getYear }} Hundefotografi
			&middot;
			Trine Dreisig
			&middot;
			CVR. <a href="https://datacvr.virk.dk/enhed/virksomhed/43554506" target="_blank" alt="CVR">43554506</a>
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