<template>
  <div>
    <Header
      class="sticky top-0 backdrop-blur -mb-px s z-50 bg-white/75 dark:bg-[#101628]/75"
    />
    <div class="flex justify-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
        <div class="lg:col-span-9 prose dark:prose-invert">
          <PageHeader />
          <div class="prose dark:prose-invert">
          </div>
          <ComponentPreset />
        </div>
      </div>
      <div class="lg:col-span-2 order-first lg:order-last">
        <Aside class="sticky top-10" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
