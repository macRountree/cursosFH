import breakingBadApi from '@/api/breakingBadApi'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import type { Character, ResponseData } from '../interfaces/character'

const characters = ref<Character[]>([])
const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>();

export const useCharacters = () =>{
    onMounted(async () => {
        await loadCharacters();
    })
    const loadCharacters = async() =>{
        
        if( characters.value.length > 0 ) return
       
        isLoading.value = true

        try{

            const {results} = await (await breakingBadApi.get<ResponseData>('/character')).data;
            characters.value =  results;
            isLoading.value = false;

        }catch (error){
            hasError.value = true;
            
            if(axios.isAxiosError(error)){
                return errorMessage.value = error.message
            }
            errorMessage.value = JSON.stringify(error)
        }
    
    }


    return {
        characters,
        isLoading,
        loadCharacters,
        hasError,
        errorMessage
    }
}