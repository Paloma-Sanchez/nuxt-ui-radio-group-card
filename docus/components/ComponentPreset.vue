<template>
  <div>
    <UTabs
      :items="items"
      @change="onChange"
    />
    <ClientOnly>
      <div 
        v-if="colorMode.value"
        v-html="computedCode"
        class="-mt-6"
      >
      </div>
    </ClientOnly>
  </div>
</template>
<script setup>
import MaterialTheme from 'shiki/themes/material-theme.mjs'
import MaterialThemeLighter from 'shiki/themes/material-theme-lighter.mjs'
import MaterialThemePalenight from 'shiki/themes/material-theme-palenight.mjs'
import { getHighlighter } from 'shiki'

const selectedContent = ref('RadioCard')

const items = [{
    label: 'RadioCard',
  }, 
  {
   label: 'RadioGroupCard',
  }
]

function onChange (index) {
  const item = items[index]
  selectedContent.value = item.label
  
}

const colorMode = useColorMode()

const code = computed(() => {
  if (selectedContent.value === 'RadioCard') {
    return(
      '{ \n  wrapper: \'wrapper rounded-md\',\n  icon:{\n' +
      '    sm:\'-mt-11 h-5 w-5\',\n    md:\'ml-4 h-5 w-5\'\n  },\n' +
      '  container:\'container flex items-center\',\n' +
      '  label:\'text-md font-semibold\',\n  main:{\n    sm:\'labelcenter\',\n' +
      '    md:\'labelcenter pl-3\'\n  },\n  size: {\n' +
      '    xs:\'w-[80px] aspect-ratio p-2 text-md  flex items-center justify-center\',\n' +
      '    sm:\' w-[200px] aspect-ratio p-5 text-sm  flex items-center justify-between\',\n' +
      '    md:\' h-20 w-full pr-6 text-sm  flex items-center justify-between\'\n  },\n' +
      '  description:{\n   checked:\'text-white\',\n' +
      '   unchecked:\'pl-3 mt-2 first-of-type:pl-0 pr-1 font-light text-gray-500\'\n  },\n' +
      '  extradescription:\'mt-2\',\n  required: \'text-sm text-red-500 dark:text-red-400\',\n' +
      '  help: \'text-sm text-gray-500 dark:text-gray-400\',\n  variant:{\n' +
      '    solid:\'rounded-md cursor-pointer peer-disabled:opacity-50\n      '+
      'peer-disabled:cursor-not-allowed peer-checked:ring-2\n      peer-checked:ring-{color}-500 peer-checked:ring-offset-2\n'+
      '      peer-checked:ring-offset-white text-gray-700 peer-checked:text-white\n      bg-{color}-50 peer-checked:bg-{color}-500\',\n' +
      '    outline:\'rounded-md cursor-pointer peer-disabled:opacity-50\n      peer-disabled:cursor-not-allowed peer-checked:ring-4\n'+
      '      peer-checked:ring-{color}-500 text-gray-700 peer-checked:text-{color}-500\n      bg-{color}-50\',\n' +
      '    ghost:\'rounded-md cursor-pointer peer-disabled:opacity-50\n      peer-disabled:cursor-not-allowed peer-checked:ring-4\n'+
      '      peer-checked:ring-{color}-500 text-gray-700 peer-checked:text-{color}-500\n      '+
      'bg-white hover:bg-{color}-50 peer-checked:bg-{color}-100\n      '+
      'peer-disabled:bg-gray-200 peer-disabled:text-gray-700 hover:text-{color}-400\n      border border-gray-100\',\n' +
      '    black:\'rounded-md cursor-pointer peer-disabled:opacity-50\n      peer-disabled:cursor-not-allowed peer-checked:ring-4\n      '+
      'peer-checked:ring-{color}-500 text-gray-700 peer-checked:text-{color}-500\n      bg-white border border border-gray-300\'\n' +
      '  },\n  default: {\n    color: \'primary\',\n    variant:\'solid\'\n  }\n}'
    );
  } else {
    return (
      '{\n  wrapper: {\n    xs:\'\',\n    sm:\'\',\n    md:\'flex m-2\',\n  },' +
      '  container:{\n    xs:\'space-x-2 w-max flex\',\n    sm:\'space-x-2 w-max flex\',\n    md:\'space-y-2 w-max\',\n  },\n' +
      '  legend: \'text-sm font-medium text-gray-700  mb-1\',\n' +
      '  default: {\n    color: \'primary\',\n    size: \'md\',\n    variant:\'solid\'\n    },\n' +
      '  required: \'text-sm text-red-500 dark:text-red-400\',\n' +
      '  help: \'text-sm text-gray-500 dark:text-gray-400 mb-2\'\n  }'
    )
  }
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