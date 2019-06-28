new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            showAlert(){
                alert('alerta');
            },
            storeValue(event){
                this.$data.value = event.target.value
            }
        }
    });