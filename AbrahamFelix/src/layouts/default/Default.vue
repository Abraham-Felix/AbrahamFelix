<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'Profile' },
      { title: 'Settings' },
      { title: 'Logout' }
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
    <v-app-bar :elevation="3" :color="'green'" :order="order" color="grey-lighten-2" flat location="top"
      density="comfortable">
      <template #prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link class="text-decoration-none text-white" to="/">
            Abraham's UX Portfolio
          </router-link>
        </v-toolbar-title>
      </template>

      <template append>


        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar
              image="https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4"
              size="44" color="primary" v-bind="props">
              Activator slot
            </v-avatar>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover rail color="grey-darken-2">
      <v-list>
        <router-link class="text-decoration-none text-white" to="posts">
          <v-list-item to="posts" prepend-icon="mdi-book" value="posts" title="Posts">
          </v-list-item>
        </router-link>
        <router-link class="text-decoration-none text-white" to="comments">
          <v-list-item prepend-icon="mdi-comment" value="comments" title="Comments">
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>

  </v-layout>
</template>

