import Vue from 'vue'
import App from './App.vue'

export const QuotesAppBus = new Vue({
  data:{
    quotesLimit:10
  },
  methods:{
    addQuote(quoteContent){
      this.addQuoteBase(quoteContent);
    },
    addQuoteBase(quoteContent){
      this.$emit('addQuote',quoteContent);
    }
  },
  created(){
    this.$on('limitReach',()=> {
      this.addQuote = ()=>{alert('Ha alcanzado la capacidad maxima de citas')};
    });

    this.$on('deleteQuote',()=>{
      this.addQuote = this.addQuoteBase;
    });
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
