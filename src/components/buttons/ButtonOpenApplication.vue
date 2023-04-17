<template>
    <div class="container-buuton-start">
           <div class="img-button-start">
               <img src="/../assets/ImgButtonPlay.png" 
               @click="functionButtonOpenApplication()"
                 class="img-start">
           </div>
       </div>
</template>

<script>
export default{
    props:{
        functionButtonOpenApplication:Function
    },
   
}
</script>
<style>
.container-buuton-start{
   width: 100%;
   height: 100%;
}
.img-button-start{
   width: 100%;
   height: 100%;
} 
.img-start {
   max-width: 300px;
   width:100%;
   transition: 0.5s;
   cursor: pointer;
}

.img-start:hover {
   scale: 1.1;
}
</style>