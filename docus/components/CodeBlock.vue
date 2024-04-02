<template>
    <div v-html="colorMode.value === 'dark'? codeDark : codeLight"></div>
</template>
<script setup>
import MaterialTheme from 'shiki/themes/material-theme.mjs'
import MaterialThemeLighter from 'shiki/themes/material-theme-lighter.mjs'
import MaterialThemePalenight from 'shiki/themes/material-theme-palenight.mjs'
import { getHighlighter } from 'shiki'

const colorMode = useColorMode()

const highlighter = await getHighlighter({
  themes: ['nord'],
  langs: ['javascript'],
})

const codeLight = highlighter.codeToHtml ('<script setup lang="ts"> \n const options = [{', {
  lang: 'javascript',
  theme: MaterialThemeLighter
})

const codeDark = highlighter.codeToHtml ('<script setup lang="ts"> \n const options = [{', {
  lang: 'javascript',
  theme: MaterialThemePalenight
})

</script>