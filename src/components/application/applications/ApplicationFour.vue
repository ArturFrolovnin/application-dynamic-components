<template>
    <div class="filed-aplication">
        <div class="title-application">
            <h1> приложение с использованием Created </h1> 4
        </div>
        <div>
            
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
            property: 'Blank'
        }
    },
    created() {
        this.property = 'Example property update.'
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames']),
        propertyComputed() {
            return this.property
            // console.log('счётчик: ' + this.count) 

        }
    },
    methods: {
        ...mapMutations(['setComponetnApplication']),
        exitTheApplication() {
            this.setComponetnApplication(this.ComponentNames.componentStartApplication)
        }

    }
}
</script>
<style scoped></style>