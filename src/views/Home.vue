<template>
  
  
  <Vue3Spline style=" width: auto; position: fixed;"
  :scene="{
    url: 'https://prod.spline.design/qtJiAlkWCKctC-RX/scene.splinecode',
  }"
  >
  
  </Vue3Spline>
  <HelloWorld/>
  <VueSocial/>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import VueSocial from '@/components/VueSocial.vue';
</script>
