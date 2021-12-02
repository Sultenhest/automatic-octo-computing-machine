<template>
  <div class="content relative m-8">
    <UINavigation />

    <main id="main" class="max-w-screen-lg mx-auto">
      <Nuxt />
      <select
        v-model="$colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700 mb-10"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </main>
  </div>
</template>