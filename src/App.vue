<template>
  <div class="aplication" :class="[this.selectedFont, this.selectedSizeFonts, this.selectedThemes]">
    <HomeComponent />
  </div>
  <ThemeApplication />
</template>

<script>
import { mapState } from 'vuex';
import HomeComponent from './components/HomeComponent.vue';
import ThemeApplication from './components/themes/ThemeApplication.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    ThemeApplication
  },
  computed: {
    ...mapState(["selectedFont", "selectedSizeFonts", "selectedThemes"])
  }
}
</script>
<style>
:root {
  --application-background-color: rgba(107, 75, 210, 0.95);
  --application-hover-outline: rgb(77, 64, 108);
  --application-color: white;
  --application-setting-background-color: rgba(135, 110, 217, 0.95);
  --application-setting-hover-outline: rgb(74, 59, 119);
  --application-setting-color: white;
  --application-font-size-defult: 1em;
  --application-font-size-large: 1.1em;
  --application-font-size-medium: 1em;
  --application-font-size-small: 0.8em;
  --application-font-sans-serif: sans-serif;
  --application-font-roboto: "roboto", sans-serif;
  --application-font-times: "Times New Roman", sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

.aplication {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
