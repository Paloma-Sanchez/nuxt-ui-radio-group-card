<template>
  <h2>compsss</h2>
  <div>
    <div class="relative flex border border-gray-200 dark:border-gray-700 rounded-t-md overflow-hidden not-prose">
      <div 
        v-for="prop in propsToSelect" 
        :key="prop.name" 
        class="flex flex-col gap-0.5 justify-between py-1.5 font-medium bg-gray-50 dark:bg-gray-800 border-r  dark:border-r-gray-700"
      >
        <label 
          :for="`prop-${prop.name}`" 
          class="block text-xs px-2.5 font-medium text-gray-400 dark:text-gray-500 -my-px"
        >
          {{ prop.label }}
        </label>
        <UCheckbox
          v-if="prop.type.startsWith('boolean')"
          v-model="componentProps[prop.name]"
          :name="`prop-${prop.name}`"
          tabindex="-1"
          class="justify-center"
        />
        <USelectMenu
          v-else-if="/*prop.options.length &&*/ prop.name !== 'label'"
          v-model="componentProps[prop.name]"
          :options="prop.options"
          :name="`prop-${prop.name}`"
          variant="none"
          class="inline-flex"
          :ui-menu="{ width: 'w-32 !-mt-px', rounded: 'rounded-t-none' }"
          select-class="py-0"
          tabindex="-1"
          :popper="{ strategy: 'fixed', placement: 'bottom-start' }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  slug: {
    type: String,
    default: null
  },
  props: {
    type: Object,
    default: () => ({})
  },
  code: {
    type: String,
    default: null
  },
  slots: {
    type: Object,
    default: null
  },
  baseProps: {
    type: Object,
    default: () => ({})
  },
  ui: {
    type: Object,
    default: () => ({})
  },
  excludedProps: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array,
    default: () => []
  },
  backgroundClass: {
    type: String,
    default: 'bg-white dark:bg-gray-900'
  },
  extraClass: {
    type: String,
    default: ''
  },
  componentClass: {
    type: String,
    default: ''
  },
  ignoreVModel: {
    type: Boolean,
    default: false
  }
})

const propsToSelect = computed(() => Object.keys(props.props).map((key) => {
  if (props.excludedProps.includes(key)) {
    return null
  }

  const prop = meta?.meta?.props?.find((prop) => prop.name === key)
  const schema = prop?.schema || {}
  const options = generateOptions(key, schema)

  return {
    type: prop?.type || 'string',
    name: key,
    label: key === 'modelValue' ? 'value' : camelCase(key),
    options
  }
}).filter(Boolean))
</script>