<template>
  <div class="shop block sm:flex pt-2 md:pt-20">
    <div class="w-100">
      <UIProductSection
        v-for="section in sections.section"
        :key="section.sys.id"
        :section="section"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sections: 'sections/sections'
    })
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: '5ZQvRquYaCDjfwLrmfbT0O'
    });
  }
}
</script>