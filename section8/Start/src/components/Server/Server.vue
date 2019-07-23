<template>
    <span @click="showServer()">Server {{info.id}} Status {{info.status}} </span>
</template>

<script>
import { ServiceBus} from '../../main';

export default {
    props:{
        info: Object
    },
    methods:{
        showServer(){
            ServiceBus.$emit('serverSelected', this.info);
        }
    }
}
</script>

<style>

</style>