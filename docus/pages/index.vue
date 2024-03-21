<template>
  <div>
    <h1>hello</h1>
    <ContentDoc />
  </div>
</template>
<script setup>
const { data: page } = await useAsyncData('index', () => queryContent('/button').findOne())
console.log('page', page.value)
/*if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}*/
</script>