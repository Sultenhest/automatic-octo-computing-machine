<template>
  <div class="pricing flex flex-col sm:flex-row pt-2 md:pt-20">
    <div class="order-1 sm:w-1/2">
      <UISection
        v-for="(section, index) in sections"
        :key="section.sys.id"
        :level="index === 0 ? 1 : 2"
        :title="section.fields.title"
        :content="section.fields.content"
      />

      <NuxtLink to="/booking/" class="flex items-center p-3 text-sm font-bold uppercase tracking-wider text-ink dark:text-paper rounded hover:bg-paper-deep dark:hover:bg-ink-soft transition duration-300 ease-in-out">
        <IconsCalendar class="h-6 w-6 mr-2" />
        <span>Book her</span>
      </NuxtLink>
    </div>

    <GridSideImages :images="sideImages" />
	</div>
</template>

<script>
import { sectionsPage } from '~/plugins/contentful.js'

export default {
  mixins: [sectionsPage('3eqnidgZU6k7iOcTL8EVf9', { sideImages: 1 })],

  head: {
    title: 'Priser - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Alle billeder leveres færdigredigerede og i fuld opløsning til digital download.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Priser - Hundefotografi'
      }
    ],
    script: [
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Priser - Hundefotografi',
          'description': 'Alle billeder leveres færdigredigerede og i fuld opløsning til digital download.'
        }, 
        type: 'application/ld+json'
      }
    ]
  }
}
</script>