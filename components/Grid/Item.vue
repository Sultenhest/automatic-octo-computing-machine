<template>
	<figure class="mb-4">
    <nuxt-img
      format="webp"
      provider="contentful"
      sizes="sm:768px md:1024px"
      :src="imagePath"
      :alt="altText"
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
    altText() {
      // Contentful titles are dog names like "kendo 2"; drop the numbering and capitalize
      const name = (this.item.fields.title || '').trim().replace(/\s+\d+$/, '');
      const dog = name.charAt(0).toUpperCase() + name.slice(1);
      return dog
        ? `${dog} – hundefoto fra Hundefotografi i Nordsjælland`
        : 'Hundefoto fra Hundefotografi i Nordsjælland';
    },


    imagePath() {
      return this.item.fields.file.url.substring(
        this.item.fields.file.url.indexOf('cyne1yv2gwkj'),
        this.item.fields.file.url.length
      );
    }
  },
}
</script>