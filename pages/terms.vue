<template>
  <div class="terms block sm:flex pt-2 md:pt-20">
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