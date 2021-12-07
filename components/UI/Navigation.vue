<template>
  <div class="fixed w-full top-0 left-0 p-4 bg-gray-50 dark:bg-dark">
    <div class="max-w-screen-lg mx-auto">
      <header class="relative flex items-center text-base text-gray-800 dark:text-gray-300">
        <NuxtLink to="/" class="text-2xl mr-auto">Trine Dreisig</NuxtLink>

        <nav class="hidden md:flex space-x-1">
          <NuxtLink
            v-for="link in links" :key="link.name"
            :to="link.href"
            class="p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
          	{{ link.name }}
          </NuxtLink>
          <a
            href="https://www.instagram.com/trine.dreisig/"
            target="_blank"
            class="flex items-center p-3 hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
              <img src="/instagram.png" class="h-5 w-5" />
            </a>
        </nav>

        <button class="block md:hidden top-0 right-0 p-4 -mr-4 rounded" @click="show = !show">
          <svg v-if="show" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <transition
          enter-active-class="transition transform duration-300 ease-out"
          leave-active-class="transition transform duration-300 ease-in"
          enter-class="translate-x-2 -translate-y-4 opacity-0"
          enter-to-class="translate-x-0 translate-y-0 opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-show="show" class="absolute top-14 right-0 w-full mt-4 p-4 rounded bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 shadow-md" @click="show = !show">
            <NuxtLink
              v-for="link in links" :key="link.name"
              :to="link.href"
              class="mb-2 p-3 block w-full hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
              {{ link.name }}
            </NuxtLink>
            <a
              href="https://www.instagram.com/trine.dreisig/"
              target="_blank"
              class="mb-2 p-3 block w-full hover:bg-gray-200 dark:hover:bg-black rounded transition duration-300 ease-in-out">
              Instagram
            </a>
          </div>
        </transition>
    	</header>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          name: 'Hjem',
          href: '/'
        },
        {
          name: 'Vilkår',
          href: '/terms'
        }
      ],
      show: false
    }
  }
}
</script>