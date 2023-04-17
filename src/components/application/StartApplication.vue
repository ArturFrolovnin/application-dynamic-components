<template>
    <div class="container-start-application">
        <div class="button-start-aplication">
            <ButtonOpenApplication :functionButtonOpenApplication="openApplication"/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonOpenApplication from '../buttons/ButtonOpenApplication.vue';

export default {
    components: {
        ButtonOpenApplication
    },
    computed:{
        ...mapState(["selectedApplication"])
    },
    methods:{
        ...mapMutations(["setComponetnApplication"]),
        openApplication(){
            this.setComponetnApplication(this.selectedApplication)
        }
    }
}
</script>

<style>
.container-start-application {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.button-start-aplication{
    max-width: 80%;
    max-height: 80%;
}

</style>