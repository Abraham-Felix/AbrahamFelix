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
  
      <v-divider color="tertiary" thickness="5" />
    
      <v-virtual-scroll :items="items"  height="620">
      <v-list-item class="mt-5" >

          <div>
            <p class="mb-3">
          👋 Hello, I'm Abraham Felix. Just a software developer dedicated in User user-centric design known as UX since 2018. 
            </p>
            <p class="mb-3">
          📐 I like creating 2D and 3D art using a pen or tools like Figma, CorelDraw, Spline, and coding using Vue.js front-end technologies along with popular design frameworks such as Vuetify.
            </p>
          <v-divider color="secondary" thickness="5" class="my-3" />
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
        <v-divider color="fiftiary" thickness="5" class="my-3" />
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
         <v-divider color="quartary" thickness="5" class="my-3" />
          <p class="my-3">
            IQ :
          </p>
          <div>I was diagnosed with High IQ, also known as Super Gifted, in kindergarten, along with ADHD. 🧠🌈
            <br>
            I learned to speak English and Spanish when I was 4 years old. The principal of my school in Avondale noticed my natural abilities to learn and solve problems, so they tested me.
            <br>
            Things didn't go as I thought they would. After a while, my mom was happy about it, and everything was normal until the school started using me in 1st grade to teach 6th-grade students. Things went left in a bad way because people started to look at me as if I was weird or abnormal. It really hurt my feelings how people would treat me differently, and I started to hide my thoughts from society. It was not easy because I felt like I had to talk about unreasonable and illogical things all the time to be accepted in this world as a normal person.
            <br>
            Then when I was in high school, the same story happened. I told my mom I didn't want anyone to know about my IQ and my power of reasoning because I was frightened. I didn't want to become a lab rat or be used to do evil things, because for the most part, from what I knew, people with money are normally bad humans.
            <br>
            So to keep my integrity, I made these decisions. Every job that I have ends the same way. The last words I hear are, "We believe that we are holding you down, and you have a brighter future," and they let me go.
            My situation in life has been repeating over and over, and I want to stop that. I am still scared, but I have to risk a little bit because my economic situation is not good. I want to do something different this time.
            <br>
            I will expose who I am from the start because I want to find the right place for me. I want to work somewhere where I can help the world and humans in a positive way. I am also committed to working for a company for the long term as long as we share the same culture or values.
            <br>
            I don't usually say this, but I think I am more mature today to analyze a positive outcome from a culture that really is real from the heart in making a positive impact on the world.
            <br>
            So if you happen to be that culture, please reach out to me. I believe in God and I believe in good people, but I am also aware of the opposite.
            My situation has pushed me to risk a little bit about what I keep safe, but I need to sacrifice for the benefit of the ones that are behind me, the ones I love the most—my family. I want to help them out, and by keeping my integrity, I feel it is a little bit selfish.
            <br>
            Reach out to me, and I am willing to listen. I normally work in Software Development or Art, such as Music and Design because it stimulates my brain and fulfills its needs.
            <br>
            Sincerely,
            Abraham Felix
            </div>
            <p class="my-3">
              Personality:
            </p>    
          <v-img src="@/assets/personality/psychometric.png"/>
          <v-divider color="primary" thickness="5" class="my-3" />
          <p class="my-3">
            CV :
          </p>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-01.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-02.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-03.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-04.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-05.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-06.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-07.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-08.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-09.png"/>
          <v-img src="@/assets/personality/Resume-Abraham--Felix-10.png"/>
          
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