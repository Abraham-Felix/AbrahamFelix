<template>
  <Vue3Spline  style="z-index:-1 ; width: auto; position: fixed;"
  :scene="{
    url: 'https://prod.spline.design/qtJiAlkWCKctC-RX/scene.splinecode',
  }"
  >
  
  </Vue3Spline>
  <v-container class="pa-0 ">
    <v-responsive class="align-center text-center ">
      <h1 class="text-h2 py-10">{{ $t('welcometxt') }}</h1>

  
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
    {{ $t('welcomechip1') }}
  </v-chip>
  <v-chip
    class="ma-2"
    color="tertiary"
    text-color="white"
    append-icon="mdi-language-css3"
  >
  {{ $t('welcomechip2') }}
  </v-chip>
  <v-chip
  class="ma-2"
  color="primary"
  text-color="white"
  append-icon="mdi-language-html5"
>
{{ $t('welcomechip3') }}
</v-chip>
  </div>
       <v-row class="d-flex text-left justify-center">

        <v-col cols="8">
          <p class=" pt-10 text-body-2 font-weight-lighs mb-n1">
            {{ $t('welcomep1') }} 
            <v-spacer class="my-3" />
            {{ $t('welcomep2') }}
            <v-spacer class="my-3" />
            {{  $t('welcomep3')  }}  
          </p>
        </v-col>

      </v-row>
      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">


        <v-col cols="auto">
          <v-btn rounded="lg" to="/about" min-width="228" rel="noopener noreferrer" size="x-large"  variant="outlined">
            <v-icon icon="mdi-account-tie" size="large" start />
            {{ $t('aboutmebtn') }}
          </v-btn>
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>


<script>



</script>

