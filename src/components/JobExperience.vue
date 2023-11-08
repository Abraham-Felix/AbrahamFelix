<template>
    <v-container class="fill-height">
        <v-responsive class="align-top text-center fill-height">
            <h1>Job Experience</h1>


            <v-card class="bg-transparent mx-auto pa-3 my-12" max-width="574">


                <v-img cover height="330" src="@/assets/jobs/fhm-mockup-900px.png"></v-img>

                <v-card-item>
                    <v-card-title>Fintech Horizons</v-card-title>

                    <v-card-subtitle>
                        <span class="me-1">Fintech Newsletter</span>

                        <v-icon color="blue" icon="mdi-email" size="small"></v-icon>
                    </v-card-subtitle>
                </v-card-item>

                <v-card-text class="text-left">


                    <div class="my-4 text-subtitle-1">
                        Roll: Director Of Design
                    </div>

                    <div>I've had the privilege of starting from scratch and bringing a vision to life.
                        I've coded and
                        designed for a startup, shepherding the project through its entire journey until we successfully
                        launched the product. The experience was nothing short of amazing.</div>

                    <div class="my-4 text-subtitle-1">
                        Years: 5
                    </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-title>Tech used</v-card-title>

                <div class="px-4">
                    <v-chip-group v-model="selection">
                        <v-chip>Ruby on Rails</v-chip>
                        <v-chip>Vue.js</v-chip>
                        <v-chip>Html</v-chip>
                        <v-chip>Css</v-chip>
                        <v-chip>Javascript</v-chip>
                    </v-chip-group>
                </div>

            </v-card>


        </v-responsive>
    </v-container>
</template>
  
<script setup>
//
</script>