<template>
  <header
    :class="{
      'border-primary-200/75 dark:border-primary-900/50': $route.path === '/',
      'border-gray-200 dark:border-gray-800': $route.path !== '/',
    }"
  >
    <div
      class="flex justify-center h-[65px] items-center"
    >
      <div class="w-[1280px] flex justify-between items-center px-5">
        <NuxtLink 
          to="/" 
          class="flex items-baseline gap-2 font-bold text-xl prose dark:prose-invert" 
          aria-label="Nuxt UI"
        >
          <p>RadioCardGroup </p>
          <p
            class="text-primary-400"
          >
            UI
          </p>
        </NuxtLink>
        <div>
          <ColorModeButton />
          <UButton
            to="https://github.com/Paloma-Sanchez/nuxt-ui-radio-group-card"
            color="gray"
            variant="ghost"
            target="_blank"
            aria-label="GitHub"
            size="md"
          >
            <UIcon
              class="w-5 h-5"
              name="i-simple-icons-github"
              dynamic
            />
          </UButton>
        </div>
      </div>
    </div>
    <UDivider />
  </header>
</template>

<script setup lang="ts">

const colorMode = useColorMode()

</script>

<style>
.nuxt-icon--fill{
  fill: inherit;
}

.nuxt-icon--fill *{
  fill: inherit;
}
</style>
