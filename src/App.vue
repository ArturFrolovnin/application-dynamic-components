<template>
  <div class="application-container" :class="[this.selectedFont, this.selectedSizeFonts, this.selectedThemes]" >
    <HomeComponent />
  </div>
  <ThemeApplication/>
</template>

<script>
import { mapState } from 'vuex';
import HomeComponent from './components/HomeComponent.vue';
import ThemeApplication from './components/ui/themes/ThemeApplication.vue';
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
  --application-font-size-defualt: calc(10px + 5 * (100vw/1980));;
  --application-font-size-large:  calc(12px + 5 * (100vw/1980));;
  --application-font-size-medium: calc(10px + 5 * (100vw/1980));;
  --application-font-size-small:  calc(5px + 5 * (100vw/1980));;
  --application-font-sans-serif: sans-serif;
  --application-font-roboto: "roboto", sans-serif;
  --application-font-times: "Times New Roman", sans-serif;
  --custom-selection-background: rgb(174, 169, 190);
  --custom-selection-hover-outline:black;
  --dropdown-list-background: rgb(174, 169, 190);
  --option-dropdown-list-hover:black;
  --form-application-background-color: rgba(216, 209, 222, 0.706); 
  --error-message-color: red;
  --list-notes-item-background-color: white;
  --list-notes-item-color: black;
  --delete-note-background: rgb(241, 0, 0);
  --delete-note-after-background-color: white;
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

.application-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
