<template>
  <div class="about flex flex-col sm:flex-row pt-2 md:pt-20">
    <div class="order-1 sm:w-1/2">
      <UISection
        v-for="(section, index) in sections"
        :key="section.sys.id"
        :level="index === 0 ? 1 : 2"
        :title="section.fields.title"
        :content="section.fields.content"
      />
    </div>

    <div class="order-0 sm:w-1/2 sm:mr-4">
      <figure class="mb-4 md:mb-0">
        <!-- Pre-resized files instead of nuxt-img: on client-side navigation nuxt-img requests /_ipx/, which doesn't exist on Netlify -->
        <img
          src="/trfhi-640.webp"
          srcset="/trfhi-640.webp 640w, /trfhi-1024.webp 1024w"
          sizes="(max-width: 640px) 100vw, 512px"
          width="1024"
          height="1280"
          alt="Trine Dreisig og Veto"
          class="w-full mb-3"
        />
      </figure>
    </div>
  </div>
</template>

<script>
import { sectionsPage } from '~/plugins/contentful.js'

export default {
  mixins: [sectionsPage('2f0zj0mrh9p5aTkGUtpJje')],

  head: {
    title: 'Om fotografen - Hundefotografi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Jeg er Trine Jul Dreisig, autodidakt hundefotograf fra Esbønderup Skovhuse i Nordsjælland. Rolige og trygge fotograferinger udendørs – på hundens præmisser.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Om fotografen - Hundefotografi'
      }
    ],
    script: [
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Om fotografen - Hundefotografi',
          'description': 'Jeg er Trine Jul Dreisig, autodidakt hundefotograf fra Esbønderup Skovhuse i Nordsjælland. Rolige og trygge fotograferinger udendørs – på hundens præmisser.'
        }, 
        type: 'application/ld+json'
      }
    ]
  }
}
</script>