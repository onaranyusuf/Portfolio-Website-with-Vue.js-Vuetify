// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light:{
        dark: false,
        colors: {
          bblue1:"#03045E",
          bblue2:"#00B4D8",
          bblue3:"#90E0EF",
          bblue4:"#CAF0F8",
        }
      }
    }
  }
})