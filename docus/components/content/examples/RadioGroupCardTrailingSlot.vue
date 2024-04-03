<template>
  <div 
    class="flex justify-center border border-b-0 border-gray-200 dark:border-gray-700 relative not-prose p-4 rounded-t-md" 
  >
    <radio-group-card
      v-model="selected"
      :options="options"
      :model-value="selected"
      legend="helle wordl"
      variant="ghost"
      color="sky"
      :ui-radio="{background:{unchecked:'bg-white'},
      }"
    >
      <template #trailing="{ option }">
        <div
          class="pl-4"
        >
          <u-icon
            name="i-heroicons-check-circle-16-solid"
          />
        </div>
      </template>
    </radio-group-card>
  </div>
  <code-lines
    :code="code"
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
];

const selected = ref(options[0].value);

const code = '<radio-group-card\n  v-model="selected"\n  :options="options"\n' +
  '  variant="ghost"\n  color="sky"\n>\n' +
  '  <template #trailing="{ option }">\n    <div class="pl-4">\n' +
  '      <u-icon\n        name="i-heroicons-check-circle-16-solid"\n      />\n'+
  '    </div>\n  </template>\n</radio-group-card>'

</script>