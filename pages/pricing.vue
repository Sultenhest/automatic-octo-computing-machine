<template>
  <div class="pricing block sm:flex pt-2 md:pt-20">
    <div class="hidden sm:block sm:w-1/2 sm:mr-4">
      <GridItem v-for="image in randomImages" :key="image.fields.slug" :item="image"/>
    </div>
    
    <div class="sm:w-1/2">
      <UISection
        v-for="section in sections.section"
        :key="section.sys.id"
        :title="section.fields.title"
        :content="section.fields.content"
      />

      <NuxtLink to="/booking" class="flex p-3 hover:bg-gray-200 dark:hover:bg-black text-base text-gray-800 dark:text-gray-300 rounded transition duration-300 ease-in-out">
        <IconsCalendar class="h-6 w-6 mr-2" />
        <span>Book her</span>
      </NuxtLink>
    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Priser - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Alle billeder leveres færdigredigerede og i fuld opløsning til digital download.'
      }
    ],
  },

  computed: {
    ...mapGetters({
      sections: 'sections/sections',
      images: 'images'
    }),

    randomImages() {
      const rand = [...this.images];
      return rand.sort(() => .5 - Math.random()).slice(0, 2);
    }
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: '3eqnidgZU6k7iOcTL8EVf9'
    });
  }
}
</script>