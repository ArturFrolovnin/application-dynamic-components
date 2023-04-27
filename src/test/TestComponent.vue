<template>
    <div>
        
        <OptionsForTest
            :selectedOption="selectedTheme"
            :selectOptions="themes"
            @seleсt="setSelectedThemes"
        />
        <button
            @click="defineLanguageData(selectedLanguage === languages.RUSSIAN ? languages.ENGLISH : languages.RUSSIAN  )"
         >
         swithLangue
         </button>
        

      
            <div
                v-for="(item,index) in themes" :key="index"
            >    {{languageTheme[index]}}
                    
            </div>
    
        <select > 
            <option
            v-for="(item,index) in themes" :key="index"
            >
            {{languageTheme[index]}}
            </option>
        </select>



    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import OptionsForTest from './OptionsForTest.vue';
import testJson from './testJson.json'
import languages from '../data/language/language.json'


    export default{
        data(){
            return{
                selectedName: this.selectedTheme,
                selectName: testJson,
                languages: languages,
               

            }
        },
        methods:{
            changeTest( testName){
                this.setSelectedThemes = testName
            },
            ...mapActions(['defineLanguageData']),
            ...mapMutations(['setSelectedThemes'])
            
        },
        components:{
            OptionsForTest
        },
        computed:{
            ...mapState(['languageData', 'selectedLanguage', 'componentLanguage', 'themes', 'selectedTheme']),


        languageTheme() { 
            return this.languageData[this.componentLanguage.SELECT] || {}
        }
      
    },
        
}
</script>

<style scoped>

</style>