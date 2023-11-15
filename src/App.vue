<template>
 
  
  <router-view />
  <div  class="locale-changer">
    <select  v-model="$i18n.locale">
      <option   v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
  <!-- <h1 class="pb-10">{{ $t('message')}}</h1> -->
</template>

<script setup>

</script>