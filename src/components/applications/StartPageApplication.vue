<template>
    <div class="container-start-application">
        <div class="button-start-application">
            <ButtonOpenApplication :functionButtonOpenApplication="openApplication"/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonOpenApplication from "./../ui/buttons/ButtonOpenApplication.vue";

export default {
    components: {
        ButtonOpenApplication
    },
    computed:{
        ...mapState(["selectedApplication"])
    },
    methods:{
        ...mapMutations(["setComponentApplication"]),
        openApplication(){
            this.setComponentApplication(this.selectedApplication)
        }
    }
}
</script>

<style>
.title-application {
    text-align: center;
    font-size: 1em;
    max-width: 400px;
    width: 90%;
}

.filed-application {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
}

.container-start-application {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-start-application{
    max-width: 80%;
    max-height: 80%;
}
</style>