<template>
  <div class="shop block sm:flex pt-2 md:pt-20">
    <div class="w-100">
      <UIProductSection
        v-for="section in sections"
        :key="section.sys.id"
        :section="section"
      />
    </div>
  </div>
</template>

<script>
import { sectionsPage } from '~/plugins/contentful.js'

export default {
  mixins: [sectionsPage('5ZQvRquYaCDjfwLrmfbT0O')]
}
</script>