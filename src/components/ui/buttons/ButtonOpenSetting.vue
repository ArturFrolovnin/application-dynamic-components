<template>
    <div class="Container-button-seting">
        <div class="img-button-setting">
            <img class="img-button-setting"
                src="../../../../public/assets/ui_elements/settings.png"
                @click="functionButtonOpenSetting()" 
            >
        </div>
    </div>
</template>

<script>
export default {
    props:{
        functionButtonOpenSetting:Function
    }
}
</script>
<style>
.Container-button-seting {
    width: 100%;
    height: 100%;
}

.img-button-setting {
    max-width: 170px;
    max-height: 170px;
    width: 100%;
    height: 100%;
    transition: transform 1s ease-in-out;
    cursor: pointer;
}

.img-button-setting:hover {
    transform: rotate(360deg);
}
</style>