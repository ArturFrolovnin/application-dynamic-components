import { createStore } from "vuex";
import ComponentNames from '../src/data/application/componentNames.json'
import applicationsSelection from '../src/data/application/applicationsSelection.json'
import themes from '../src/data/themes/themes.json'
import fonts from '../src/data/fonts/fonts.json'
import sizeFonts from '../src/data/fonts/sizeFonts.json'
const store = createStore({
    state(){
        return{
            ComponentNames:ComponentNames,
            StartPageApplication:ComponentNames.componentStartPageApplication,
            StartPageApplicationSetting:ComponentNames.componentStartPageApplicationSetting,
            MenuSetting:ComponentNames.componentMenuSetting,
            applicationsSelection,
            selectedApplication:applicationsSelection.ListRendering,
            themes,
            selectedThemes:themes.defaultTheme,
            fonts,
            selectedFont:fonts.DefaultFont,
            sizeFonts,
            selectedSizeFonts:sizeFonts.DefaultSizeFont
        }
    },
    mutations:{
        setComponentApplication( state, StartPage){
            state.StartPageApplication = StartPage;
        },
        setComponentSetting(state, StartPageSetting){
            state.StartPageApplicationSetting = StartPageSetting;
        },
        setSelectedApplication(state, Application){
            state.selectedApplication = Application;
        },       
        setSelectedThemes(state, Themes){
            state.selectedThemes = Themes;
        },
        setSelectedFont(state, Font){
            state.selectedFont = Font;
        },
        setSelectedSizeFonts(state, SizeFonts){
            state.selectedSizeFonts = SizeFonts;
        }
    }
})
export default store;