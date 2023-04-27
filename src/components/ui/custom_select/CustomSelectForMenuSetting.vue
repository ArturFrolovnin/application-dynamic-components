<template>
    <div class="custom-select">
        <div class="container-selected-option" @click="toggleSelect" >
           <div class="selected-option" >
                {{ language[selectedOption] }}
            </div> 
        </div>

        <div class="container-select-options"
            v-if="isOpen"
        >
            <div class="select-options"
                v-for=" (optionItem, index) in selectOptions" :key="index"
                @click="selectOption(optionItem)"
            >
                <div class="options">
                    {{ language[index] }}
                </div>
            </div>
         </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default{ 
    data(){
        return{
            isOpen: false,
        }
    },
    props:{
        selectedOption:{
            type: Object
        },
        selectOptions:{
            type : Object
        }
    },
    methods:{
        selectOption(optionItem){
            this.$emit("seleсt",optionItem)
            this.isOpen = false
        },
        toggleSelect(){
            this.isOpen = !this.isOpen;
        },
        hideSelect(){
            this.isOpen = false;
        }
    },
    computed:{
        ...mapState(['languageData', 'componentLanguage']),
        language() { 
            return this.languageData[this.componentLanguage.SELECT] || {}
        },
    },
    mounted(){
        document.addEventListener('click', this.hideSelect.bind(this),true)
    },
    beforedestroy(){
        document.removeEventListener('click', this.hideSelect)
    }
}
</script>

<style scoped>
.custom-select{
   
}
.container-selected-option{
    height: 35px;
    width: 250px ;
    margin-bottom: 10px ;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    position: relative;
}
.container-selected-option:hover{
    outline: 1px solid black;
}
.selected-option{
 padding: 10px;    
}
.container-select-options{
    position: absolute;
    z-index: 15;
    width: 250px;
    max-height: 200px ;
    overflow: auto;
    word-break: break-all;
}
.select-options{
    background-color:rgba(176, 176, 176, 0.98);
}
.options{
    padding: 10px;    
    cursor: pointer;
}
.options:hover{
    outline: solid 1px black;
    text-shadow: 1px 2px 4px black;
}
</style>