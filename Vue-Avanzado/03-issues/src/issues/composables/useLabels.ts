import { useQuery } from '@tanstack/vue-query';
import { githubapi } from 'src/api/githubApi';
import { Label } from '../interfaces/label';
import { useIssuesStore } from 'src/stores/issues';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubapi<Label[]>('/labels?per_page=100');

  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();
  // const { label } = storeToRefs(issuesStore);

  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
  });
  return {
    labelsQuery,
    //getters
    selectedLabel: computed(() => issuesStore.label),
    //metods
    toggleLabel: issuesStore.toggleLavel,
  };
};

export default useLabels;
