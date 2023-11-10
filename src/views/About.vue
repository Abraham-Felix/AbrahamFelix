<template>
    <v-container class="fill-height">
        <v-responsive class="align-top text-center fill-height">
            <h1>About me</h1>
    <v-card
      
      class="mx-auto bg-transparent text-left mt-7"
      max-width="900"
    >
    
      <v-card-title >
        🍕 Let's learn about myself 
      </v-card-title>
  
      <v-divider/>
    
      <v-virtual-scroll :items="items"  height="620">
      <v-list-item class="mt-5" >

          <div>
            <p class="mb-3">
          👋 Hello, I'm Abraham Felix. Just a software developer dedicated in User user-centric design known as UX since 2018. 
            </p>
            <p class="mb-3">
          📐 I like creating 2D and 3D art using a pen or tools like Figma, CorelDraw, Spline, and coding using Vue.js front-end technologies along with popular design frameworks such as Vuetify.
            </p>
          <v-divider class="my-3" />
          <p class="mb-3">
           🌌 My journey started as a young fellow, isolated in thought.  
        </p>
        <p class="mb-3">
            Inspired by Art, I took a step into creativity. My economic situation was as bad as it could get, so I started to work at a very young age editing websites. I remember my first job in design was at a Real estate company in 2014, and that was when I found a passion for creating things that have a positive impact. 
        </p>
            <p class="mb-3"> 
                I realized that by manipulating code, I could obtain beneficial results, and people were willing to pay me for it, but also it provided me an internal benefit which is mind relaxation as a benefit of helping others achieve their goals and a solution from the economic and emotional problems I have in life. Art was not just an escape, it taught me more about myself and others.
            </p>
          <p class="mb-3">
            After working for a couple of years with real estate companies helping them to improve their websites, I got invited to work as a Director of Design in 2018, at a startup company named Fintech Horizons, It was an amazing experience! I felt like nitro was injected into my dreams, and I got the opportunity to craft ideas into real-life products.
        </p>    
        <p class="mb-3">
            From there it has been a journey of continuous growth and creative exploration. A commitment to myself to staying at the forefront of digital design and UX industry trends. I believe in Art and the power that it has to help others, and the proof is me. A great design is not just about 🌈 aesthetics; it's about creating solutions that enhance the way we live, work, and connect with the world 👨‍💻.
        </p>   
        <v-divider class="my-3" />
        <p class="mb-3">
            Hobbies :
        </p>  
        <li>
            📲 | Fixing Smartphones
        </li>
        <li>
          🌎 | Researching the Internet
        </li>
        <li>
           👨‍👩‍👧‍👦| Go for walks with my family
        </li>
        <li>
           🎥 | Making video tutorials
        </li>
        <li>
            🧱 | DIY projects
        </li>
        <li>
            🎮 | Making video games
        </li>
        <li>
            🎧 | Listening or making music
        </li>
  </div>
  <v-divider class="my-3" />
          <p class="my-3">
            Psychometric :
                    </p>
                    <v-img src="@/assets/personality/psychometric.png"/>
          
          </v-list-item>
        </v-virtual-scroll>
    </v-card>
    </v-responsive>
    </v-container>
  </template>
  <script>
  export default {
    data: () => ({
      items: [
        ''
      ]
    }),
  }
</script>