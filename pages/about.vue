<template>
  <div class="about block sm:flex pt-2 md:pt-20">
    <div class="sm:w-1/3 sm:mr-4">
      <figure class="mb-4 md:mb-0">
        <img src="/trine_dreisig.jpg" class="mb-3" />
        <figcaption class="text-base text-gray-800 dark:text-gray-300">
          <a href="mailto:tdreisig@gmail.com?subject=Hej Trine" class="flex p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
            <IconsMail class="h-6 w-6 mr-2" />
            <span>E-mail</span>
          </a>
        </figcaption>
      </figure>
    </div>

    <div class="sm:w-2/3">
      <section v-for="section in sections.section" :key="section.sys.id" class="mb-4">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-300">{{section.fields.title}}</h2>
        <p class="text-base text-gray-600 dark:text-gray-400">
          <span v-html="section.fields.content"></span>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sections() {
      return this.$store.state.sections;
    }
  }
}
</script>