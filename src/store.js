import { createStore } from "vuex";
import ComponentNames from '../src/data/application/componentNames.json'
import applicationsSelection from '../src/data/application/applicationsSelection.json'
import selectingSettingsMenu from '../src/data/application/selectingSettingsMenu.json'
import themes from '../src/data/themes/themes.json'
import fonts from '../src/data/fonts/fonts.json'
import sizeFonts from '../src/data/fonts/sizeFonts.json'
import componentLanguage from './data/language/componentLanguage.json'
const store = createStore({
    state(){
        return{
            selectedLanguage: "",
            languageData: {},
            componentLanguage:componentLanguage,
            ComponentNames:ComponentNames,
            StartPageApplication:ComponentNames.componentStartPageApplication,
            StartPageApplicationSetting:ComponentNames.componentStartPageApplicationSetting,
            MenuSetting:ComponentNames.componentMenuSetting,
            applicationsSelection,
            selectedApplication:applicationsSelection.ListRendering, 
            selectingSettingsMenu, 
            selectedSettingsMenu:selectingSettingsMenu.MenuSettingCustomSelect, // MenuSetting MenuSettingCustomSelect
            themes,
            selectedTheme:themes.defaultTheme,
            fonts,
            selectedFont:fonts.DefaultFont,
            sizeFonts,
            selectedSizeFonts:sizeFonts.DefaultSizeFont
        }
    },
   
    mutations:{
        setSelectedLanguage(state, language) { 
            state.selectedLanguage = language; 
        },
        setLanguageData(state, languageData) { 
            state.languageData = languageData; 
        },  
        setComponentApplication( state, applicationName){
            state.StartPageApplication = applicationName;
        },
        setComponentSetting(state, settingApplicationName){
            state.StartPageApplicationSetting = settingApplicationName;
        },
        setSelectedApplication(state, applicationName){
            state.selectedApplication = applicationName;
        },
        setSelectedSettingsMenu( state, settingsMenuName){
            state.selectedSettingsMenu = settingsMenuName
        },
        setSelectedThemes(state, themeName){
            state.selectedTheme = themeName;
        },
        setSelectedFont(state, fontName){
            state.selectedFont = fontName;
        },
        setSelectedSizeFonts(state, sizeFont){
            state.selectedSizeFonts = sizeFont;
        }
    },

    actions: { 
        async defineLanguageData({ state, commit }, languageToSet) { 
            if (state.selectedLanguage === "") 
                commit( 
                    "setSelectedLanguage", 
                  window.navigator.language.split("-")[0] || state.languages.ENGLISH
                ); 
            else if (languageToSet) commit("setSelectedLanguage", languageToSet); 
         
            try { 
                const language = await import(`./data/language/language_${state.selectedLanguage}.json` ); 
                commit("setLanguageData", language); 
            } catch (err) { 
                console.log(err); 
            } 
        }, 
    } 
});
export default store;