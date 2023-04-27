<template>
    <div class="container-button-back-setting">
        <div class="img-button-back">
            <img class="img-back"
                src="../../../../public/assets/ui_elements/back.png" 
                @click="functionButtonBack()"
            >
        </div>
    </div>
</template>

<script>
export default {
   props:{
    functionButtonBack:Function
   }
}
</script>
<style>
.img-button-back{
    margin-top: 20px;
}

.img-back{
    height: 100px;
    transition: 0.2s;
}

.img-back:hover{
    scale: 1.1;
    cursor: pointer;
}
</style>
