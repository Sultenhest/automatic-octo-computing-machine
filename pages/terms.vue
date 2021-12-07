<template>
  <div class="terms pt-0 md:pt-16">
  	<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-8">{{ terms.title }}</h1>

    <section v-for="term in terms.section" :key="term.sys.id" class="mb-4">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-300">{{term.fields.title}}</h2>
      <p class="text-base text-gray-600 dark:text-gray-400">
        <span v-html="term.fields.content"></span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    terms() {
      return this.$store.state.terms;
    }
  }
}
</script>