<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1>приложение с использованием Methods</h1> 
        </div>
       <div>
         <h3>  counter: {{ counter }}</h3>
            <button @click="increment">add +1</button>
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
            counter: 0
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
        },
        increment(){
            this.counter++
        }
    }
}
</script>
<style></style>