<template>
  <div class="masonry">
    <masonry :cols="{default: 2, 768: 1}" :gutter="{default: '1rem'}">
      <!-- One column up to 768px, otherwise two columns of the 1024px page; the first row loads eagerly -->
      <GridItem
        v-for="(image, index) in images"
        :key="image.sys.id"
        :item="image"
        :eager="index < 2"
        sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1056px) calc(50vw - 24px), 504px"
      />
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
