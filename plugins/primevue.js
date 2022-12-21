import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  // FORM
  // BUTTON
  nuxtApp.vueApp.component('Button', Button)
  // DATA
  // PANEL
  // OVERLAY
  // CHART
  // MEDIA
  // MISC
  nuxtApp.vueApp.component('Avatar', Avatar)
})
