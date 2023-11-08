<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'About' },
      { title: 'Contact' }
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
    <v-app-bar :elevation="3" :color="'#021826'" :order="order" color="grey-lighten-2" flat location="top"
      density="comfortable">
      <template #prepend>
        <v-app-bar-nav-icon value="drawer button" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link class="text-decoration-none text-white" to="/">
            Abraham's Portfolio
          </router-link>
        </v-toolbar-title>
      </template>

      <template #append>


        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar
              image="https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4"
              size="44" color="primary" v-bind="props">
              Activator slot
            </v-avatar>
          </template>
          <v-list class="mr-n3" :bg-color="'#021826'">
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </v-app-bar>

    <v-navigation-drawer :color="'#021826'" v-model="drawer" expand-on-hover rail color="grey-darken-2">
      <v-list>
        <router-link class="text-decoration-none text-white" to="jobs">
          <v-list-item prepend-icon="mdi-briefcase" value="jobs" title="Job Experience">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="certifications">
          <v-list-item prepend-icon="mdi-certificate" value="certifications" title="Certifications">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="figma">
          <v-list-item prepend-icon="mdi-pencil-ruler" value="figma" title="Figma Project">
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-left justify-left" style="min-height: 300px;">
      <router-view />
    </v-main>

  </v-layout>
</template>

