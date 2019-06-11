
<template>
  <div>Barcode: {{barcode}}</div>
</template>

<script>
export default {
  data() {
    return {
      barcode: ""
    };
  },
  mounted() {
    window.addEventListener("keypress", e => {
      console.log(String.fromCharCode(e.keyCode));
      this.barcode += String.fromCharCode(e.keyCode);
    });
  }
};
</script>

<style scoped>
</style>