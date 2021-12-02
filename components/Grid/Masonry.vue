<template>
  <div class="masonry">
    <masonry :cols="{default: 2, 768: 1}" :gutter="{default: '2rem'}">
      <GridItem v-for="image in images" :key="image.fields.slug" :item="image.fields"/>
    </masonry>
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return this.$store.state.images;
    }
  }
}
</script>
