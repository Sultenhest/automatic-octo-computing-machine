<template>
  <div class="hidden order-0 sm:block sm:w-1/2 sm:mr-4">
    <!-- Half of the 1024px page, only shown from 640px. Lazy, so phones (where the
         column is hidden) don't download them -->
    <GridItem
      v-for="image in images"
      :key="image.sys.id"
      :item="image"
      sizes="(max-width: 1056px) calc(50vw - 16px), 512px"
    />
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
