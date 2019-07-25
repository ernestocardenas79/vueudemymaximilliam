<template>
    <div>
        <component class="quote" :is="'app-quote'" v-for="(quote, index) in quoteList" :key="quote.id" :id="quote.id">
            <p>{{quote.id}}- {{quote.text}} {{index}}</p>
        </component>
    </div>
</template>
<script>
import Quote from './Quote.Component.vue';
import {QuotesAppBus} from '../main';
export default {
    data:function(){
        return{
            quoteList:[]
         }
    },
    methods:{
        add(quoteContent){
            const id = new Date().valueOf();
            this.quoteList.push({id, text:quoteContent});
        },
        remove(id){
            const index = this.quoteList.findIndex(q=> q.id == id);
            this.quoteList.splice(index,1);
        }
    },
    components:{
        appQuote:Quote
    },
    created(){
        QuotesAppBus.$on('addQuote',(quoteContent)=>{
            this.add(quoteContent);
        });
        
        QuotesAppBus.$on('deleteQuote',(quoteId)=>{
            this.remove(quoteId);
        });
    }
}
</script>
<style scoped>
    .quote{
        display: inline-block;
        margin:5px 10px;
    }
</style>
