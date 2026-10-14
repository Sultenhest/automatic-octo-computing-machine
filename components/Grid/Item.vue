<template>
	<figure class="mb-4 break-inside-avoid">
    <!-- Plain img on Contentful's image API: explicit width/height reserve the space
         (no layout shift), srcset/sizes fetch only what the layout needs, and only
         eager images compete for bandwidth on first load -->
    <!-- loading must come before src/srcset: when Vue creates the img in the
         browser, it sets attributes in order, and src starts the download -->
    <img
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
      :width="dimensions.width"
      :height="dimensions.height"
      :sizes="sizes"
      :srcset="srcset"
      :src="imageUrl(640)"
      :alt="altText"
      class="w-full bg-paper-deep dark:bg-ink-soft"
    />
	</figure>
</template>

<script>
// Matched to the layout: ~380px phones at 1.75x → 720, up to 632px desktop columns at 1x/2x → 720/1280
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
      // Contentful usually returns protocol-relative URLs (//images.ctfassets.net/...)
      const url = this.item.fields.file.url;
      const base = url.startsWith('//') ? `https:${url}` : url;
      return `${base}?w=${width}&fm=webp&q=75`;
    },
  },
}
</script>
