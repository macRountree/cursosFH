import breakingBadApi from "@/api/breakingBadApi";
import type { Character, ResponseData } from "@/characters/interfaces/character"
import { reactive } from "vue";

interface Store{
    characters: {
        list: Character[],
        count:number,
        isLoading: boolean,
        hasError: boolean,
        errorMessage: string | null
    },

    //Metodos 
    startLoadingCharacters:() => void;
    loadedCharacters: (data:Character[])=>void;
    loadCharactersFailed: (error:string)=>void;
}

const characterStore = reactive<Store>({
    characters:{
        count:0,
        errorMessage: null,
        hasError:false,
        isLoading: true,
        list:[]
    },
    async startLoadingCharacters() {
        // console.log('startLoadingCharacters::: ');
        const {results} = await (await breakingBadApi.get<ResponseData>('/character')).data;
        this.loadedCharacters(results)

    },
    loadedCharacters(data: Character[]){
        // this.characters.count = data.length
        const characters =  data.filter(character => ![14,12,19].includes(character.id))
        this.characters ={
            count: data.length,
            errorMessage: null,
            hasError:false,
            isLoading:false,
            list:data,
        }

    },
    loadCharactersFailed(error:string){

    }
});

characterStore.startLoadingCharacters()
export default characterStore;