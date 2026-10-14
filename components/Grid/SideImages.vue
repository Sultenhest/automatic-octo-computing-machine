<template>
  <div class="hidden order-0 sm:block sm:w-1/2 sm:mr-4">
    <!-- Half of the 1024px page, only shown from 640px -->
    <GridItem
      v-for="(image, index) in images"
      :key="image.sys.id"
      :item="image"
      :eager="index === 0"
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
