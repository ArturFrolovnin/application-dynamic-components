<template>
    <div class="filed-application">
        <div class="title-application" >
            <h1> приложение с использованием Data </h1> 
        </div>
        <div>
            {{ data }}
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
            data: "data"
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