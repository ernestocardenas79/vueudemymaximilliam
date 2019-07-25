<template>
    <div>
        <textarea name="capture" id="capture" cols="30" rows="10" v-model="quoteContent"></textarea>
        <button @click="addQuote"> Add</button>
    </div>
</template>
<script>
import {QuotesAppBus} from '../main';
export default {
    data: function(){
        return {
            quoteContent:''
        }
    },
    methods:{
        addQuote(){
            QuotesAppBus.addQuote(this.quoteContent);
        }
    }
}
</script>
<style scoped>
div {
    width: 100%;
    display: grid;
}
    textarea{
        width:40%;
        margin: auto;
    }

    button{
        width: 10%;
        display: block;
        margin: 5px auto;
    }
</style>
