<template>
    <div class="filed-application">
        <div class="title-application">
            <h1>{{language['Application using v-for']}}</h1>
        </div>
        <div class="drawing-lists" 
            v-for="(listOfElement) in listOfElements" :key="listOfElement.id"
        >
            <h3> {{ listOfElement.title }}</h3>
            <h3> id: {{ listOfElement.id }}</h3>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
import ListElements from '../../data/application/ListElements.json';
export default {
    data() {
        return{
            listOfElements:ListElements
        }
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames','languageData','componentLanguage']),
        language() { 
            return this.languageData[this.componentLanguage.APPLICATIONS] || {}
        }
    },
    methods: {
        ...mapMutations(['setComponentApplication']),
        exitTheApplication() {
            this.setComponentApplication(this.ComponentNames.componentStartPageApplication)
        },
    }
}
</script>
<style></style>