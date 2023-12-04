<template>
  <div class="booking block sm:flex pt-2 md:pt-20">
    <div class="w-full">
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
    title: 'Booking - Hundefotografi',
  },

  computed: {
    ...mapGetters({
      sections: 'sections/sections'
    })
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: '5M3qBrofDxJh1brqnDrWux'
    });
  }
}
</script>