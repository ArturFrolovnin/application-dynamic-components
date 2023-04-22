<template>
    <div class="filed-application">
        <div class="title-application">
            <h1> приложение с использованием Watch </h1> 
        </div>
        <div>
            <h2> Вычисление факториала числа </h2>
            <h3> Введите число:<input type="text" maxlength="2" v-model="number"></h3>
            <h4>Факториал числа: {{ result }} </h4>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
export default {
    data() {
        return {
            number: "",
            result: ""
        }
    },
    watch: {
        number(newNumber) {
            if (newNumber > 0) {
                this.calculatingFactorial(newNumber);
            }
        }
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames'])
    },
    methods: {
        ...mapMutations(['setComponentApplication']),
        exitTheApplication() {
            this.setComponentApplication(this.ComponentNames.componentStartPageApplication)
        },
        calculatingFactorial(newNumber) {
            let newResult;
            let recordingValue = 1;
            for (var index = 1; index <= newNumber; index++) {
                recordingValue = recordingValue * index;
            }
            newResult = newNumber + ' равен ' + recordingValue;
            this.result = newResult;
        }
    }
}
</script>
<style></style>