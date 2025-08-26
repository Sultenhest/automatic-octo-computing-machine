<template>
  <div class="home pt-2 md:pt-20">
    <GridMasonry />
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          'name': 'Hundefotografi',
          'description': 'Professionel fotografering af din hund i Nordsjælland.'
        }, 
        type: 'application/ld+json'
      }
    ]
  }
}
</script>