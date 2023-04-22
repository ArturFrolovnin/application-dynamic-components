<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1> приложение с использованием V-model  </h1> 12
        </div>
        <div class="text-input">
            <input type="text"  v-model="textMessage">
            <p>input text: {{ textMessage }} </p>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
export default {
    data() {
        return {
            textMessage: ""
        }
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames'])
    },
    methods: {
        ...mapMutations(['setComponentApplication']),
        exitTheApplication() {
            this.setComponentApplication(this.ComponentNames.componentStartPageApplication)
        }
    }
}
</script>
<style>
    .text-input{
        max-width: 170px;
        max-height: 200px;
        height: 100%;
        overflow-y: auto;
        word-break: break-all;
    }
</style>