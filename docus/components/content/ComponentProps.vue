<template>
  <div>
    <FieldGroup>
      <ComponentPropsField 
        v-for="prop in props" 
        :key="prop.name" 
        :prop="prop" 
      />
    </FieldGroup>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: Object,
    default:(() => {})
  },
  disabled: {
    type: Object,
    default:(() => {})
  },
  help: {
    type: Object,
    default:(() => {})
  },
  legend: {
    type: Object,
    default:(() => {})
  },
  options: {
    type: Object,
    default:(() => {})
  },
  required: {
    type: Object,
    default:(() => {})
  },
  size: {
    type: Object,
    default:(() => {})
  }
})

///missing props: ui, radioUi, modelvalue
</script>
