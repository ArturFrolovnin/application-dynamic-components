<template>
    <div class="filed-aplication">
        <div class="title-application" >
            <h1> приложение с использованием v-show</h1> 3
        </div>
        <div class="element-visibility">
            <p v-show="visibility"> Element </p>
            <button @click="visibility = !visibility">{{ visibility ? 'Скрыть Element' : 'Показать Element' }}</button>
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
            visibility: true
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
.element-visibility{
    text-align: center;
}
.element-visibility button{
    margin: 10px;
}
</style>