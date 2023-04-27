<template>
    <div class="menu-setting">
        <div class="title-setting-select">
            <h2> {{language['settings on custom selectors']}}</h2>
        </div>
        
        <div class="setting-component">
            <div class="title-setting-component">
                <h3> {{language['Select the application theme']}}</h3>
            </div>
            <CustomSelectForMenuSetting
                :selectedOption="selectedTheme"
                :selectOptions="themes"
                @seleсt="setSelectedThemes"
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h3>  {{language['Select an application']}}</h3>
            </div>
            <CustomSelectForMenuSetting
                :selectedOption="selectedApplication"
                :selectOptions="applicationsSelection"
                @seleсt="setSelectedApplication"
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h3> {{language['Choose a font']}}</h3>
            </div>
            <CustomSelectForMenuSetting
                :selectedOption="selectedFont"
                :selectOptions="fonts"
                @seleсt="setSelectedFont"
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h3> {{language['Choose the font size']}}</h3>
            </div>
            <CustomSelectForMenuSetting
                :selectedOption="selectedSizeFonts"
                :selectOptions="sizeFonts"
                @seleсt="setSelectedSizeFonts"
            />
        </div>
        <div class="setting-component">
            <div class="title-setting-component">
                <h3> {{language['Select the type of settings']}}</h3>
            </div>
            <CustomSelectForMenuSetting
                :selectedOption="selectedSettingsMenu"
                :selectOptions="selectingSettingsMenu"
                @seleсt="setSelectedSettingsMenu"
            />
        </div>
        <button
            @click="defineLanguageData(selectedLanguage === languages.RUSSIAN ? languages.ENGLISH : languages.RUSSIAN  )"
         >
         {{ selectedLanguage === languages.RUSSIAN ?  "ENGLISH": "РУССКИЙ" }}
         </button>
        <ButtonBack :functionButtonBack="backStartSetting"></ButtonBack>     
    </div>
</template>

<script>
import { mapMutations, mapState,mapActions } from 'vuex';
import CustomSelectForMenuSetting from '../ui/custom_select/CustomSelectForMenuSetting.vue';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
import languages from '../../data/language/language.json'

export default{
    data(){
        return{
            languages:languages
        }
    },
    components:{
        CustomSelectForMenuSetting,
        ButtonBack,
    },
    computed:{
        ...mapState([
            'ComponentNames', 
            'themes', 
            'selectedTheme', 
            'applicationsSelection',
            'selectedApplication', 
            'fonts', 
            'selectedFont', 
            'sizeFonts', 
            'selectedSizeFonts', 
            'selectingSettingsMenu', 
            'selectedSettingsMenu',
            'selectedLanguage',
            'languageData',
            'componentLanguage',
        ]),
        language() { 
            return this.languageData[this.componentLanguage.SETTINGS_HEADER] || {}
        }
    },
    methods:{
        ...mapMutations([
            'setComponentSetting',
            'setSelectedThemes', 
            'setSelectedApplication', 
            'setSelectedFont', 
            'setSelectedSizeFonts', 
            'setSelectedSettingsMenu' 
        ]),
        ...mapActions(['defineLanguageData']),
        backStartSetting() {
            this.setComponentSetting(this.ComponentNames.componentStartPageApplicationSetting)
        },
       
    }
}
</script>

<style scoped>
.menu-setting-custom-select{

}
</style>