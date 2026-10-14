<template>
	<section class="mb-4">
    <component
      :is="level === 1 ? 'h1' : 'h2'"
      v-if="title"
      class="hyphens-auto font-black uppercase text-ink dark:text-paper"
      :class="level === 1 ? 'mb-4 text-3xl sm:text-2xl md:text-3xl lg:text-4xl leading-none tracking-tight' : 'mt-10 mb-3 text-lg leading-tight'"
    >
      {{ title }}
    </component>
    
    <div v-if="content" class="rich-text text-base text-ink dark:text-paper">
      <span v-html="content"></span>
    </div>
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
    // 1 renders the page's h1; use 2 for every section after the first
    level: {
      type: Number,
      default: 1,
      validator: (value) => [1, 2].includes(value),
    },
	}
}
</script>