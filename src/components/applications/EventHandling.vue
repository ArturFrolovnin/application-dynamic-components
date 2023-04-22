<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1>приложение с использованием Events</h1>
        </div>
        <div>
            <button @click="helloAlert"> hello</button>
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
          hello: "hello"
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
        helloAlert(){
            alert(this.hello)
        }
    }
}
</script>
<style></style>