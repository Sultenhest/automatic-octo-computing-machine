<template>
	<section class="mb-4">
    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-300">
      {{section.fields.title}}
    </h2>
    <p class="text-base text-gray-600 dark:text-gray-400">
      <span v-html="section.fields.content"></span>
    </p>
  </section>
</template>

<script>
export default {
	props: {
		section: {
      type: Object,
      default() {
        return {
          fields: {
            title: '',
            content: ''
          }
        }
      }
    },
	}
}
</script>