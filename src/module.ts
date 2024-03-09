import { createRequire } from 'node:module'
import { defineNuxtModule, addPlugin, createResolver, addImportsDir, addComponent,installModule } from '@nuxt/kit'
//import { defaultExtractor as createDefaultExtractor } from 'tailwindcss/lib/lib/defaultExtractor.js'
//import { excludeColors } from './colors'
import createTemplates from '../src/templates'

//const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })
const _require = createRequire(import.meta.url)
const defaultColors = _require('tailwindcss/colors.js')

export const components = [
  'RadioCard',
  'RadioCardGroup'
]

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'u'
   */
  prefix?: string

  /**
   * @default false
   */
  global?: boolean

  safelistColors?: string[]
  /**
   * Disables the global css styles added by the module.
   */
  disableGlobalStyles?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-ui-radio-gp-card',
    //configKey: 'radioGroupCard'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    safelistColors: ['primary'],
    disableGlobalStyles: false
  },
  async setup (options, nuxt) {
    const {resolve} = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)  

    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      tailwindConfig.theme = tailwindConfig.theme || {}
      tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
      tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {}
    
      const globalColors: any = {
        ...(tailwindConfig.theme.colors || defaultColors),
        ...tailwindConfig.theme.extend?.colors
      }
    
      // @ts-ignore
      globalColors.primary = tailwindConfig.theme.extend.colors.primary = {
        50: 'rgb(var(--color-primary-50) / <alpha-value>)',
        100: 'rgb(var(--color-primary-100) / <alpha-value>)',
        200: 'rgb(var(--color-primary-200) / <alpha-value>)',
        300: 'rgb(var(--color-primary-300) / <alpha-value>)',
        400: 'rgb(var(--color-primary-400) / <alpha-value>)',
        500: 'rgb(var(--color-primary-500) / <alpha-value>)',
        600: 'rgb(var(--color-primary-600) / <alpha-value>)',
        700: 'rgb(var(--color-primary-700) / <alpha-value>)',
        800: 'rgb(var(--color-primary-800) / <alpha-value>)',
        900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        950: 'rgb(var(--color-primary-950) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-primary-DEFAULT) / <alpha-value>)'
      }
    
      if (globalColors.gray) {
        // @ts-ignore
        globalColors.cool = tailwindConfig.theme.extend.colors.cool = defaultColors.gray
      }
    
      // @ts-ignore
      globalColors.gray = tailwindConfig.theme.extend.colors.gray = {
        50: 'rgb(var(--color-gray-50) / <alpha-value>)',
        100: 'rgb(var(--color-gray-100) / <alpha-value>)',
        200: 'rgb(var(--color-gray-200) / <alpha-value>)',
        300: 'rgb(var(--color-gray-300) / <alpha-value>)',
        400: 'rgb(var(--color-gray-400) / <alpha-value>)',
        500: 'rgb(var(--color-gray-500) / <alpha-value>)',
        600: 'rgb(var(--color-gray-600) / <alpha-value>)',
        700: 'rgb(var(--color-gray-700) / <alpha-value>)',
        800: 'rgb(var(--color-gray-800) / <alpha-value>)',
        900: 'rgb(var(--color-gray-900) / <alpha-value>)',
      }
    
      //const colors = excludeColors(globalColors)
    
          // @ts-ignore
      nuxt.options.appConfig.ui = {
        primary: 'green',
        gray: 'slate',
        //colors,
        strategy: 'merge'
      }
    
      tailwindConfig.safelist = tailwindConfig.safelist || []
      tailwindConfig.safelist.push({pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary)-(50|400|500)/})
      tailwindConfig.safelist.push({pattern: /ring-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary)-(|400|500)/})
      tailwindConfig.safelist.push({pattern: /text-(gray)-(100|200|400|500|600|700|800|900)/})
    })

    // Plugins
    addPlugin({
        src: resolve(runtimeDir, 'plugins', 'colors')
    })

    //templates
    createTemplates(nuxt)

    // Modules
    await installModule('nuxt-icon')
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'selector',
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss'),
          //iconsPlugin(Array.isArray(options.icons) || options.icons === 'all' ? { collections: getIconCollections(options.icons) } : typeof options.icons === 'object' ? options.icons as IconsPluginOptions : {})
        ],
        content: {
          files: [
            resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'),
            resolve(runtimeDir, 'ui.config/**/*.{mjs,js,ts}')
          ],
          /*transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          /*extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                // @ts-ignore
                //...customSafelistExtractor(options.prefix, content, nuxt.options.appConfig.ui.colors, options.safelistColors)
              ]
            }
          }*/
        }
      }
    })

     // Components
     addComponent({
      name:'RadioGroupCard',
      filePath: resolve(runtimeDir, 'components','RadioGroupCard.vue'),
      global: true,
    })

    addComponent({
      name:'RadioCard',
      filePath: resolve(runtimeDir, 'components','RadioCard.vue'),
      global: true,
    })

     // Composables
     addImportsDir(resolve(runtimeDir, 'composables'))
  }
})
