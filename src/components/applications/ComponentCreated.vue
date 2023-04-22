<template>
    <div class="filed-application">
        <div class="title-application">
            <h1> приложение с использованием Created </h1> 
        </div>
        <div>
           <h3> {{ currentComponent }}</h3>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue'
export default {
    data() {
        return {
            currentComponent: "Component"
        }
    },
    created() {
     this.currentComponent = "created new Component"
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
<style></style>