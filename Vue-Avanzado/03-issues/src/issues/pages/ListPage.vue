<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueList from '../components/issue-list/IssueList.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';

// import IssueList from '../components/issue-list/IssueList.vue';
</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12"><span class="text-h4">GIthub issue</span></div>
  </div>

  <div class="row">
    <div class="co-xs-12 col-md-4">
      <!-- ? FILTROS -->
      <!-- FILTER SELECTOR -->

      <FilterSelector />
    </div>

    <div class="col-xs-12 col-md-8">
      <!-- ?LOADER -->

      <LoaderSpinner />

      <!-- ?ISSUE LIST-- ARRAY ISSUE CARD -->

      <!-- <IssueList /> -->

      <!-- RECIBE LA LisTA DE ISSUES -->
      <IssueList />
    </div>
  </div>
</template>

<style scoped></style>
