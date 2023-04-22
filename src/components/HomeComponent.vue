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
import { mapState } from 'vuex';
import StartPageApplication from './applications/StartPageApplication.vue';
import StartPageApplicationSetting from './applications/StartPageApplicationSetting.vue';
import MenuSetting from './applications/MenuSetting.vue';
import List_Rendering from './applications/ListRendering.vue';
import Conditional_Rendering from './applications/ConditionalRendering.vue';
import Created from './applications/ComponentCreated.vue';
import Computed from './applications/ComponentComputed.vue';
import Data from './applications/ComponentData.vue';
import Json_Import from './applications/ComponentJsonImport.vue';
import Event_Handling from './applications/EventHandling.vue';
import Methods from './applications/ComponentMethods.vue';
import V_Model from './applications/ComponentVModel.vue';
import Watchers from './applications/ComponentWatchers.vue';
import To_Do_List from './applications/ApplicationToDoList.vue';
import Custom_Select from './ui/custom_select/ComponentCustomSelect.vue';
   
export default {
    components: {
        StartPageApplication,
        StartPageApplicationSetting,
        MenuSetting,
        List_Rendering,
        Conditional_Rendering,
        Created,
        Computed,
        Data,
        Json_Import,
        Event_Handling,
        Methods,
        V_Model,
        Watchers,
        To_Do_List,
        Custom_Select
    },
    computed: {
        ...mapState(["StartPageApplication", "StartPageApplicationSetting"])
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