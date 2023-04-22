<template> 
    <div class="container-select"> 
        <div class="img-select"    >                
           <img class="img-options" :src="imgSrc" >
        </div> 
        <div class="title-select">
            <p> {{ title }} </p>
        </div>
    </div> 
</template> 
 
<script> 
export default { 
    props: { 
        imgSrc: { 
            type: Object, 
        }, 
        title: {
            type: String
        } 
    }, 
} 
</script> 
<style  scoped>
.container-select{
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 4%;
}
.img-options{
    width: 32px;
    border-radius:100% ;
}
.title-select{
    margin-left: 4%;
}

</style>


