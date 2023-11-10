<template>
          
            <v-timeline line-color="white"  align="center" class="text-center">
              <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :dot-color="year.color"
                size="small"
              >
                <template v-slot:opposite>
                  <div
                    :class="`pt-1 headline font-weight-bold text-${year.color}`"
                    v-text="year.year"
                  ></div>
                </template>
                <div>
                  <h2 v-text="year.cert" :class="`mt-n1 text-h5 headline font-weight-light mb-4 text-${year.color}`">
                    
                  </h2>
                  <div>
                    <v-icon icon="mdi-certificate"></v-icon> Certified
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
        </template>
  

        

  
        <script>
        export default {
          data: () => ({
            years: [
              {
                color: 'cyan',
                year: '2023',
                cert: 'Agile UX Design and Research'
              },
              {
                color: 'green',
                year: '2023',
                cert: 'Vue'
              },
              {
                color: 'pink',
                year: '2023',
                cert: 'Project Leadership'
              },
              {
                color: 'amber',
                year: '2023',
                cert: 'Nuxt 3'
              },
              {
                color: 'orange',
                year: '2021',
                cert: 'JAVASCRIPT ES6+'
              },
              {
                color: 'red',
                year: '2019',
                cert: 'Visaul Elements of UI'
              },
              {
                color: 'blue',
                year: '2018',
                cert: 'HTML5 & CSS3'
              },
              {
                color: 'cyan',
                year: '2018',
                cert: 'IT'
              },
              {
                color: 'green',
                year: '2017',
                cert: 'Digital Marketing'
              },
            ],
          }),
        }
      </script>