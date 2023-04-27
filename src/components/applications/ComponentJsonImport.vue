<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1>{{ language['Application using json import'] }}</h1> 
        </div>
        <div>
            {{theme}}
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
import themes from '../../data/themes/themes.json'
export default {
    data() {
        return {
            theme:themes.defaultTheme,
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
        }
    }
}
</script>
<style></style>