
<template>
  <v-snackbar v-model="snackbar" color="error" :timeout="4000" vertical="vertical">
    {{ message }}
    <v-btn dark flat @click="snackbar = false">Chiudi</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      message: ""
    };
  },
  created: function() {
    this.$store.watch(
      (state, getters) => getters["snackbar/message"],
      message => {
        if (message !== "") {
          this.snackbar = true;
          this.message = message;
          this.$store.dispatch("snackbar/setMessage", "");
        }
      }
    );
  }
};
</script>

<style scoped>
</style>
