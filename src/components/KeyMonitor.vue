
<!--<template>
  <div>Barcode: {{barcode}}</div>
</template>-->

<script>
export default {
  props: {
    suffix: {
      type: Number,
      default: 13
    }
  },
  data() {
    return {
      barcode: ""
    };
  },
  mounted() {
    window.addEventListener("keypress", e => {
    console.log(this.suffix);
    console.log(e.keyCode);
      if (e.keyCode == this.suffix) {
        this.$emit("scanned", this.barcode);
        this.barcode = "";
        return;
      }
      this.barcode += String.fromCharCode(e.keyCode);
    });
  }
};
</script>

<style scoped>
</style>