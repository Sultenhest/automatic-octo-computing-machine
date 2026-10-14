<template>
  <div class="booking flex flex-col sm:flex-row pt-2 md:pt-20">
    <div class="order-1 sm:w-1/2">
      <UISection
        v-for="(section, index) in sections"
        :key="section.sys.id"
        :level="index === 0 ? 1 : 2"
        :title="section.fields.title"
        :content="section.fields.content"
      />
    </div>

    <div class="hidden order-0 sm:block sm:w-1/2 sm:mr-4">
      <GridItem v-for="image in randomImages" :key="image.sys.id" :item="image"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { sectionsPage } from '~/plugins/contentful.js'

export default {
  mixins: [sectionsPage('5M3qBrofDxJh1brqnDrWux')],

  head: {
    title: 'Booking - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Book via email: tdreisig@gmail.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Booking - Hundefotografi'
      }
    ],
    script: [
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Booking - Hundefotografi',
          'description': 'Book via email: tdreisig@gmail.com'
        }, 
        type: 'application/ld+json'
      }
    ]
  },

  computed: {
    ...mapGetters({
      images: 'images'
    }),

    randomImages() {
      if (!this.images) return []
      const rand = [...this.images];
      return rand.sort(() => .5 - Math.random()).slice(0, 1);
    }
  }
}
</script>