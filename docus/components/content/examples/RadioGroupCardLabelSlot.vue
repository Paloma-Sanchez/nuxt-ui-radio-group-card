<template>
  <div 
    class="flex justify-center border border-b-0 border-gray-200 dark:border-gray-700 relative not-prose p-4 rounded-t-md" 
  >
    <radio-group-card
      v-model="selected"
      :options="options"
      :model-value="selected"
      variant="outline"
      color="orange"
    >
      <template #label="{ option }">
        <div class="pl-8 flex items-center">
          <p>{{ option.label }}</p>
          <u-icon
            :name="option.icon"
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
  '  variant="outline"\n  color="orange"\n>\n' +
  '  <template #label="{ option }">\n    <div class="pl-8 flex items-center">\n' +
  '      <p>{{ option.label }}</p>\n      <u-icon\n        :name="option.icon"\n' +
  '      />\n    </div>\n  </template>\n</radio-group-card>'

</script>