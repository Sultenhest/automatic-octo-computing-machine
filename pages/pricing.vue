<template>
  <div class="pricing block sm:flex pt-2 md:pt-20">
    <div class="hidden sm:block sm:w-1/2 sm:mr-4">
      <GridItem v-for="image in images" :key="image.fields.slug" :item="image.fields"/>
    </div>
    
    <div class="sm:w-1/2">
      <UISection v-for="section in sections.section" :key="section.sys.id" :section="section" />
    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sections: 'sections/sections',
      images: 'randomImages'
    })
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: '3eqnidgZU6k7iOcTL8EVf9'
    });
  }
}
</script>