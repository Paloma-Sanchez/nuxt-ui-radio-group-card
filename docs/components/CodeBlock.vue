<template>
  <ClientOnly fallback-tag="div">
    <div 
      v-html="computedCode"
      class="-mt-6"
    >
    </div>
    <template #fallback>
      <div class="w-40 h-8">
        <p>loading code</p>
      </div>
    </template>
  </ClientOnly>
</template>
<script setup>
import MaterialTheme from 'shiki/themes/material-theme.mjs'
import MaterialThemeLighter from 'shiki/themes/material-theme-lighter.mjs'
import MaterialThemePalenight from 'shiki/themes/material-theme-palenight.mjs'
import { getHighlighter } from 'shiki'

const props = defineProps({
    name:{
        type:String,
        default:""
    },
    disabled:{
        type:Boolean,
        default:false
    },
    legend:{
        type:String,
        default:''
    },
    required:{
        type:Boolean,
        default:false
    },
    help:{
        type:String,
        default:''
    },
    color:{
        type:String,
        default:''
    }
})

const colorMode = useColorMode()

const code = computed(() => {
    return ('<scrip setup lang="ts"> \n  const options = [{ ' + 
        '\n    value: \'startup\',\n    label: \'Startup\', \n    description:[\'12GB\', \'6 CPUs\', \'160 GB SSD disk\'],\n    icon:\'i-heroicons-trash\' \n  },\n' +
        '  { \n    value: \'business\',\n    label: \'Business\',\n    description:[\'16GB\', \'8 CPUs\', \'512 GB SSD disk\']\n  },\n' +
        `  { \n    value: 'enterprise',\n    label: 'Enterprise',\n    description:['32GB', '12 CPUs', '1024 GB SSD disk']\n  ${props.name === 'disabled'?'  disabled: true\n  ':''}},\n` +
        '\n  const selected = ref(\'startup\')' +
        '\n</scrip>\n<template>\n  <RadioGroupCard \n    v-model="selected"\n    :options="options"\n'+
        `  ${props.disabled?'  disabled=true\n':''}` +
        `  ${props.legend.length?`legend="${props.legend}"\n`:''}` +
        `  ${props.required?'  required=true\n':''}` +
        `  ${props.help?`help="${props.help}"`:''}` +
        '\n  />\n</template>'
    );
});


const highlighter = await getHighlighter({
  themes: ['nord'],
  langs: ['javascript'],
})

const computedCode = computed(() => {
    if(colorMode.value !== 'dark'){
      return highlighter.codeToHtml (code.value, {
        lang: 'javascript',
        theme: MaterialThemeLighter
      });
    } else {
      return highlighter.codeToHtml (code.value, {
        lang: 'javascript',
        theme: MaterialThemePalenight
      });
    }
});

</script>