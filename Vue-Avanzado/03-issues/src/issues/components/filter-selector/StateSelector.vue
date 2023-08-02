<script setup lang="ts">
import { useIssuesStore } from 'src/stores/issues';

const issueStore = useIssuesStore();
</script>

<template>
  <q-btn-toggle
    push
    spread
    toggle-color="positive"
    v-model="issueStore.state"
    :options="[
      { label: 'All', value: '' },
      { label: 'Open', value: 'open' },
      { label: 'Closed', value: 'closed' },
    ]"
  />
</template>

<style scoped></style>
