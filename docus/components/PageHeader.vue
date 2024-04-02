<template>
  <div>
    <div
      class="py-8"
    >
      <p
        class="mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5"
      >
        Components  
      </p>
      <div
        class="flex flex-col lg:flex-row items-start gap-6"
      >
        <div
          class="flex-1"
        >
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          >
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              {{ contentQuery?.title }}
            </h1>
            <UButton
              :label="contentQuery.links[0].label"
              :to="contentQuery.links[0].to"
              color="white"
              target="_blank"
            >
              <UIcon
                class="w-5 h-5"
                name="i-simple-icons-github"
                dynamic
              />
              {{ contentQuery.links[0].label }}
            </UButton>
          </div>
          <p
            class="mt-4 text-lg text-gray-500 dark:text-gray-400"
          >
            {{ contentQuery.description }}
          </p>
        </div>
      </div>
    </div>
    <UDivider />
  </div>
</template>
<script setup>
  const contentQuery = await queryContent().where({ title: 'Radio Card Group' }).findOne()
    //console.log('query', contentQuery.body.children)

</script>
<style>
.dark-mode body {
  background-color: #091a28;
}
</style>