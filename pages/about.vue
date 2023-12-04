<template>
  <div class="about block sm:flex pt-2 md:pt-20">
    <div class="sm:w-1/2 sm:mr-4">
      <figure class="mb-4 md:mb-0">
        <img src="/veto_me.jpg" alt="Trine Dreisig og Veto" class="mb-3" />
        <figcaption class="text-base text-gray-800 dark:text-gray-300">
          <a href="mailto:tdreisig@gmail.com?subject=Hej Trine" class="flex p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
            <IconsMail class="h-6 w-6 mr-2" />
            <span>E-mail</span>
          </a>
        </figcaption>
      </figure>
    </div>

    <div class="sm:w-1/2">
      <UISection
        v-for="section in sections.section"
        :key="section.sys.id"
        :title="section.fields.title"
        :content="section.fields.content"
      />
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
        content: 'Mit navn er Trine Dreisig og jeg er bosat i Nordsjælland, nærmere betegnet 3050 Humlebæk med min kæreste, hund og kat.'
      }
    ],
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