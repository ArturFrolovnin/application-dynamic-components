<template>
    <div class="filed-aplication">
        <div class="title-application">
            <h1> приложение 2</h1>
        </div>
        <div class="button-back">
            <ButtonBack  :functionButtonBack="exitTheApplication"/>
        </div>
    </div>
</template>
<script>
import ButtonBack from '@/components/buttons/ButtonBack.vue';

import { mapMutations, mapState } from 'vuex';
export default {
    components: {
        ButtonBack
    },
    computed:{
        ...mapState(['ComponentNames'])
    },
    methods:{
        ...mapMutations(['setComponetnApplication']),
        exitTheApplication(){
            this.setComponetnApplication(this.ComponentNames.componentStartApplication)
        }

    }
}
</script>
<style scoped>
.filed-aplication{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
}
</style>