<template>
  <div class="home">
    <h2 class="headline">Home</h2>
    <key-monitor @scanned="onScan"></key-monitor>
    <v-text-field label="Barcode" :value='barcode'></v-text-field>
  </div>
</template>

<script>
import KeyMonitor from "@/components/KeyMonitor";

export default {
  components: {
    KeyMonitor
  },
  data() {
    return {
      barcode: ""
    };
  },
  methods: {
    onScan(value) {
      this.barcode = value;
    }
  }
};
</script>
