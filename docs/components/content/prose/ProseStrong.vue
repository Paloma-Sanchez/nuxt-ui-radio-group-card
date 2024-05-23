<template>
  <strong>
    <slot />
  </strong>
</template>
<style>
.dark  strong{
  background-color: #202839;
  padding: 5px 6px;
  border: 1px solid #374151;
  border-radius: .375rem;
  font-size: .875em;
  font-weight: 600;
  line-height: 1.75rem;
}

strong{
  background-color: #f8f9fb;
  border: 1px solid #e2e7ee;
  padding: 5px 6px;
  border-radius: .375rem;
  font-size: .875em;
  font-weight: 600;
  line-height: 1.75rem;

}
</style>
