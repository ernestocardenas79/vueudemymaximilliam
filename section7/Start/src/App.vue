<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <my-server-list></my-server-list>
            <my-server-detail></my-server-detail>
        </div>
        <hr>
        <div class="row">
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>
import ServerListComponent from './components/ServerList.Component.vue';
import ServerDetailComponent from './components/ServerDetail.Component.vue';
import FooterComponent from './components/Footer.Component.vue'
export default {
    components:{
        'my-server-list': ServerListComponent,
        'my-server-detail':ServerDetailComponent,
        'my-footer':FooterComponent
    }
}
</script>

<style>

</style>
