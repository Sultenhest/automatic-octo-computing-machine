<template>
  <div class="booking flex flex-col sm:flex-row pt-2 md:pt-20">
    <div class="order-1 sm:w-1/2">
      <UISection
        v-for="section in sections.section"
        :key="section.sys.id"
        :title="section.fields.title"
        :content="section.fields.content"
      />
    </div>

    <div class="hidden order-0 sm:block sm:w-1/2 sm:mr-4">
      <GridItem v-for="image in randomImages" :key="image.fields.slug" :item="image"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Booking - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Book via email: tdreisig@gmail.com'
      }
    ],
    script: [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          'name': 'Booking - Hundefotografi',
          'description': 'Book via email: tdreisig@gmail.com'
        }, 
        type: 'application/ld+json'
      }
    ]
  },

  computed: {
    ...mapGetters({
      sections: 'sections/sections',
      images: 'images'
    }),

    randomImages() {
      const rand = [...this.images];
      return rand.sort(() => .5 - Math.random()).slice(0, 1);
    }
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: '5M3qBrofDxJh1brqnDrWux'
    });
  }
}
</script>