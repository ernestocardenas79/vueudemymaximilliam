<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="server">Server #{{server.id}} satus is {{server.status}}</p>
    <button @click="resetStatus">Change Status</button>
  </div>
</template>

<script>
import { ServerBus } from "../../main";
export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    ServerBus.$on("serverSelected", server => {
      this.server = server;
    });
  }
};
</script>

<style>
</style>
