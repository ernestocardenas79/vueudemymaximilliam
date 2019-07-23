<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details :serverDetail="server"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
import { ServiceBus} from './main';

    export default {
        data:function(){
            return{
                server:null
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        created(){
        ServiceBus.$on('serverSelected', function(server){
            this.server=server;
            console.log(this.server);
        });
    }
    }
</script>

<style>

</style>
