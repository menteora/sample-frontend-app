<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg6>
        <v-card class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title color="primary">
              <h1 class="font-weight-light green--text">Accedi</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field color="green" v-model="username" label="Utente" required></v-text-field>
            <v-text-field color="green" type="password" v-model="password" label="Password" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn block flat class="green--text" @click="login()">Accedi</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let data = null;
      data = {
        username: this.username,
        password: this.password
      };
      this.$store
        .dispatch("auth/login", data)
        .then(status => {
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.$store.dispatch("snackbar/setMessage", error);
        });
    }
  },
  computed: {
    token() {
      return this.$store.getters["auth/token"];
    }
  }
};
</script>