<template>
  <section class="hidden md:block intro">
    <div class="h-auto md:min-h-half pb-8 flex flex-col justify-center">
      <div class="w-full antialiased">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-200">Trine Jul Dreisig</h1>

        <!--
        <div class="-ml-3 mt-4 block md:flex md:space-x-4 text-base text-gray-800 dark:text-gray-300">
          <a
            v-for="profile in instagram" :key="profile.fields.slug" 
            :href="profile.fields.url"
            target="_blank"
            class="p-3 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300 ease-in-out"
          >
            <img v-if="profile.fields.image" :src="profile.fields.image.fields.file.url" class="rounded-full h-8 w-8 mr-2 bg-gray-500">
            <span>{{ profile.fields.handle }}</span>
          </a>
        </div>
        -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    instagram() {
      return this.$store.state.instagram;
    }
  }
}
</script>
