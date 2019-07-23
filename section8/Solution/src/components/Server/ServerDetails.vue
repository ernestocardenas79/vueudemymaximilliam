<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="serverDetail">Server {{serverDetail.id}} satus is {{serverDetail.status}}</p>
        <button @click="changeStatus()" > Change Status</button>
    </div>

</template>

<script>
import { ServiceBus} from '../../main';
export default {
    props:{serverDetail:null}
    ,
    methods:{
        changeStatus(){
            ServiceBus.changeStatusfn({id:ServiceBus.serverSelected.id, status:'Normal'});
        }
    },
}
</script>

<style>

</style>
