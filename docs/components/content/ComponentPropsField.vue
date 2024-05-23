<template>
  <Field v-bind="prop">
    <strong 
      v-if="prop.default" 
      class="leading-6"
    >
      {{ prop.default }}
    </strong>
    <p v-if="prop.description">
      {{ prop.description }}
    </p>
    <div v-else-if="prop.schema?.kind === 'enum' && prop.schema.type !== 'boolean' && startsWithCapital(prop.schema.type) && !prop.schema.type.startsWith(prop.schema.schema[0])" class="flex items-center flex-wrap gap-1 -my-1">
      <code v-for="value in prop.schema.schema.filter(value => typeof value === 'string')" :key="value" class="whitespace-pre-wrap break-words leading-6">{{ value }}</code>
    </div>
  </Field>
</template>

<script setup lang="ts">
defineProps({
  prop: {
    type: Object as PropType<any>,
    default: () => ({})
  }
})

function startsWithCapital (word) {
  if (word.charAt(0).startsWith('"')) {
    return false
  }

  return word.charAt(0) === word.charAt(0).toUpperCase()
}
</script>
