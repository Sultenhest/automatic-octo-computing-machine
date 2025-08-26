<template>
  <div class="terms flex flex-col sm:flex-row pt-2 md:pt-20">
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
    title: 'Handelsbetingelser - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ved booking af fotografering accepteres nedenstående betingelser.'
      }
    ],
    script: [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          'name': 'Handelsbetingelser - Hundefotografi',
          'description': 'Ved booking af fotografering accepteres nedenstående betingelser.'
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
    	return rand.sort(() => .5 - Math.random()).slice(0, 2);
    }
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: 'TV8S55okZJ8WzThQ7Woba'
    });
  }
}
</script>