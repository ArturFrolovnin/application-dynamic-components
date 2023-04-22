<template> 
    <div class="form-select-setting"> 
        <select class="selectable-option"  v-model="selected" @change="selectOption()"  > 
           <option v-for="(option, index) in optionsKeys" :key="index"> 
            {{ selectOptions[option] }} 
           </option> 
        </select> 
    </div> 
</template> 
 
<script> 
export default { 
    data(){ 
        return{ 
            optionsKeys: [],
            selected: this.selectedOption 
        } 
    }, 
    props: { 
        selectOptions: { 
            type: Object, 
        }, 
        mutation: { 
            type: Function, 
        },
        selectedOption: {
            type: String
        } 
    }, 
    methods:{ 
        selectOption(){ 
            this.mutation(this.selected);
        } 
    },
    created(){
        this.optionsKeys = Object.keys(this.selectOptions);
    }
} 
</script> 
<style>
.selectable-option {
    width: 200px;
    height: 35px;
    padding-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
}
</style>


