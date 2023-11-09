/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import Vue3Spline from 'vue3-spline'
//vuechat

import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(VueSocialChat)
    .use(Vue3Spline)
    .use(vuetify)
    .use(router)
}
