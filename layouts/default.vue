<template>
  <div class="content relative m-4 pt-20 md:pt-0">
    <UINavigation />

    <main id="main" class="max-w-screen-xl mx-auto">
      <Nuxt />
    </main>

    <UIFooter />
  </div>
</template>

<script>
export default {
  head() {
    // Per-page og:url, with the trailing slash Netlify redirects to
    const path = this.$route.path.endsWith('/') ? this.$route.path : `${this.$route.path}/`

    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: `https://hundefotografi.dk${path}` }
      ]
    }
  }
}
</script>
