<template>
    <div v-html="code"></div>
</template>
<script setup>
import MaterialTheme from 'shiki/themes/material-theme.mjs'
import MaterialThemeLighter from 'shiki/themes/material-theme-lighter.mjs'
import MaterialThemePalenight from 'shiki/themes/material-theme-palenight.mjs'
import { codeToHtml } from 'shiki'
import { useShikiHighlighter } from '#imports';
import { getHighlighter } from 'shiki'

console.log('hey from shiki')
const highlighter = await getHighlighter({
  themes: ['nord'],
  langs: ['javascript'],
})
const code = highlighter.codeToHtml ('<script setup lang="ts"> \n const options = [{', {
  lang: 'javascript',
  theme: MaterialThemePalenight,
})

console.log('code', code)

</script>