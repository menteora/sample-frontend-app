<template>
  <v-app>
    <v-navigation-drawer app fixed temporary clipped v-model="drawer">
      <v-list>
        <v-list-tile router v-for="(item, i) in items" :key="i" :to="item.to" exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app clipped-left fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="(item, i) in items" :key="i">
        <v-btn exact router :to="item.to" flat>
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
      <snackbar/>
    </v-content>
  </v-app>
</template>

<script>
import snackbar from "@/components/Snackbar";

export default {
  name: "App",
  components: {
    snackbar
  },
  data() {
    return {
      drawer: false,
      showed: false
    };
  },
  created() {
    this.$store.dispatch("auth/setTokenFromLocalStorage");
  },
  computed: {
    items() {
      let items = [];
      this.$router.options.routes.forEach(route => {
        if (route.meta && route.meta.visible()) {
          items.push({
            title: route.meta.title,
            icon: route.meta.icon,
            to: route.path
          });
        }    
      });
      return items;
    }
  }
};
</script>
