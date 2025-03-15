import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const MyPreset = definePreset(Aura)

export default {
  preset: MyPreset,
  options: {
    // darkModeSelector: false,
  },
}
