<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-my-on:click="clicked">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div style="width:100px; height:300px;background-color:aqua"
                    v-my-on:mouseenter="onMousEenter"
                    v-my-on:mouseleave="onMousLeave"
                >

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            clicked(){console.log('clicked')},
            onMousEenter(){console.log('onMousEenter')},
            onMousLeave(){console.log('onMousLeave')},
        },
        directives:{
            'my-on':{
                bind(el, binding,vnode){
                    let type = binding.arg;
                    let fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        }
    }

</script>

<style>
</style>
