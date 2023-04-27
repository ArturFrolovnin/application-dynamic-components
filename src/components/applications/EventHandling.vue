<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1>{{ language['An application using Events'] }}</h1>
        </div>
        <div>
            <button @click="helloAlert"> {{ language['hello'] }}</button>
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
          hello: 'hello'
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
        helloAlert(){
            alert(this.hello)
        }
    }
}
</script>
<style></style>