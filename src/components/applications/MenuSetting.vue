<template>
    <div class="menu-setting">
        <div class="title-setting-select">
            <h1>{{ language['application settings'] }}</h1>
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2>{{ language['Select the application theme'] }}</h2>
            </div>
            <ComponentVueSelect 
                :selectedOption="selectedTheme " 
                :selectOptions="themes"
                :mutation="setSelectedThemes" 
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2>{{ language['Select an application'] }} </h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="applicationsSelection" 
                :mutation="setSelectedApplication"
                :selectedOption="selectedApplication" 
            />
        </div>
  
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> {{ language['Choose a font'] }} </h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="fonts" 
                :mutation="setSelectedFont" 
                :selectedOption="selectedFont" 
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2> {{ language['Choose the font size'] }} </h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="sizeFonts" 
                :mutation="setSelectedSizeFonts"
                :selectedOption="selectedSizeFonts" 
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h2>{{ language['settings on custom selectors'] }} </h2>
            </div>
            <ComponentVueSelect 
                :selectOptions="selectingSettingsMenu" 
                :mutation="setSelectedSettingsMenu"
                :selectedOption="selectedSettingsMenu" 
            />
        </div>
        <button @click="defineLanguageData(selectedLanguage === languages.RUSSIAN ? languages.ENGLISH : languages.RUSSIAN  )" >
            {{ selectedLanguage === languages.RUSSIAN ?  "ENGLISH": "РУССКИЙ" }}
         </button>
        <div class="button-back-holder">
            <ButtonBack :functionButtonBack="backStartSetting" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import languages from '../../data/language/language.json'
import ComponentVueSelect from '../ui/vue_select/ComponentVueSelect.vue';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
export default {
    data(){
        return{
            languages:languages
        }
}   ,
    components: {
        ComponentVueSelect,
        ButtonBack,
    },
    computed: {
        ...mapState([
            'ComponentNames', 
            'selectingSettingsMenu', 
            'selectedSettingsMenu',  
            'fonts', 
            'selectedFont', 
            'sizeFonts', 
            'selectedSizeFonts', 
            'applicationsSelection', 
            'selectedApplication', 
            'themes', 
            'selectedTheme',
            'languageData',
            'selectedLanguage',
            'componentLanguage',
        ]),
        language() { 
            return this.languageData[this.componentLanguage.SETTINGS_HEADER] || {}
        }
    },
    methods: {
        ...mapMutations([
            'setComponentSetting',
            'setSelectedSettingsMenu', 
            'setSelectedFont', 
            'setSelectedSizeFonts', 
            'setSelectedApplication', 
            'setSelectedThemes',
        ]),
        ...mapActions(['defineLanguageData']),
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