<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';

/* const props = defineProps({
    title:{
        type: String,
        required:true
    }
}) */
interface Props{
    title?:string;
    links?: RouterLink[];
    showIcon?: boolean;
}
const props = withDefaults(defineProps<Props>(),{
    showIcon: true,
    links: () =>[]
}) ;
// const props = defineProps<{title?: string}>();
</script>
<template>
    <nav>
        <img v-if="props.showIcon" src="@/assets/logo.svg" alt="Vue logo" height="25" width="25">
        <span v-if="props.title">{{ props.title }}</span>

        <!-- <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink> -->
        <RouterLink   v-for="link of props.links"
            :key="link.path"
            :to="link.path"
        >
        {{ link.title }}
        </RouterLink>
    </nav>
</template>

<style scoped>
    nav{
        width:100%;
        font-size: 12px;
        text-align: center;
        margin-top: 10px;
        display: flex;
        align-items: flex-start;
    }
    img{
        margin-right: 5px;
    }
    span{
        margin-right: 10px;
    }
    a{
        margin-right: 10px;
    }
</style>