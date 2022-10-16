<template>
  <div class="masonry">
    <masonry :cols="{default: 2, 768: 1}" :gutter="{default: '1rem'}">
      <GridItem v-for="image in images" :key="image.fields.slug" :item="image"/>
    </masonry>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      images: 'images'
    })
  }
}
</script>
