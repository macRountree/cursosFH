<script setup lang="ts">
import { RouterView } from 'vue-router';
import { routeLink } from './router/link-routes';

import NavBar from './shared/components/NavBar.vue';



</script>
<template>
 <div class="wrapper">
  <header>
    <!-- nav-bar -->
    <NavBar 
      title="BreakingBad"
      :links="routeLink"
      />
  </header>
  <main>
  <RouterView 
  
  />
  </main>
 </div>
</template>

<style scoped>
.wrapper{
  display:flex;
  flex-direction: column;
} 
</style>
