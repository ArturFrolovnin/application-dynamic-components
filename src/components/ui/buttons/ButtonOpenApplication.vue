<template>
    <div class="container-button-start">
           <div class="img-button-start">
               <img class="img-start"
                    src="../../../../public/assets/ui_elements/application.png" 
                    @click="functionButtonOpenApplication()"
                 >
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
.container-button-start{
   width: 100%;
   height: 100%;
}

.img-button-start{
   width: 100%;
   height: 100%;
} 

.img-start {
   max-width: 200px;
   width:100%;
   transition: 0.5s;
   cursor: pointer;
}

.img-start:hover {
   scale: 1.1;
}
</style>