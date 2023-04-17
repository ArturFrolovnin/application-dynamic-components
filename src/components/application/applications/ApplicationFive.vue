<template>
    <div class="filed-aplication">
        <div class="title-application">
            <h1> приложение с использованием Computed </h1> 5
        </div>
        <div class="number-counter">
            <h3> counter:{{ counter }}</h3>
            <h3> result: {{ result }}</h3>
            <button @click="increment"> increment</button>
            <button @click="decrement"> decrement</button>
        </div>
        <div class="button-back">
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>
<script>
import ButtonBack from '@/components/buttons/ButtonBack.vue';

import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            counter: 0,
            counterLimitIncrement: 10,
            counterLimitDecrement: -10
        }
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames']),
        result() {
            return this.counter > 5 ? 'больше 5' : 'меньше 5'
        }

    },
    methods: {
        ...mapMutations(['setComponetnApplication']),
        exitTheApplication() {
            this.setComponetnApplication(this.ComponentNames.componentStartApplication)
        },
        increment() {
            if (this.counter >= this.counterLimitIncrement) return;
            this.counter++
        },
        decrement() {
            if (this.counter <= this.counterLimitDecrement) return;
            this.counter--
        }
    }
}
</script>
<style scoped>
.number-counter{
    text-align: center;
}
.number-counter button{
    margin: 5px;
}
</style>