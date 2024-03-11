<template>
  <div
    :class="wrapperClass"
  >
    <input
      :id="option.value"
      v-model="pick"
      class="peer"
      :disabled="disabled"
      :name="name"
      :required="required"
      :value="value"
      type="radio"
      :checked="checked"
      v-bind="attrs"
    >
    <label
      :class="labelClass"
      :for="option.value"
    >
      <slot
        name="label"
      >
        <div 
          :class="innerClass"
        >
          <Icon 
            v-if="option.icon"
            :class="iconClass"
            :name="option.icon? option.icon:''"
          />
          <div
            :class="labelMainClass"
          >
            <div
              :class="ui.label"
            >
              {{ label }}
            </div>
            <span
              v-for="description in option.description"
              v-if="size==='md'"
              :key="description"
              :class="descriptionClass"
            >
              {{ description }}  
            </span>
            <span
              v-if="size==='sm'"
            >
              <div
                :class="descriptionClass"
              >
                {{ option.description[0] }}
              </div>
              <div
                :class="ui.extradescription"
              >
                {{ option.description[1] }}
              </div>
            </span>
          </div>
        </div>
        <div
          v-if="size!=='xs'"
        >
          <slot name="trailing">
            <Icon
              v-if="!checked"
              :class="iconClass"
              name="i-material-symbols-radio-button-unchecked" 
            />
            <Icon
              v-else
              :class="iconClass"
              name="i-material-symbols-radio-button-checked"
            />
          </slot>
        </div>
      </slot>
      <span 
        v-if="required" 
        :class="ui.required"
      >
        *
      </span>
    </label>
  </div>
</template>
    <script lang="ts">
    import { computed, defineComponent, inject, toRef } from 'vue'
    import { twMerge, twJoin } from 'tailwind-merge'
    import { mergeConfig } from '../utils'
    import { useUI } from '../composables/useUI'
    import type { Strategy } from '../types'
    import appConfig from '../app.config'
    import { radio } from '../ui.config'
    import colors from 'tailwindcss/colors'

    const config = mergeConfig<typeof radio>("merge", appConfig.ui.radioCard, radio)
    
    export default defineComponent({
        name:'RadioCard',
        props: {
            id: {
                type: String,
                default: null
            },
            value: {
                type: [String, Number, Boolean],
                default: null
            },
            modelValue: {
                type: [String, Number, Boolean, Object],
                default: null
            },
            name: {
                type: String,
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            },
            help: {
                type: String,
                default: null
            },
            label: {
                type: String,
                default: null
            },
            required: {
                type: Boolean,
                default: false
            },
            color: {
                type: String as PropType<typeof colors[number]>,
                default: () => config.default.color,
                
            },
            inputClass: {
                type: String,
                default: null
            },
            class: {
                type: [String, Object, Array] as PropType<any>,
                default: () => ''
            },
            ui: {
                type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
                default: () => ({})
            },
            option:{
                type:Object,
                default:() => {}
            },
            size:{
                type: String,
                default: () => config.default.size
            },
            variant:{
                type: String,
                default: () => config.default.variant
            }
        },

        emits: ['update:modelValue', 'change'],

        setup (props, { emit }) {
            const { ui, attrs } = useUI('radio', toRef(props, 'ui'), config, toRef(props, 'class'))
            //if(props.size==='md')console.log('ui md', ui.value)
            const radioGroup = inject('radio-group', null)
            const { emitFormChange, color, name } = radioGroup ?? useFormGroup(props, config)
    
            const pick = computed({
            get () {
                return props.modelValue
            },
            set (value) {
                emit('update:modelValue', value)
                emit('change', value)
    
                if (!radioGroup) {
                emitFormChange()
                }
            }
            })
    
            const checked = computed(() => props.modelValue === props.value )

            const descriptionClass= computed(() => {
                const mergedClass = (checked.value && props.variant==='solid')? 
                twJoin(
                    ui.value.description.unchecked,
                    ui.value.description.checked
                ):ui.value.description.unchecked

                return mergedClass
            })

            const iconClass = computed(() => {
                let textColor = ''
                if(checked.value){
                    if(props.variant==='outline'){
                        textColor = `text-${props.color}-500`
                    }
                }else{
                    textColor = 'text-gray-400'
                }

                return twJoin(
                    ui.value.icon[props.size],
                    textColor
                )
            })

            const innerClass = computed(() => {
                let justify =''
                props.size==='xs'?justify='justify-center':''

                return twMerge(twJoin(
                    ui.value.container,
                    justify
                ))
            })

            const labelClass = computed(() => {
                return twMerge(twJoin(ui.value.size[props.size], 
                ui.value.variant[props.variant].replaceAll('{color}', props.color)),
                //props.label
                )
            })

            const labelMainClass = computed(() => {
                return twMerge(twJoin(
                    ui.value.main[props.size],
                ))
            })
            
            const wrapperClass = computed(() => {
                return twMerge(twJoin(
                    props.size && /*appConfig.ui.colors.includes(props.color) &&*/ ui.value.wrapper,
                ))
            })

            return {
                // eslint-disable-next-line vue/no-dupe-keys
                checked,
                //uiSetup,
                attrs,
                pick,
                // eslint-disable-next-line vue/no-dupe-keys
                name,
                // eslint-disable-next-line vue/no-dupe-keys
                descriptionClass,
                iconClass,
                innerClass,
                labelClass,
                labelMainClass,
                wrapperClass
            }
      }
    })

    </script>
    <style scoped>
    input[type="radio"] {
        display: none;
      }
    </style>