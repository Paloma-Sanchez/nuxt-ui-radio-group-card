<template>
  <div :class="wrapperClass">
    <div class="mx-auto w-max ">
      <legend 
        v-if="legend || $slots.legend" 
        :class="ui.legend"
      >
        <slot name="legend">
          {{ legend }}
        </slot>
        <span 
          v-if="required" 
          :class="ui.required"
        >
          *
        </span>
      </legend>
      <p
        v-if="help" 
        :class="ui.help"
      >
        {{ help }}
      </p>
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
          :variant="variant"
          @change="onUpdate(option.value)"
        >
          <template #label>
            <slot 
              name="label" 
              v-bind="{ option }"  
            />
          </template>
          <template #trailing>
            <slot 
              name="trailing" 
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
//import appConfig from '../app.config'
import { radioCardGroup, radioCard} from '../ui.config'
import colors from 'tailwindcss/colors'
import { omit } from '../../runtime/utils/lodash'
//import { colorsToExclude } from '../../colors'
export const colorsToExclude = [
  'inherit',
  'transparent',
  'current',
  'white',
  'black',
  'slate',
  //'gray',
  'zinc',
  'neutral',
  'stone',
  'cool'
]

const approuvedColors = Object.keys(omit(colors, colorsToExclude))
approuvedColors.push("primary")
approuvedColors.push("gray")

const config = mergeConfig<typeof radioCardGroup>("merge", /*appConfig.ui.radioGroup,*/ radioCardGroup)
const configRadio = mergeConfig<typeof radioCard>("merge", /*appConfig.ui.radioCard,*/ radioCard)

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
    help: {
      type: String,
      default: null
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
    required: {
                type: Boolean,
                default: false
            },
    color: {
      type: String as PropType<typeof colors[number]>,
      default: () => config.default.color,
      validator (value: string) {
        return approuvedColors.includes(value)
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
      default:config.default.size,
      validator (value: string) {
        return Object.keys(configRadio.size).includes(value)
      }
    },
    variant: {
      type: String as PropType<SelectVariant>,
      default: () => config.default.variant,
      validator (value: string) {
        return [
          ...Object.keys(configRadio.variant)
          //...Object.values(configRadio.color).flatMap(value => Object.keys(value))
        ].includes(value)
      }
    },
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
        wrapperClass,
        colors
        }
    }
})

</script>