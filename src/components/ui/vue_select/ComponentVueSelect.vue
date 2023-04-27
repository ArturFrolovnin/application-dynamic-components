<template>
    <div class="form-select-setting">
        <select class="selectable-option" v-model="selected" @change="selectOption()">
            <option v-for="(option, index) in optionsKeys" :key="index">
                {{ selectOptions[option] }}
            </option>
        </select>

    </div>
</template> 
 
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            optionsKeys: [],
            selected: this.selectedOption
        }
    },
    props: {
        selectedOption: {
            type: String
        },
        selectOptions: {
            type: Object,
        },
        mutation: {
            type: Function,
        },

    },
    methods: {
        selectOption() {
            this.mutation(this.selected);
        }
    },
    created() {
        this.optionsKeys = Object.keys(this.selectOptions);
    },
    computed: {
        ...mapState(['languageData', 'componentLanguage']),
        language() {
            return this.languageData[this.componentLanguage.SELECT] || {}
        },
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


