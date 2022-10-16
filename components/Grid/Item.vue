<template>
	<figure class="mb-4">
    <nuxt-img
      format="webp"
      provider="contentful"
      sizes="sm:768px md:1024px"
      :src="imagePath"
      :alt="item.fields.title"
    />
	</figure>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },

  computed: {
    imagePath() {
      return this.item.fields.file.url.substring(
        this.item.fields.file.url.indexOf('cyne1yv2gwkj'),
        this.item.fields.file.url.length
      );
    }
  },
}
</script>