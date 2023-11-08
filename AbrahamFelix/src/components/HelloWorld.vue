<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1 class="text-h2 py-10">Welcome</h1>

      <v-avatar
        image="https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4"
        size="200">
      </v-avatar>
      <h3 class=" pt-10 font-weight-bold mb-n1">Abraham's Portfolio</h3>
      <v-row class="d-flex text-left justify-center">

        <v-col cols="8">
          <p class=" pt-10 text-body-2 font-weight-lighs mb-n1">
            👋 Hello, I'm Abraham Felix. A Software Developer especialized in User Centric Design known as
            UX since 2018.
            <v-spacer class="my-3" />
            👨‍🏫 I possess relentless strengths such as designing with Figma and coding using Vue.js front-end
            technologies along with popular design frameworks as Vuetify. If you want to know more about my work, open the
            left side drawer or look around this site, I coded for you to explore it 🚀.
          </p>
        </v-col>

      </v-row>
      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">


        <v-col cols="auto">
          <v-btn color="primary" to="/about" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat">
            <v-icon icon="mdi-account-tie" size="large" start />

            About me
          </v-btn>
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>
