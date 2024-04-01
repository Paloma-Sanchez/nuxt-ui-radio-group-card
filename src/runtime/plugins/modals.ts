import { defineNuxtPlugin } from "nuxt3/app"
import { shallowRef } from 'vue'
import { modalInjectionKey } from '../composables/useModal'
import type { ModalState } from '../../../../src/runtime/types/modal'

export default defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef<ModalState>({
    component: 'div',
    props: {}
  })

  nuxtApp.vueApp.provide(modalInjectionKey, modalState)
})