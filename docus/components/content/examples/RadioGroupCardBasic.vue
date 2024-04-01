<template>
  <radio-group-card
    v-model="selected"
    :model-value="selected"
    :options="options"
    :v-model="selected"
    legend="hella wordl"
    color="violet"
    variant="ghost"
    class="w-full" 
  />
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