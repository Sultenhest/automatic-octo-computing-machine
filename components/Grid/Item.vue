<template>
	<figure class="mb-4">
    <img :src="item.file.url" :alt="item.title" />
	</figure>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  }
}
</script>