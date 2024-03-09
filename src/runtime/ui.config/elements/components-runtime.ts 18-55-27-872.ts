import { defineNuxtPlugin } from '#app';
import RadioGroupCard from '../src/runtime/components/RadioGroupCard.vue';
import RadioCard from '../src/runtime/components/RadioCard.vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.RGC = RadioGroupCard
  nuxtApp.RC =RadioCard
});