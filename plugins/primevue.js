import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
import Slider from 'primevue/slider'
import Button from 'primevue/button'
import DataView from 'primevue/dataview'
import Timeline from 'primevue/timeline'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Sidebar from 'primevue/sidebar'
import Tooltip from 'primevue/tooltip'
import Chart from 'primevue/chart'
import Image from 'primevue/image'
import Avatar from 'primevue/avatar'
import Chip from 'primevue/chip'
import ScrollTop from 'primevue/scrolltop'
import Tag from 'primevue/tag'
import Terminal from 'primevue/terminal'
import TerminalService from 'primevue/terminalservice'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  // FORM
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('MultiSelect', MultiSelect)
  nuxtApp.vueApp.component('Slider', Slider)
  // BUTTON
  nuxtApp.vueApp.component('Button', Button)
  // DATA
  nuxtApp.vueApp.component('DataView', DataView)
  nuxtApp.vueApp.component('Timeline', Timeline)
  // PANEL
  nuxtApp.vueApp.component('Accordion', Accordion)
  nuxtApp.vueApp.component('AccordionTab', AccordionTab)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('TabView', TabView)
  nuxtApp.vueApp.component('TabPanel', TabPanel)
  // OVERLAY
  nuxtApp.vueApp.component('Sidebar', Sidebar)
  nuxtApp.vueApp.directive('tooltip', Tooltip)
  // CHART
  nuxtApp.vueApp.component('Chart', Chart)
  // MEDIA
  nuxtApp.vueApp.component('Image', Image)
  // MISC
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('Chip', Chip)
  nuxtApp.vueApp.component('ScrollTop', ScrollTop)
  nuxtApp.vueApp.component('Tag', Tag)
  nuxtApp.vueApp.component('Terminal', Terminal)
  nuxtApp.vueApp.component('TerminalService', TerminalService)
})
