import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useIssuesStore = defineStore('issues', () => {
  //   const count = ref<number>(0);

  const state = ref(''); //all
  const label = ref<string[]>([]);

  return {
    //stateProperties
    state,
    label,
    //getter
    //actions

    toggleLavel(labelName: string) {
      if (label.value.includes(labelName)) {
        label.value = label.value.filter((label) => label !== labelName);
        return;
      }
      // throw new Error('Falta implementar');
      label.value.push(labelName);
    },
  };
});

/*
 */
