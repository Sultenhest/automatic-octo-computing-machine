<template>
  <section class="sm:flex">
    <div class="sm:w-1/2 sm:mr-4">
      <figure v-if="section.fields.image" class="mb-4 md:mb-0">
        <nuxt-img
          format="webp"
          provider="contentful"
          sizes="sm:768px md:1024px"
          :src="imagePath"
          :alt="section.fields.title"
          class="mb-3"
        />
      </figure>
    </div>

    <div class="sm:w-1/2">
      <UISection :title="section.fields.title" :content="section.fields.content" />
      
      <UIToggle v-if="section.fields.contentToggle && section.fields.contentToggle.length >= 800">
        <UISection :content="section.fields.contentToggle" />
      </UIToggle>

      <UISection v-else-if="section.fields.contentToggle" :content="section.fields.contentToggle" />
    </div>
  </section>
</template>

<script>
export default {
	props: {
		section: {
      type: Object,
      default() {
        return {
          fields: {
            title: '',
            content: ''
          }
        }
      }
    },
	},

  computed: {
    imagePath() {
      return this.section.fields.image.fields.file.url.substring(
        this.section.fields.image.fields.file.url.indexOf('cyne1yv2gwkj'),
        this.section.fields.image.fields.file.url.length
      );
    }
  },
}
</script>