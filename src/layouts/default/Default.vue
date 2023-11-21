<script>

export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'ABOUT ME', link: '/about', icon: "mdi-account-tie" },
      // { title: 'Contact', contact: '/contact' }
    ],
    socials: [
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
    <v-app-bar :elevation="3" :color="'black'" :order="order" color="grey-lighten-2" flat location="top"
      density="comfortable">
      <template #prepend>
        <v-app-bar-nav-icon value="drawer button" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link class="text-decoration-none text-white" to="/">
             <v-btn prepend-icon="mdi-home" class="ml-3" rounded="lg" variant="outlined">Home</v-btn>
          </router-link>
        </v-toolbar-title>
      </template>

      <template #append>
        
        <div  class="locale-changer">
          
          <select v-model="$i18n.locale">
           
            <option  v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          
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
            <v-list-item :title="item.title" :prepend-icon="item.icon" v-for="(item, index) in items" :to="item.link" :key="index"  :value="index">
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </v-app-bar>

    <v-navigation-drawer  :color="'bshade'" v-model="drawer" expand-on-hover rail color="grey-darken-2">
      <v-list>
        <router-link class="text-decoration-none text-white" to="jobs">
          <v-list-item prepend-icon="mdi-briefcase" value="jobs" title="JOB EXP">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="certifications">
          <v-list-item prepend-icon="mdi-certificate" value="certifications" title="CERTIFIED">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="figma">
          <v-list-item prepend-icon="mdi-pencil-ruler" value="figma" title="FIGMA EXPO">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="css">
          <v-list-item prepend-icon="mdi-language-css3" value="css" title="CSS FLEX GRID">
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
  <strong>🌎 Get connected with Abraham on social networks!</strong>

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

