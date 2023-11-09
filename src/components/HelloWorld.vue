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
        image="https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4"
        size="200">
      </v-avatar>
      <h3 class=" pt-10 font-weight-bold mb-n1">Abraham's Portfolio</h3>
      <v-row class="d-flex text-left justify-center">

        <v-col cols="8">
          <p class=" pt-10 text-body-2 font-weight-lighs mb-n1">
            👋 Hello, I'm Abraham Felix. Just a software developer dedicated in User Centric Design known as
            UX since 2018.
            <v-spacer class="my-3" />
            👨‍🚀 I like creating 2d and 3d art using a pen or tools like Figma, CorelDraw, Splice and coding using Vue.js front-end
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


<script>



</script>

