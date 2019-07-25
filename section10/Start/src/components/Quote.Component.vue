<template>
    <div @click="remove">
        <slot></slot>
    </div>
</template>
<script>
import {QuotesAppBus} from '../main';
export default {
    props:['id'],
    methods:{
        remove(){
            QuotesAppBus.$emit('deleteQuote', this.id);
        }
    }
}
</script>
<style scoped>
    div{
        border:  1px solid red;
        border-radius: 10px;
        padding: 20px 10px;
        box-shadow: 2px 1px 4px orange;
        width:300px;
        height: 150px;

        background: rgba(255,255,255,1);
background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(253,223,139,1) 20%, rgba(254,214,102,1) 34%, rgba(255,198,41,1) 57%, rgba(254,243,216,1) 100%);
background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(20%, rgba(253,223,139,1)), color-stop(34%, rgba(254,214,102,1)), color-stop(57%, rgba(255,198,41,1)), color-stop(100%, rgba(254,243,216,1)));
background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(253,223,139,1) 20%, rgba(254,214,102,1) 34%, rgba(255,198,41,1) 57%, rgba(254,243,216,1) 100%);
background: -o-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(253,223,139,1) 20%, rgba(254,214,102,1) 34%, rgba(255,198,41,1) 57%, rgba(254,243,216,1) 100%);
background: -ms-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(253,223,139,1) 20%, rgba(254,214,102,1) 34%, rgba(255,198,41,1) 57%, rgba(254,243,216,1) 100%);
background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(253,223,139,1) 20%, rgba(254,214,102,1) 34%, rgba(255,198,41,1) 57%, rgba(254,243,216,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#fef3d8', GradientType=1 );
    }
</style>


