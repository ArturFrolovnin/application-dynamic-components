<template>
    <div class="filed-aplication">
        <div class="title-application" >
            <h1> приложение с использованием Watch  </h1> 13
        </div>
       
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" /> 
        </div>
    </div>
</template>
<script>
import ButtonBack from '@/components/buttons/ButtonBack.vue';

import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
         
        }
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames'])
    },
    methods: {
        ...mapMutations(['setComponetnApplication']),
        exitTheApplication() {
            this.setComponetnApplication(this.ComponentNames.componentStartApplication)
        }

    }
}
</script>
<style scoped>

</style>