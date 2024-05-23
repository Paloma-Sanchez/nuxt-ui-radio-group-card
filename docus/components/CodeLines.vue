<template>
  <ClientOnly 
    fallback-tag="div"
  >
    <div 
      class="-mt-6"
      v-html="computedCode"
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
import MaterialThemeLighter from 'shiki/themes/material-theme-lighter.mjs'
import MaterialThemePalenight from 'shiki/themes/material-theme-palenight.mjs'
import { getHighlighter } from 'shiki'

const props = defineProps({
    code:{
        type: String,
        required: true
    }
})

const colorMode = useColorMode()

const highlighter = await getHighlighter({
  themes: ['nord'],
  langs: ['javascript'],
})

const computedCode = computed(() => {
    if(colorMode.value !== 'dark'){
      return highlighter.codeToHtml (props.code, {
        lang: 'javascript',
        theme: MaterialThemeLighter
      });
    } else {
      return highlighter.codeToHtml (props.code, {
        lang: 'javascript',
        theme: MaterialThemePalenight
      });
    }
});

</script>