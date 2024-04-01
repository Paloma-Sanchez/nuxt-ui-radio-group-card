<template>
  <div> 
    <div class="relative flex border border-gray-200 dark:border-gray-700 rounded-t-md overflow-hidden not-prose">
      <div 
       
        class="flex flex-col gap-0.5 justify-between py-1.5 font-medium bg-gray-50 dark:bg-gray-800 border-r border-r-gray-200 dark:border-r-gray-700"
      >
        <label 
          :for="`prop-${propsToSelect.name}`" 
          class="block text-xs px-2.5 font-medium text-gray-400 dark:text-gray-500 -my-px"
        >
          {{ propsToSelect.name }}
        </label>
        <UCheckbox
          v-if="propsToSelect.type === 'boolean'"
          v-model="propsToSelect[propsToSelect.name]"
          :name="`prop-${propsToSelect.name}`"
          tabindex="-1"
          class="justify-center"
        />
        <USelectMenu
          v-else-if="propsToSelect.options?.length && propsToSelect.name !== 'legend'"
          v-model="propsToSelect[propsToSelect.name]"
          :options="propsToSelect.options"
          :name="`prop-${propsToSelect.name}`"
          variant="none"
          class="inline-flex"
          :ui-menu="{ width: 'w-32 !-mt-px', rounded: 'rounded-t-none' }"
          select-class="py-0"
          tabindex="-1"
          :popper="{ strategy: 'fixed', placement: 'bottom-start' }"
        />
        <UInput
          v-else
          :model-value="propsToSelect[propsToSelect.name]"
          :type="propsToSelect.type === 'number' ? 'number' : 'text'"
          :name="`prop-${propsToSelect.name}`"
          variant="none"
          autocomplete="off"
          input-class="py-0"
          tabindex="-1"
          @update:model-value="val => propsToSelect[propsToSelect.name] = propsToSelect.type === 'number' ? Number(val) : val"
        />
      </div>
    </div>
    <div 
      class="flex border border-b-0 border-gray-200 dark:border-gray-700 relative not-prose" 
      :class="[{ 'p-4': padding }, propsToSelect.length ? 'border-t-0' : 'rounded-t-md', backgroundClass, extraClass]"
    >
      <RadioGroupCard 
        v-if="componentPropsToSelect.options?.length"
        v-model="vModel"
        :options="componentPropsToSelect.options"
        :disabled="propsToSelect.disabled"
        :legend="propsToSelect.legend"
        :required="propsToSelect.required"
        :help="propsToSelect.help"
        :color="propsToSelect.style"
      />
    </div>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  slug: {
    type: String,
    default: null
  },
  padding: {
    type: Boolean,
    default: true
  },
  props: {
    type: Object,
    default: () => ({})
  },
  componentProps: {
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
    type: Array as PropType<{ name: string; values: string[]; restriction: 'expected' | 'included' | 'excluded' | 'only' }[]>,
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
  previewOnly: {
    type: Boolean,
    default: false
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


const baseProps = reactive({ ...props.baseProps })
const propsToSelect = reactive({ ...props.props })
const componentPropsToSelect = reactive({ ...props.componentProps })

const vModel = computed({
  get: () => baseProps.modelValue,
  set: (value) => {
    baseProps.modelValue = value
  }
})

/*const propsToSelect = computed(() => Object.keys(componentProps).map((key) => {

  return {
    type: 'string',
    name: 'legend',
    label: 'Legend',
    options: []
  }
})
)*/

const upoptions = [
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

const selected = ref(upoptions[0].value);

</script>
