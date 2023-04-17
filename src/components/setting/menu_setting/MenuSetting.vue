<template>
    <div class="menu-setting">
        <div class="title-setting-select">
            <h1>настройки приложения </h1>
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете тему приложения</h2>
            </div>
            <ComponentSelection 
                :selectOptions="themes"
                :mutation="setSelectedThemes" 
                :selectedOption="selectedThemes"
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете приложение</h2>
            </div>
            <ComponentSelection 
                :selectOptions="ApplicationSelection"
                :mutation="setSelectedApplication" 
                :selectedOption="selectedApplication"
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете шрифт</h2>
            </div>
            <ComponentSelection 
                :selectOptions="fonts"
                :mutation="setSelectedFont" 
                :selectedOption="selectedFont"
            />
        </div>
    
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> Выберете размер шрифта </h2>
            </div>
            <ComponentSelection 
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
import ButtonBack from '@/components/buttons/ButtonBack.vue';
import ComponentSelection from './selection_parameters/ComponentSelection.vue';


export default {
    components: {
        ComponentSelection,
        ButtonBack,
    },
    computed: {
        ...mapState(['ComponentNames', 'fonts', 'selectedFont', 'sizeFonts', 'selectedSizeFonts', 'ApplicationSelection', 'selectedApplication', 'themes', 'selectedThemes' ])
    },
    methods: {
        ...mapMutations(['setComponetnSetting', 'setSelectedFont', 'setSelectedSizeFonts', 'setSelectedApplication', 'setSelectedThemes' ]),
        backStartSetting() {
            this.setComponetnSetting(this.ComponentNames.ComponentSettingsApplication)
        },
    }
}
</script>
<style>
.menu-setting {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.title-setting-select {
    margin: 10px;
}

.setting-component {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 10px;
}
.title-setting-component{
    margin: 5px;
}

</style>