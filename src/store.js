import { createStore } from "vuex";
import ComponentNames from '../json_components_names/componentNames.json'
import ApplicationSelection from '../json_components_names/ApplicationSelection.json'
import themes from '../json_components_names/themes.json'
import fonts from '../json_components_names/fonts.json'
import sizeFonts from '../json_components_names/sizeFonts.json'




const store = createStore({
    state(){
        return{
            ComponentNames: ComponentNames,
            StartApplication: ComponentNames.componentStartApplication,
            SettingsApplication: ComponentNames.ComponentSettingsApplication,
            MenuSetting:ComponentNames.ComponentMenuSetting,
            ApplicationSelection,
            selectedApplication:ApplicationSelection.ApplicationForm,
            themes,
            selectedThemes:themes.defaultTheme,
            fonts,
            selectedFont: fonts.DefultFont,
            sizeFonts,
            selectedSizeFonts:sizeFonts.DefultSizeFont
        }
    },
    mutations:{
        setComponetnApplication(state ,component){
           state.StartApplication = component;
        },
        setSelectedApplication(state , component){
            state.selectedApplication = component;
         },
        setComponetnSetting(state,component){
            state.SettingsApplication = component;
        },
        setSelectedThemes(state,component){
            state.selectedThemes = component;
        },
        setSelectedFont(state, component){
            state.selectedFont = component;
            console.log(component)
        },
        setSelectedSizeFonts(state, component){
            state.selectedSizeFonts = component;
        }
    }
})
export default store;
