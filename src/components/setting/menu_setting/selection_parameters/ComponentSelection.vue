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
.form-select-setting {
    height: 90%;
    height: 90%;
}
.selectable-option {
    width: 250px;
    height: 40px;
    padding-left: 10px;
    border-radius: 10px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4.5);
    font-size: 20px;
    cursor: pointer;
    border: none;
}
</style>


