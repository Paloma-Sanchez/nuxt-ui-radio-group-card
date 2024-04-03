<template>
  <radio-group-card
    v-model="selected"
    :options="options"
    :model-value="selected"
    legend="helle wordl"
    variant="outline"
    color="violet"
    :ui-radio="{background:{unchecked:'bg-white'},
    }"
  >
    <template #label="{ option }">
      <div class="pl-4">
        <p>{{' Selected' }}</p>
      </div>
    </template>
  </radio-group-card>
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
];

const selected = ref(options[0].value);

</script>