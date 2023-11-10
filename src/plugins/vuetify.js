/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/settings.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#0083F5', //blue
          secondary: '#0CF574', //green
          tertiary: '#FA0079', //pink
          quartary: '#7605F7', //purple
          fiftiary: '#F5F318', //yellow
          bshade: '#000000'
        },
      },
    },
  },
})
