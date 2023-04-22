<template>
    <div class="container-settings-application">
        <div class="button-setting">
            <ButtonOpenSetting :functionButtonOpenSetting="openSetting"/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonOpenSetting from '../ui/buttons/ButtonOpenSetting.vue';
export default {
    components: {
        ButtonOpenSetting
    },
    computed:{
        ...mapState(["MenuSetting"])
    },
    methods:{
        ...mapMutations(["setComponentSetting"]),
        openSetting(){
            this.setComponentSetting(this.MenuSetting)
        }
    }
}
</script>
<style>
.container-settings-application {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-setting {
    max-width: 50%;
    max-height: 50%;
}
</style>