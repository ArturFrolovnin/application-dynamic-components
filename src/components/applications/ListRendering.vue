<template>
    <div class="filed-application">
        <div class="title-application">
            <h1>приложение с использованием v-for</h1>
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
            listOfElements:ListElements.listElements
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
<style></style>