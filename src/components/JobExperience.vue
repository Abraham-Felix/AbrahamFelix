<template>
  
      
    
    <v-container>
        <v-responsive class="align-top text-center fill-height">
     
          <v-carousel
          hide-delimiter-background
          show-arrows="hover"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
         
            <v-sheet
              height="100%"
              color="transparent"
            >
              <div class="d-flex fill-height justify-center align-center">
                <div>
                    <v-card class="bg-transparent mx-auto pa-3 " max-width="574">
                       
                       

                    <v-card-item>
                    <v-card-title>{{ slide.company }}</v-card-title>
                    <v-card-subtitle>
                        <span class="me-1">
                            {{ slide.service }}
                        </span>
                        <v-icon color="blue" :icon="slide.icon" size="small"></v-icon>
                    
                    </v-card-subtitle>    
                </v-card-item>
                <v-card-title class="text-subtitle-1 text-left">{{ slide.position }}</v-card-title>
                <v-card-text class="text-left">{{ slide.description }}</v-card-text>    
                <v-divider color="primary" thickness="5" class="mx-4 mb-1"></v-divider>
                <v-card-title class="text-subtitle-1 text-left">Tech used:</v-card-title>
                <v-chip-group >
                   <v-chip :text="slide.tech" ></v-chip>
                </v-chip-group>
            </v-card>
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        </v-responsive>
    </v-container>
</template>
  
<script>
  export default {
    data () {
        
      return {
        slides: [
            { 
                company: 'Fintech Horizons', 
                service: 'Fintech Newsletter SAS', 
                icon: 'mdi-email', 
                position: "Position: Director of Design",
                description: "I've had the privilege of starting from scratch and bringing a vision to life. I've coded and designed for the startup, shepherding the project through its entire journey until we successfully launched the product. The experience was nothing short of amazing working as a team with Back-End Engineer using Agile methodologies.", 
                tech: "Ruby on Rails, Nuxt 3, Vue, ionic, Html, Css, Javacript", 
                src:"fhm-mockup-900px"
            },
            { 
                company: 'Laguna Shores Resorts', 
                service: 'Real Estate & Timeshare Company', 
                icon: 'mdi-office-building', 
                position: "Position: IT & Webdesign",
                description: "Collaborating with Director Wayne Corcoran on diverse responsibilities, including marketing initiatives, systems and data management, web development, and networking. Additionally, adeptly coordinating meetings with stakeholders, Sales Managers, Call Center supervisors, and Project Director Michael Klient.", 
                tech: "Adobe Catalyst, MS Access, MS Excel, Html, Css, Javacript", 
                src:"fhm-mockup-900px"
            },
            { 
                company: 'Vuetify', 
                service: 'UI framework', 
                icon: 'mdi-translate-variant', 
                position: "Contribuator to translating docs",
                description: "Contributing to Vuetify Framework translating documentation from English to Spanish-México language.", 
                tech: "crowdin, github", 
                src:"fhm-mockup-900px"
            },
            { 
                company: 'Secure Disruptions', 
                service: 'Freelance', 
                icon: 'mdi-email', 
                position: "Position: UX/UI + Front-End Developer",
                description: "In this project, I am spearheading the design of the Minimum Viable Product (MVP), incorporating Google API for seamless integration with Sheets data to generate visually compelling reports for investors. The process involves developing the MVP from scratch, ensuring a solid foundation for functionality and user experience. Following development, the next step is deploying the site, making it accessible and operational. Additionally, I am actively engaged in establishing a seamless connectivity bridge between Vue.js and WordPress, ensuring a cohesive and integrated web environment. This comprehensive approach aims to deliver a robust and interconnected platform that not only meets but exceeds the project's objectives",
                tech: "Vue, Html, Css, Javacript, Google API, Firebase", 
                src:"fhm-mockup-900px"
            },
            { 
                company: 'AMPI', 
                service: 'Real Estate Asociation', 
                icon: 'mdi-email', 
                position: "Web Design",
                description: "Continuously editing and redesigning the website for a real estate agency based in Ensenada, B.C., Mexico. This company specializes in the rental of houses, ranches, and apartments both within the city and its outskirts.",
                tech: "Html, Css, Javacript, Dreamweaver", 
                src:"fhm-mockup-900px",
            },
            ],
        
      }
      
    }

  }
</script>