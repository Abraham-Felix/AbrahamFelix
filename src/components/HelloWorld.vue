<template>
  <Vue3Spline  style="z-index:-1 ; width: auto; position: fixed;"
  :scene="{
    url: 'https://prod.spline.design/qtJiAlkWCKctC-RX/scene.splinecode',
  }"
  >
  
  </Vue3Spline>
  <v-container class="pa-0 ">
    <v-responsive class="align-center text-center ">
      <h1 class="text-h2 py-10">Welcome</h1>

  
      <v-avatar
      class="mb-3"
        image="https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4"
        size="200">
    </v-avatar>
    <div>
    <v-chip
    class="ma-2"
    color="secondary"
    text-color="white"
    append-icon="mdi-check"
  >
    Open to collaborate
  </v-chip>
  <v-chip
    class="ma-2"
    color="tertiary"
    text-color="white"
    append-icon="mdi-language-css3"
  >
    CSS Expert
  </v-chip>
  <v-chip
  class="ma-2"
  color="primary"
  text-color="white"
  append-icon="mdi-language-html5"
>
  HTML Expert
</v-chip>
  </div>
       <v-row class="d-flex text-left justify-center">

        <v-col cols="8">
          <p class=" pt-10 text-body-2 font-weight-lighs mb-n1">
            👋 Hello, I'm Abraham Felix. Just a software developer from Mexico dedicated in User Centric Design known as
            UX since 2018. 
            <v-spacer class="my-3" />
            👨‍🚀 I like creating 2d and 3d art using a pen or tools like Figma, CorelDraw, Splice and coding using Vue.js front-end
            technologies along with popular design frameworks as Vuetify. Let's collaborate together!
            <v-spacer class="my-3" />
            If you want to know more about my work, open the
            left side drawer or look around this site, I coded for you to explore it! 🚀
          </p>
        </v-col>

      </v-row>
      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">


        <v-col cols="auto">
          <v-btn rounded="lg" to="/about" min-width="228" rel="noopener noreferrer" size="x-large"  variant="outlined">
            <v-icon icon="mdi-account-tie" size="large" start />

            About me
          </v-btn>
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>


<script>



</script>

