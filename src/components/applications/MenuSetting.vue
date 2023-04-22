<template>
    <div class="menu-setting">
        <div class="title-setting-select">
            <h1>настройки приложения </h1>
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете тему приложения</h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="themes" 
                :mutation="setSelectedThemes" 
                :selectedOption="selectedThemes" 
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете приложение</h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="applicationsSelection" 
                :mutation="setSelectedApplication"
                :selectedOption="selectedApplication" 
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете шрифт</h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="fonts" 
                :mutation="setSelectedFont" 
                :selectedOption="selectedFont" 
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете размер шрифта </h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="sizeFonts" 
                :mutation="setSelectedSizeFonts"
                :selectedOption="selectedSizeFonts" 
            />
        </div>
        <div class="button-back-holder">
            <ButtonBack :functionButtonBack="backStartSetting" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ComponentVueSelect from '../ui/vue_select/ComponentVueSelect.vue';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
export default {
    components: {
        ComponentVueSelect,
        ButtonBack,
    },
    computed: {
        ...mapState(['ComponentNames', 'fonts', 'selectedFont', 'sizeFonts', 'selectedSizeFonts', 'applicationsSelection', 'selectedApplication', 'themes', 'selectedThemes'])
    },
    methods: {
        ...mapMutations(['setComponentSetting', 'setSelectedFont', 'setSelectedSizeFonts', 'setSelectedApplication', 'setSelectedThemes']),
        backStartSetting() {
            this.setComponentSetting(this.ComponentNames.componentStartPageApplicationSetting)
        },
    }
}
</script>
<style>
.menu-setting {
    max-width: 500px;
    width: 100%;
    min-height: 500px;
    height: 80%;
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.setting-component {
    height: 80%;
    min-width: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 10px;
}
</style>