<template>
    <div class="main-container">
        <div class="flex-container-application"> 
            <div class="application">
                <component :is="StartPageApplication"> </component>
            </div>
            <div class="setting-application">
                <component :is="StartPageApplicationSetting"> </component>
            </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import StartPageApplication from './applications/StartPageApplication.vue';
import StartPageApplicationSetting from './applications/StartPageApplicationSetting.vue';
import MenuSetting from './applications/MenuSetting.vue';
import MenuSettingCustomSelect from './applications/MenuSettingCustomSelect.vue';
import ListRendering from './applications/ListRendering.vue';
import ConditionalRendering from './applications/ConditionalRendering.vue';
import ComponentCreated from './applications/ComponentCreated.vue';
import ComponentComputed from './applications/ComponentComputed.vue';
import ComponentData from './applications/ComponentData.vue';
import ComponentJsonImport from './applications/ComponentJsonImport.vue';
import EventHandling from './applications/EventHandling.vue';
import ComponentMethods from './applications/ComponentMethods.vue';
import ComponentVModel from './applications/ComponentVModel.vue';
import ComponentWatchers from './applications/ComponentWatchers.vue';
import ApplicationToDoList from './applications/ApplicationToDoList.vue';
import ComponentCustomSelect from './ui/custom_select/ComponentCustomSelect.vue';
import TestComponent from '@/test/TestComponent.vue';
   
export default {
    components: {
        StartPageApplication,
        StartPageApplicationSetting,
        MenuSetting,
        MenuSettingCustomSelect,
        ListRendering,
        ConditionalRendering,
        ComponentCreated,
        ComponentComputed,
        ComponentData,
        ComponentJsonImport,
        EventHandling,
        ComponentMethods,
        ComponentVModel,
        ComponentWatchers,
        ApplicationToDoList,
        ComponentCustomSelect,
        TestComponent
    },
    computed: {
        ...mapState(["StartPageApplication", "StartPageApplicationSetting"])
    },
    methods:{
        ...mapActions(['defineLanguageData'])
    },
    created(){
        this.defineLanguageData();
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
    height: 100%;
    width: 100%;
}

.flex-container-application {
    width: 100%;
    height: 100%;
    display: flex;
}

.setting-application {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 550px;
    min-height: 550px;
    height: 100%;
    width: 100%;
    background-color: var(--application-setting-background-color);
    color: var(--application-color);
}

.application {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 550px;
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

@media screen and (max-width: 950px) {
    .flex-container-application{
        flex-direction: column;
    }
    .main-container {
        max-width: 550px;
        height: 100%;
        width: 95%;
    }
    .setting-application {
        min-width: 300px;
    }
    .application {
        min-width: 300px;
    }
}
</style>