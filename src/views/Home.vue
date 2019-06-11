<template>
  <div class="home">
    <h2 class="headline">Home</h2>
    <key-monitor @scanned="onScan" :suffix="32"></key-monitor>
    <v-text-field label="Barcode" :value='barcode' :disabled="!nextbarcode.includes('barcode')"></v-text-field>
    <v-text-field label="Barcode2" :value='barcode2' :disabled="!nextbarcode.includes('barcode2')"></v-text-field>
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
      barcode: "",
      barcode2: "",
      nextbarcode: ['barcode', 'barcode2']
    };
  },
  methods: {
    onScan(value) {
      this[this.nextbarcode[0]] = value;
      this.nextbarcode.shift();
      /*
      if (this['barcode'] != ''){
        this['barcode2'] = value;
      }else{
        this['barcode'] = value;
      }
      */
    }
  }
};
</script>
