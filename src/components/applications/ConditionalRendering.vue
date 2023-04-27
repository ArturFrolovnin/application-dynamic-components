<template>
    <div class="filed-application">
        <div class="title-application">
            <h1>{{ language['Application using v-if'] }}</h1> 
        </div>
        <div class="element-visibility" >
            <p v-if="visibility"> Element </p>
            <button @click="toggleButton()">
                {{ visibility ? language['Delete Element']: language['Add Element']}}
            </button>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication"/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
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
        ...mapState(['ComponentNames', 'languageData', 'componentLanguage']),
        language() { 
            return this.languageData[this.componentLanguage.APPLICATIONS] || {}
        }
    },
    methods: {
        ...mapMutations(['setComponentApplication']),
        toggleButton(){
            this.visibility = !this.visibility
        },
        exitTheApplication() {
            this.setComponentApplication(this.ComponentNames.componentStartPageApplication)
        },        
    }
}
</script>
<style scoped>
.element-visibility {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.element-visibility button{
    margin: 10px;
}
</style>