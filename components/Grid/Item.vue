<template>
	<figure class="mb-4">
    <!-- Plain img on Contentful's image API: explicit width/height reserve the space
         (no layout shift), srcset/sizes fetch only what the layout needs, and only
         eager images compete for bandwidth on first load -->
    <img
      :src="imageUrl(640)"
      :srcset="srcset"
      :sizes="sizes"
      :width="dimensions.width"
      :height="dimensions.height"
      :alt="altText"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
      class="w-full bg-paper-deep dark:bg-ink-soft"
    />
	</figure>
</template>

<script>
// Matched to the layout: ~380px phones at 1.75x → 720, 504px desktop columns at 1x/2x → 560/1024
const WIDTHS = [400, 560, 720, 1024, 1280];

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    // The rendered width per breakpoint, so the browser picks the right file
    sizes: {
      type: String,
      default: '100vw'
    },
    // Load immediately with high priority; use for images visible on first paint
    eager: {
      type: Boolean,
      default: false
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

    dimensions() {
      const image = (this.item.fields.file.details || {}).image || {};
      return { width: image.width, height: image.height };
    },

    srcset() {
      return WIDTHS.map((width) => `${this.imageUrl(width)} ${width}w`).join(', ');
    },
  },

  methods: {
    imageUrl(width) {
      return `https:${this.item.fields.file.url}?w=${width}&fm=webp&q=75`;
    },
  },
}
</script>
