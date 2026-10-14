<template>
  <div class="about flex flex-col sm:flex-row pt-2 md:pt-20">
    <div class="order-1 sm:w-1/2">
      <UISection
        v-for="section in sections.section"
        :key="section.sys.id"
        :title="section.fields.title"
        :content="section.fields.content"
      />
    </div>

    <div class="order-0 sm:w-1/2 sm:mr-4">
      <figure class="mb-4 md:mb-0">
        <img src="/trfhi.jpg" alt="Trine Dreisig og Veto" class="mb-3" />
      </figure>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Info - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Mit navn er Trine Dreisig og jeg er bosat i Nordsjælland, nærmere betegnet Kirke Esbønderup, med min kæreste, hund og kat.'
      }
    ],
    script: [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          'name': 'Info - Hundefotografi',
          'description': 'Mit navn er Trine Dreisig og jeg er bosat i Nordsjælland, nærmere betegnet Kirke Esbønderup, med min kæreste, hund og kat.'
        }, 
        type: 'application/ld+json'
      }
    ]
  },

  computed: {
    ...mapGetters({
      sections: 'sections/sections'
    })
  },

  created() {
    this.$store.dispatch('sections/getSections', {
      entryId: '2f0zj0mrh9p5aTkGUtpJje'
    });
  }
}
</script>