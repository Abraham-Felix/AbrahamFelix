<script>

export default {
  data: () => ({
    drawer: false,
    items: [
      {  link: '/about', icon: "mdi-account-tie" },
      // { title: 'Contact', contact: '/contact' }
    ],
    socials: [
      {icon:'mdi-codepen', link: 'https://codepen.io/apesyntax/pens/showcase'},
        {icon:'mdi-github', link: 'https://github.com/abraham-felix'},
        {icon: 'mdi-linkedin' , link: 'https://www.linkedin.com/in/abraham-felix/'},
        {icon: 'mdi-stack-overflow', link: 'https://stackoverflow.com/users/17039951/abraham-felix'},
        {icon: 'mdi-gmail', link: 'mailto:apesyntax@gmail.com'}
      ],
    // values can be 0 or -1
    order: -1,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>


<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar  scroll-behavior="fade-image inverted" image="https://wallpapers.com/images/hd/starry-night-and-celestial-bodies-hoztgf3afa0blfvc.webp" :elevation="3" :color="'black'" :order="order" color="grey-lighten-2" flat location="top"
      density="comfortable">
      <template #prepend>
        <v-app-bar-nav-icon value="drawer button" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link class="text-decoration-none text-white" to="/">
             <v-btn prepend-icon="mdi-home" class="ml-3" rounded="lg" variant="outlined">{{ $t('homebtn') }}</v-btn>
          </router-link>
        </v-toolbar-title>
      </template>
     <!-- Internationalization switch btn -->
      <template #append>
        
        <div  class="locale-changer">
          <v-icon size="xs" icon="mdi-translate"></v-icon>  
          <select  class="mr-5 text-capitalize" style="color:white" v-model="$i18n.locale">
           
            <option 
            style="background-color:black" 
            v-for="locale in $i18n.availableLocales" 
            :key="`locale-${locale}`" 
            :value="locale"
            >
            -{{ locale }}
          </option>
          
          </select>
          
      
        </div>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar
              image="https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4"
              size="44" color="primary" v-bind="props" class="hover">
              Activator slot 
            </v-avatar>
          </template>
          <v-list :bg-color="'bshade'">
            <v-list-item :title="$t('aboutmebtn')" :prepend-icon="item.icon" v-for="(item, index) in items" :to="item.link" :key="index"  :value="index">
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </v-app-bar>

    <v-navigation-drawer  :color="'bshade'" v-model="drawer" expand-on-hover rail color="grey-darken-2">
      <v-list>
        <router-link class="text-decoration-none text-white" to="jobs">
          <v-list-item prepend-icon="mdi-briefcase" value="jobs" :title="$t('sidenav1')">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="certifications">
          <v-list-item prepend-icon="mdi-certificate" value="certifications" :title="$t('sidenav2')">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="figma">
          <v-list-item prepend-icon="mdi-pencil-ruler" value="figma" :title="$t('sidenav3')">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="css">
          <v-list-item prepend-icon="mdi-language-css3" value="css" :title="$t('sidenav4')">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="scrollinggallery">
          <v-list-item prepend-icon="mdi-pig" value="ScrollingGallery" :title="$t('sidenav5')">
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-left justify-left" style="min-height: 300px;">
      <router-view />
      
    </v-main>
    <v-footer
    app
    name="footer"
    color="primary"
    elevation="2"
  >    
  <strong> 🌎 {{ $t('footertext') }} 👉 </strong> 

  <v-spacer></v-spacer>
  <v-btn
  v-for="social in socials"
  :key="icon"
  class="mx-4"
  :icon="social.icon"
  :href="social.link"
  target="_blank"
  variant="plain"
  size="small"
></v-btn>

  </v-footer>
  </v-layout>

</template>

