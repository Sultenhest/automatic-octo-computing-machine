<template>
  <div class="hidden order-0 sm:block sm:w-1/2 sm:mr-4">
    <GridItem v-for="image in images" :key="image.sys.id" :item="image" />
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
