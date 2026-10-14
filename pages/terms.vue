<template>
  <div class="terms flex flex-col sm:flex-row pt-2 md:pt-20">
    <div class="order-1 sm:w-1/2">
      <UISection
        v-for="(section, index) in sections"
        :key="section.sys.id"
        :level="index === 0 ? 1 : 2"
        :title="section.fields.title"
        :content="section.fields.content"
      />
    </div>

    <GridSideImages :images="sideImages" />
	</div>
</template>

<script>
import { sectionsPage } from '~/plugins/contentful.js'

export default {
  mixins: [sectionsPage('TV8S55okZJ8WzThQ7Woba', { sideImages: 3 })],

  head: {
    title: 'Handelsbetingelser - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ved booking af fotografering accepteres nedenstående betingelser.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Handelsbetingelser - Hundefotografi'
      }
    ],
    script: [
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Handelsbetingelser - Hundefotografi',
          'description': 'Ved booking af fotografering accepteres nedenstående betingelser.'
        }, 
        type: 'application/ld+json'
      }
    ]
  }
}
</script>