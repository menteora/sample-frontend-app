<template>
  <v-container>
    <v-layout column>
      <div v-if="!record" class="text-xs-center">
        <v-progress-circular indeterminate color="green"></v-progress-circular>
      </div>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs12 md10 lg8>
        <v-card v-if="record" class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title class="green--text">
              <h1>{{ record.username }}</h1>
            </v-toolbar-title>
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="min-height: 250px;">
            <h2>Email</h2>
            <span v-html="record.email"></span>
            <v-layout row wrap>
              <v-flex xs6>
                <span>
                  <div class="text-xs-left">
                    <h2>Admin</h2>
                    <span class="text-capitalize font-weight-bold">{{ record.admin }}</span>
                  </div>
                </span>
              </v-flex>
              <v-flex xs6>
                <div class="text-xs-right">
                  <h2>Locked</h2>
                  <span class="red--text">{{ record.locked }}</span>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    record: null
  }),
  created() {
    this.$store.dispatch("users/read", this.$route.params.id).then(data => {
      this.record = data;
    });
  },
};
</script>
<style scoped>
</style>