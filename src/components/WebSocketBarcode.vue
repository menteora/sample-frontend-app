
<template>
  <div>Hi {{barcode}}</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      barcode: ""
    };
  },
  mounted() {
    this.$options.sockets.onmessage = data => {
      this.barcode = data;
      console.log(data);
    };
  }
};
</script>

<style scoped>
</style>