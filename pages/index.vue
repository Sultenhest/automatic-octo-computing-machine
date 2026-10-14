<template>
  <div class="home pt-2 md:pt-20">
    <!-- Hero from design A: headline (the page's h1) and a booking link above the gallery -->
    <section class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 md:pb-16">
      <h1 class="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-ink dark:text-paper">
        Rolige og trygge hundefotograferinger i Nordsjælland – på hundens præmisser.
      </h1>

      <NuxtLink
        to="/booking/"
        class="self-start md:self-auto flex-shrink-0 flex items-center p-3 -ml-3 md:ml-0 md:-mr-3 text-sm font-bold uppercase tracking-wider text-ink dark:text-paper rounded hover:bg-rust hover:text-white dark:hover:text-white transition duration-300 ease-in-out"
      >
        <IconsCalendar class="h-6 w-6 mr-2" />
        <span>Book en fotografering</span>
      </NuxtLink>
    </section>

    <GridMasonry />
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Hundefotografi',
          'description': 'Professionel fotografering af din hund i Nordsjælland.'
        }, 
        type: 'application/ld+json'
      }
    ]
  }
}
</script>