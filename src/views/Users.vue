<template>
  <v-container fluid grid-list-md>
    <v-layout column>
      <div v-if="!dataset" class="text-xs-center">
        <v-progress-circular indeterminate color="green"></v-progress-circular>
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-if="dataset" xs12 md6 lg4 v-for="record in dataset" :key="record.id">
        <v-card class="my-3" hover>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ record.username }}</div>
              <div class="grey--text">creato: {{ record.created_at | moment("DD/MM/YYYY") }}</div>
              <div class="grey--text">modificato: {{ record.updated_at | moment("DD/MM/YYYY") }}</div>
            </div>
          </v-card-title>
          <v-card-text class="text-truncate subheading">
            <v-layout row wrap>
              <v-flex xs6>
                <span>
                  <p class="text-xs-left">
                    <span>Email: </span>
                    <span
                      class="text-capitalize font-weight-bold"
                    >{{record.email}}</span>
                  </p>
                </span>
              </v-flex>
              <v-flex xs6>
                <p class="text-xs-right">
                  <span>Role: </span>
                  <span class="red--text">{{ record.roles}}</span>
                </p>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="green" exact router :to="getPostWithUrl(record.id)">Visualizza</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      dataset: null
  }),
  created() {
    this.$store
      .dispatch("users/fetch")
      .then(data => {
        this.dataset = data;
      })
      .catch(error => {
        this.$store.dispatch("snackbar/setMessage", error);
      });
  },
  methods: {
    getPostWithUrl(itemid) {
      return "/user/" + itemid;
    }
  }
};
</script>