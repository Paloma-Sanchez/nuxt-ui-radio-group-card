<template>
    <ClientOnly>
      <div 
        v-if="colorMode.value"
        v-html="computedCode"
        class="-mt-6"
      >
      </div>
    </ClientOnly>
  </template>
  <script setup>
import MaterialTheme from 'shiki/themes/material-theme.mjs'
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