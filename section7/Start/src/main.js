import Vue from 'vue'
import App from './App.vue'
import HeaderComponent from './components/Header.Componente.vue';


Vue.component('my-header', HeaderComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
