<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1>{{ language['Application using Methods'] }}</h1> 
        </div>
       <div>
         <h3>  {{language['counter']}}: {{ counter }}</h3>
            <button @click="increment"> {{ language['increment'] }}</button>
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
        ...mapState(['ComponentNames', 'languageData', 'componentLanguage']),
        language() { 
            return this.languageData[this.componentLanguage.APPLICATIONS] || {}
        }, 
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