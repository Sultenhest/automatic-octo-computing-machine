<template>
	<div class="toggle">
		<div
			class="toggle-content relative"
			:class="[ show ? '' : 'max-h-32 md:max-h-52  overflow-hidden' ]"
		>
			<slot></slot>

			<div v-if="!show" class="absolute left-0 bottom-0 right-0 h-12 bg-gradient-to-t from-gray-50 dark:from-dark"></div>
		</div>

		<div class="mb-4 cursor-pointer" @click="show = !show">
			<p class="flex p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
				<span class="text-base font-bold text-gray-600 dark:text-gray-400">
					{{ toggleText }}
				</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			show: false
		}
	},

  computed: {
    toggleText() {
      if (this.show) {
      	return 'Læs mindre';
      }

      return 'Læs mere';
    }
  }
}
</script>
