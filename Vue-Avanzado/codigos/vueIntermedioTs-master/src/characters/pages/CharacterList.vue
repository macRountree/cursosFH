<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import CardList from '@/characters/components/CardList.vue'
import { useQuery } from '@tanstack/vue-query';
import type { Character, ResponseData } from '../interfaces/character';
import characterStore from '@/store/characters.store'
const props = defineProps<{title:string, visible:boolean}>();

const getCharactersCacheFirst = async(): Promise<Character[]>=>{

    if (characterStore.characters.count > 0){ //retorno lo que esta en el store

        return characterStore.characters.list;

    }
    const {results} = await (await breakingBadApi.get<ResponseData>('/character')).data;

    return results
    // return results.filter(character => ![14,12,19].includes(character.id))
}
// const { isLoading, data} = useQuery(
useQuery( // como el isloadin , y la data lo uso del store, puedo hacer así
    ['characteres'],
    getCharactersCacheFirst,
    {
        onSuccess( results ){
            characterStore.loadedCharacters(results);
        }
        
    }
);


 
</script>
<template>
    <h1 v-if="characterStore.characters.isLoading">Loading...</h1>
    <template v-else>
        <h2>{{ props.title}}</h2>
        <CardList :characters="characterStore.characters.list"/>
    </template>
</template>



<style scoped>

</style>