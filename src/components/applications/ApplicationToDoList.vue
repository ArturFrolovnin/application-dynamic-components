<template>
    <div class="application-to-do-list">
        <div class="container-form">
            <div class="title-application">
                <h2> Приложение список дел</h2>
            </div>
            <div class="form-application">
                <input type="text" 
                    placeholder="Введите заметку" 
                    v-model="inputText"
                    @keydown="isNumbers($event)"
                >
                <button @click="addNotesTolist" :disabled="!disabledButton">добавить</button>
            </div>
            <div class="error-message"
                v-for="(error, index) in errorMessage" :key="index"
            >
                <h4>{{ error }}</h4>
            </div>
        </div>
        <div class="container-list-notes">
            <div class="list-notes-item" v-for="(noteInList, indexnote) in arrayNotes" :key="indexnote">
                   <div class="text-note">{{ noteInList }} </div> 
                <div class="delete-note" @click="deleteNote(indexnote)" ></div>
            </div>
        </div>
        <div>
            <ButtonBack :functionButtonBack="exitTheApplication" />
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonBack from '../ui/buttons/ButtonBack.vue';
import listOfErrors from '../../data/application/listOfErrors.json'
const MINIMUM_NUMBER_KEY_CODE = 49;
const MAXIMUM_NUMBER_KEY_CODE = 57;
export default {
    data() {
        return {
            errorLog:listOfErrors,
            arrayNotes: [],
            inputText: ""
        }
    },
    components: {
        ButtonBack
    },
    computed: {
        ...mapState(['ComponentNames']),
        disabledButton() {
            return (
                !this.isInputEmpty(),
                this.isNotTheLettersInInput() && 
                this.isNotTwoWordsInInput() 
            )
        },
        isStringEmpty () {
            return this.isInputEmpty()
        },
        isErrorBecauseOfSymbols() {   
            return this.isNotTheLettersInInput(); 
        },
        isErrorIsRelatedToNumberOfWords() {  
           return this.isNotTwoWordsInInput() 
        },
        errorMessage() {
            let arrayOfErrorMessages = [];
            if(this.isStringEmpty){
                return;
            }
            if(!this.isErrorBecauseOfSymbols) { 
                arrayOfErrorMessages.push(this.errorLog.errorIsNotLetters)
            }
            if(!this.isErrorIsRelatedToNumberOfWords) { 
                arrayOfErrorMessages.push(this.errorLog.errorIsNotTwoWords);
            }
            return arrayOfErrorMessages;
        },
    },  
    methods: {
        ...mapMutations(['setComponentApplication']),
        isInputEmpty() {
            return this.inputText === "";
        },
        isNotTheLettersInInput() {    
            return /^[A-zА-яЁё\s]+$/.test(this.inputText); 
        },
        isNotTwoWordsInInput() {  
            let spaceInInput = /\S+/g;
            let arrayOfValuesFromInput = this.inputText.match(spaceInInput) || [];
            return arrayOfValuesFromInput.length === 2;
        },
        isNumbers(event) {
            if (!(event.keyCode < MINIMUM_NUMBER_KEY_CODE || event.keyCode > MAXIMUM_NUMBER_KEY_CODE)) {
                event.preventDefault();
            }
        },
        convertStringToArrayOfStrings(text) {
            return text.split(' ');
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);                            
        },
        convertingFirstWords(text) {
            const words = text;
            const resultChange = [];
            const convertString = this.convertStringToArrayOfStrings(words);
            convertString.forEach((string)=>{
            const lowercaseWords = string.toLowerCase();
            const capitalizedWords = this.capitalize(lowercaseWords);
            resultChange.push(capitalizedWords);
            });
            return resultChange.join(" ");         
        },
        addNotesTolist() {
            this.arrayNotes.push(this.convertingFirstWords(this.inputText));
            this.clearInput()  
        },
        clearInput() {
            this.inputText = "";
        },
        deleteNote(index) {
            this.arrayNotes.splice(index,1)
            console.log(this.arrayNotes)
        },
        exitTheApplication() {
            this.setComponentApplication(this.ComponentNames.componentStartPageApplication)
        },
    },
}
</script>
<style scoped>
.application-to-do-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 90%;
}
.container-form{
    position: relative;
}
.title-application{
    margin-bottom: 5% ;
    
}

.form-application {
    background-color: var(--form-application-background-color);
    min-width: 250px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 5%;
    position: relative;
}
.form-application input {
    margin-left:10px ;
    border-radius: 5px;
    height: 30px;
    max-width: 230px;
    width: 100%;
    cursor: pointer;
}
.form-application button {
    margin-left:10px;
    margin-right:10px ;
    padding-left: 5px ;
    padding-right: 5px;
    border-radius: 5px;
    height: 30px;
    width: 80px;
    cursor: pointer;
}

.error-message{
    color: var(--error-message-color);   
    margin-bottom: 10px ; 
  
}
.container-list-notes {
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:100%;
    overflow: auto;
    word-break: break-all;
}

.list-notes-item {
    background-color: var(--list-notes-item-background-color);
    color: var(--list-notes-item-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding-left: 3% ;
    margin-bottom: 3%;
    width: 278px;
    min-height: 50px;
}
.text-note{
    display: flex;
    align-items: center;
    max-width: 225px;
    min-height: 25px;
}
.delete-note{
    width: 25px;
    height: 25px;
    display: flex;
    border-radius: 100% ;
    background: var(--delete-note-background);
    margin-right: 5%;
    position: relative;
    transition: 0.4s;
    cursor: pointer;
}
.delete-note:hover{
    scale: 1.1;
}
.delete-note::before,
.delete-note::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 25px;
    top: 0px;
    left: 11px;
    background-color: var(--delete-note-after-background-color);
}

.delete-note::before {
  transform: rotate(45deg);
}
.delete-note::after {
  transform: rotate(-45deg);
}
</style>