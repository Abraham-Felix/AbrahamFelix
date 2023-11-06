<template>
  <v-layout class="rounded rounded-md">

    <v-app-bar :elevation="3" :color="'green'" :order="order" color="grey-lighten-2" flat title="Application bar"
      location="top" density="comfortable">
      <!-- <template v-slot:append>
        <v-switch v-model="order" hide-details inset label="Toggle order" true-value="-1" false-value="0"></v-switch>
      </template> -->

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


    </v-app-bar>

    <v-navigation-drawer color="grey-darken-2"></v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Profile' },
      { title: 'Settings' },
      { title: 'Logout' }
    ],
    // values can be 0 or -1
    order: -1,
  }),
}
</script>