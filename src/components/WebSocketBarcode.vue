
<template>
  <div>Hi {{barcode}}</div>
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
      var barcode = barcodeScanRegExp.exec(event.data)[1]
      this.barcode = barcode;
      console.log(barcode);
    };
  }
};
</script>

<style scoped>
</style>