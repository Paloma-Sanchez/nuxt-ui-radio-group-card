<template>
  <div
    class="font-sans"
  >
    <Header 
      class="sticky top-0 backdrop-blur -mb-px s z-50 bg-white/75 dark:bg-[#101628]/75"
    />
    <div class="flex justify-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8"
      >
        <div class="lg:col-span-9">
          <PageHeader />
          <div 
            class="prose dark:prose-invert"  
          >
            <ContentDoc />
          </div>
        </div>
      </div>
      <div
        class="lg:col-span-2 order-first lg:order-last"
      >
        <Aside 
          class="sticky top-10"
        />
      </div>
    </div>
  </div>
</template>
<script setup>

const options = [
  {
    value: 'Startup',
    label: 'Startup',
    description:['12GB', '6 CPUs', '160 GB SSD disk'],
    icon:'i-heroicons-trash'
  },
  {
    value: 'Business',
    label: 'Business',
    description:['16GB', '8 CPUs', '512 GB SSD disk'],
  },
  {
    value: 'Enterprise',
    label: 'Enterprise',
    description:['32GB', '12 CPUs', '1024 GB SSD disk'],
  },
  {
    value: 'Education',
    label: 'Education',
    //description:['6GB', '3CPUs', '80 GB SSD disk'],
    disabled: true
  },
];

const selected = ref(options[0].value);


</script>
