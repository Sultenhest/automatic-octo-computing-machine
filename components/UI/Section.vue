<template>
	<section class="mb-4">
    <h2 v-if="title" class="text-xl font-bold text-gray-800 dark:text-gray-300">
      {{ title }}
    </h2>
    
    <p v-if="content" class="text-base text-gray-600 dark:text-gray-400">
      <span v-html="content"></span>
    </p>
  </section>
</template>

<script>
export default {
	props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
	}
}
</script>