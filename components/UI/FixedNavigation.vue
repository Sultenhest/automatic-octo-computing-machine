<template>
	<div class="flex justify-between relative">
		<NuxtLink to="/" exact-active-class="">
	    <LogoDark v-if="$colorMode.value === 'light'" class="h-16 w-auto" />
	    <LogoLight v-else class="h-16 w-auto" />
	  </NuxtLink>

	  <button class="p-4" @click="show = !show">
	    <svg v-if="show" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
	    </svg>
	    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
			</svg>
	  </button>

  	<transition
	    enter-active-class="transition transform duration-300 ease-out"
		  leave-active-class="transition transform duration-300 ease-in"
		  enter-class="translate-x-2 -translate-y-4 opacity-0"
		  enter-to-class="translate-x-0 translate-y-0 opacity-100"
		  leave-class="opacity-100"
		  leave-to-class="opacity-0"
  	>
		  <div v-show="show" class="absolute top-14 right-0 w-full mt-4 p-4 rounded bg-gray-100 dark:bg-gray-900 shadow-md" @click="show = !show">
		  	<UINavigation />
		  </div>
	  </transition>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			show: false
		}
	}
}
</script>