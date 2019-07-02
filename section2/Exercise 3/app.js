new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed:{
            result: function(){
                return this.$data.value >37?"Done":"Not there yet";
            }
        },
        watch:{
            result:  function(){
                const vm = this;
                console.log(vm.result);
                    if(vm.result ==='Done'){
                        setTimeout(function(){
                            vm.value=0;
                        },5000);
                    }
            }
        }
    });