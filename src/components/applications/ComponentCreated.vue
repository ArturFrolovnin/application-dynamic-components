<template>
    <div class="filed-application">
        <div class="title-application">
            <h1>{{ language['Application using Created'] }}</h1> 
        </div>
        <div>
           <h3> {{ language[currentComponent] }}</h3>
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
     this.currentComponent = 'Created new Component'
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames', 'languageData', 'componentLanguage']),
        language() { 
            return this.languageData[this.componentLanguage.APPLICATIONS] || {}
        }  
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