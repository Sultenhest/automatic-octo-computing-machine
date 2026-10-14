<template>
  <!-- CSS columns instead of a JS masonry: the server renders the right layout at
       every width (one column up to 768px, two above), so phones don't rebuild the
       gallery after loading. Photos fill each column top to bottom. -->
  <div class="gallery">
    <GridItem
      v-for="(image, index) in images"
      :key="image.sys.id"
      :item="image"
      :eager="index === 0"
      sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1056px) calc(50vw - 24px), 504px"
    />
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
