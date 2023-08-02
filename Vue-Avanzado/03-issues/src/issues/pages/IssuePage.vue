<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssueCard from '../components/issue-list/IssueCard.vue';

const router = useRoute();

const { id = '' } = router.params;

// console.log(router.params);
</script>

<template>
  <LoaderSpinner color="white" />
  <router-link class="text-white" to="/"> Go bakc </router-link>

  <!-- HEADER -->
  <IssueCard />

  <!-- Comentarios -->

  <LoaderSpinner :thickness="0.2" size="1.5rem" :show-text="false" />

  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>

    <IssueCard v-for="comment of 4" :key="comment" />
  </div>
</template>

<style scoped></style>
