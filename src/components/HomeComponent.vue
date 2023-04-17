<template>
    <div class="main-container">
        <div class="application">
            <component :is="StartApplication"></component>
        </div>
        <div class="setting-application">
            <component :is="SettingsApplication"></component>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import StartApplication from './application/StartApplication.vue';
import ApplicationForm from './application/applications/ApplicationForm.vue';
import ApplicationTwo from './application/applications/ApplicationTwo.vue';
import ApplicationThree from './application/applications/ApplicationThree.vue';
import ApplicationFour from './application/applications/ApplicationFour.vue';
import ApplicationFive from './application/applications/ApplicationFive.vue'
import ApplicationSix from './application/applications/ApplicationSix.vue';
import ApplicationSeven from './application/applications/ApplicationSeven.vue';
import ApplicationEight from './application/applications/ApplicationEight.vue';
import ApplicationNine from './application/applications/ApplicationNine.vue';
import ApplicationTen from './application/applications/ApplicationTen.vue';
import ApplicationEleven from './application/applications/ApplicationEleven.vue';
import ApplicationTwelve from './application/applications/ApplicationTwelve.vue';
import ApplicationThirteen from './application/applications/ApplicationThirteen.vue';
import SettingsApplication from './setting/SettingsApplication.vue';
import MenuSetting from './setting/menu_setting/MenuSetting.vue'

export default {
    components: {
        StartApplication,
        SettingsApplication,
        ApplicationForm,
        ApplicationTwo,
        ApplicationThree,
        ApplicationFour,
        ApplicationFive,
        ApplicationSix,
        ApplicationSeven,
        ApplicationEight,
        ApplicationNine,
        ApplicationTen,
        ApplicationEleven,
        ApplicationTwelve,
        ApplicationThirteen,
        MenuSetting
    },
    computed: {
        ...mapState(['StartApplication', "SettingsApplication"])
    }
}
</script>
<style>

.main-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1100px;
    max-height: 600px;
    height: 80%;
    width: 80%;

    border: solid 2px black;
   
}

.setting-application {
    max-width: 550px;
    max-height: 600px;
    min-height: 300px;
    height: 100%;
    width: 100%;
    background-color: var(--application-setting-background-color);
    color: var(--application-color);
}

.application {
    max-width: 550px;
    max-height: 600px;
    min-height: 300px;
    height: 100%;
    width: 100%;
    background-color: var(--application-background-color);
    color: var(--application-setting-color);
}

.setting-application:hover {
    outline: solid 2px var(--application-setting-hover-outline);
    z-index: 15;
}

.application:hover {
    outline: 2px solid var(--application-hover-outline);
    z-index: 15;
}

@media screen and (max-width: 850px) {
    .main-container {
        flex-direction: column;
        max-width: 550px;
        height: 100%;

    }
}
</style>
  