<template>
    <div class="container">
        <app-header></app-header>
        <app-progress-bar></app-progress-bar>
        <appQuoteCapture></appQuoteCapture>
        <appQuotesContainer></appQuotesContainer>
    </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.Component.vue';
import Header from './components/Header.Component.vue';
import QuoteCapture from './components/QuoteCapture.Component.vue';
import QuotesContainer from './components/QuotesContainer.Component.vue';

    export default {
     components:{
         appProgressBar: ProgressBar,
         appHeader:Header,
         appQuoteCapture:QuoteCapture,
         appQuotesContainer: QuotesContainer
     }
    }
</script>

<style>
.container{
    height: 100vh;
    width:90%;
}
</style>
