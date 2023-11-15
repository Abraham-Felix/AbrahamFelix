/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import en from '../locales/en.json'
import es from '../locales/es.json'
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import Vue3Spline from 'vue3-spline'
//vuechat
import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'
//vue i18n
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es }
})

export function registerPlugins (app) {
  loadFonts()
  app
    .use(i18n)
    .use(VueSocialChat)
    .use(Vue3Spline)
    .use(vuetify)
    .use(router)
}
