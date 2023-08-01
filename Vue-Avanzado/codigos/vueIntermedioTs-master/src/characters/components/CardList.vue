<script setup lang="ts">
import CharacterCard from '../components/CharacterCard.vue'
import type { Character } from '../interfaces/character';
// import { ref } from 'vue'
// import breakingBadApi from '@/api/breakingBadApi';
// import type{ ResponseData, Character } from '@/characters/interfaces/character'
// import { useCharacters } from '@/characters/composables/useCharacters';
// import { useQuery } from '@tanstack/vue-query';

interface Props{
    characters: Character[],
}
const props = defineProps<Props>()

//! Composable Functions
// const { characters, isLoading, hasError, errorMessage} = useCharacters();


/* const getCharactersSlow = async():Promise<Character[]> =>{

    return new Promise((resolve)=>{
        setTimeout(async () => {
            
            const {results} = await (await breakingBadApi.get<ResponseData>('/character')).data;
            console.log('results::: ', results);
            resolve (results.filter(character => ![14,12,19].includes(character.id)))
        }, 1);
    })
   
}

const { isLoading, isError, data:characters, error} = useQuery(
    ['characters'],
    getCharactersSlow,
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect:'always' 
    }
) */
</script>
<template>
   <!-- <h1 v-if="isLoading">Loading...</h1> -->
    <div class="card-list">
        <CharacterCard 
            v-for="character of props.characters"
            :key="character.id"
            :character="character"
        />
    
      
    </div>
  
</template>


<style scoped>
.card-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>