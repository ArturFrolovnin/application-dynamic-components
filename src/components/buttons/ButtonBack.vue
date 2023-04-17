<template>
    <div class="container-buuton-back-setting">
        <div class="img-button-back">
            <img 
           @click="functionButtonBack()"
            class="img-back" 
            src="/../assets/back.png">
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
