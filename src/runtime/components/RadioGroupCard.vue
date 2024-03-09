<template>
  <div :class="wrapperClass">
    <div class="mx-auto w-full max-w-md">
      <legend 
        v-if="legend || $slots.legend" 
        :class="ui.legend"
      >
        <slot name="legend">
          {{ legend }}
        </slot>
      </legend>
      <div :class="containerClass">
        <radioCard
          v-for="option in normalizedOptions"
          :key="option.value"
          :label="option.label"
          :model-value="modelValue"
          :value="option.value"
          :help="option.help"
          :disabled="option.disabled || disabled"
          :option="option"
          :ui="uiRadio"
          :color="color"
          :size="size"
          :bord-only="bordOnly"
          @change="onUpdate(option.value)"
        >
          <template #label>
            <slot 
              name="label" 
              v-bind="{ option }"  
            />
          </template>
          <template #checkIcon>
            <slot 
              name="checkIcon" 
              v-bind="{ option }"
            />
          </template>
        </radioCard>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, provide, toRef } from 'vue'
import RadioCard from './RadioCard.vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { useUI } from '../composables/useUI'
import { useFormGroup } from '../composables/useFormGroup'
import { mergeConfig, get } from '../utils'
import type { Strategy } from '../types'
import appConfig from '../../app.config'
import { radioGroup, radio} from '../ui.config'
import colors from 'tailwindcss/colors'

const config = mergeConfig<typeof radioGroup>("merge", appConfig.ui.radioGroup, radioGroup)
const configRadio = mergeConfig<typeof radio>("merge", appConfig.ui.radioCard, radio)

export default defineComponent({
  name: 'RadioGroupCard',
  components: {
    RadioCard
  },
  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    legend: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    optionAttribute: {
      type: String,
      default: 'label'
    },
    valueAttribute: {
      type: String,
      default: 'value'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String as PropType<typeof colors[number]>,
      default: () => config.default.color,
      validator (value: string) {
        return true //appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: () => ''
    },
    ui: {
      type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
      default: () => ({})
    },
    uiRadio: {
      type: Object as PropType<Partial<typeof configRadio> & { strategy?: Strategy }>,
      default: () => ({})
    },
    size:{
      type:String,
      default:'md'
    },
    bordOnly:{
      type:Boolean,
      default:false
    }
  },
  emits: ['update:modelValue', 'change'],
    setup (props, { emit }) {
        const { ui, attrs } = useUI('radioGroup', toRef(props, 'ui'), config, toRef(props, 'class'))
        const { ui: uiRadio } = useUI('radio', toRef(props, 'uiRadio'), configRadio)

        const { emitFormChange, color, name } = useFormGroup(props, config)
        provide('radio-group', { color, name })

        const onUpdate = (value: any) => {
          emit('update:modelValue', value)
          emit('change', value)
          emitFormChange()
        }

        const guessOptionValue = (option: any) => {
          return get(option, props.valueAttribute, get(option, props.optionAttribute))
        }

        const guessOptionText = (option: any) => {
          return get(option, props.optionAttribute, get(option, props.valueAttribute))
        }

        const normalizeOption = (option: any) => {
          if (['string', 'number', 'boolean'].includes(typeof option)) {
              return {
              value: option,
              label: option
              }
          }

          return {
              ...option,
              value: guessOptionValue(option),
              label: guessOptionText(option)
          }
        }

        const normalizedOptions = computed(() => {
        return props.options.map(option => normalizeOption(option))
        })

        const containerClass = computed(() => {
          return twMerge(twJoin(
            props.size && ui.value.container[props.size],
            
          ))
        })

        const wrapperClass = computed(() => {
          return twMerge(twJoin(
            props.size && ui.value.wrapper[props.size],
          ))
        })

        return {
        // eslint-disable-next-line vue/no-dupe-keys
        ui,
        // eslint-disable-next-line vue/no-dupe-keys
        uiRadio,
        attrs,
        normalizedOptions,
        // eslint-disable-next-line vue/no-dupe-keys
        onUpdate,
        containerClass,
        wrapperClass
        }
    }
})

</script>
../../composables/useUI../../composables/useFormGroup../../utils../../types../../app.config~/src/runtime/composables/useUI~/src/runtime/composables/useFormGroup~/src/runtime/types~/src/runtime/utils../../../../src/runtime/composables/useUI../../../../src/runtime/composables/useFormGroup../../../../src/runtime/utils../../../../src/runtime/types