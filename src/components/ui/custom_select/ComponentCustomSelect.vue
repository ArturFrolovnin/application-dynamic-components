<template>
    <div class="application-custom-selection">
       <div class="title-application">
            <h2> {{ language['An application using a custom selector'] }} </h2>
       </div>
        <div class="container-custom-selection" 
            @click="toggleSelect"
        >
            <div class="custom-selection">
                <SelectOption 
                    :imgSrc="currentState.optionImg" 
                    :title="currentState.optionTitle"
                />
            </div>
            <div class="dropdown-list" v-if="isOpen">
                <div class="option-dropdown-list" 
                    v-for="(item, index) in selection" :key="index"
                    @click="select(item)"
                >
                    <SelectOption 
                        :imgSrc="item.optionImg" 
                        :title="item.optionTitle" 
                    />
                </div>
            </div>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import customSelectOptions from '../../../data/application/customSelectOptions.json'
import SelectOption from './select_options/SelectOption.vue';
import ButtonBack from '../../ui/buttons/ButtonBack.vue';

export default {
    data() {
        return {
            selection: customSelectOptions,
            currentState: {
                optionTitle: "Выбери опцию",
                optionImg: require("../../../../public/assets/Img_for_custom_select/person2.jpg")
            },
            isOpen: false
        }
    },
    components: {
        ButtonBack,
        SelectOption
    },
    computed: {
        ...mapState(['ComponentNames','languageData','componentLanguage']),
        language() { 
            return this.languageData[this.componentLanguage.APPLICATIONS] || {}
        }
    },
    methods: {
        ...mapMutations(['setComponentApplication']),
        exitTheApplication() {
            this.setComponentApplication(this.ComponentNames.componentStartPageApplication)
        },
        select(selectedItem) {  
            this.isOpen = true;
            this.currentState = selectedItem;
            
        },
        toggleSelect(){
            this.isOpen = !this.isOpen          
        },      
    }
}
</script>
<style scoped>
.application-custom-selection {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.container-custom-selection{
    max-height: 220px;
    height: 100%;
    position: relative;
}
.custom-selection {
    background: var(--custom-selection-background);
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;    
}
.custom-selection:hover {
    cursor: pointer;
    outline: solid 1px var(--custom-selection-hover-outline);
}
.dropdown-list {
    border-radius: 10px;
    width: 200px;
    height: 210px;
    background: var(--dropdown-list-background);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
}
.option-dropdown-list {
    display: flex;
    align-items: center;   
}
.option-dropdown-list:hover {
    outline: solid 1px var(--option-dropdown-list-hover);
    cursor: pointer;
}
</style>