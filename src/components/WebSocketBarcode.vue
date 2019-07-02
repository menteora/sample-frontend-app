
<template>
</template>

<script>
var barcodeScanRegExp = /Barcode \((.*)\) \[(.*)\]/;

export default {
  props: {},
  data() {
    return {
      barcode: ""
    };
  },
  mounted() {
    this.$options.sockets.onmessage = event => {
      var barcode = barcodeScanRegExp.exec(event.data)[1];
      this.barcode = barcode;
      console.log(barcode);
      this.$emit("scanned", this.barcode);
    };
  },
  beforeDestroy() {
    delete this.$options.sockets.onmessage;
    console.log("web socket on message destroyed");
  }
};
</script>

<style scoped>
</style>