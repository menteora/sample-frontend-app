
<template>
</template>

<script>
export default {
  props: {
    prefix: {
      type: Number,
      default: 35
    },
    suffix: {
      type: Number,
      default: 64
    }
  },
  data() {
    return {
      barcode: ""
    };
  },
  mounted() {
    window.addEventListener("keypress", e => {
      if (e.keyCode == this.prefix) {
        this.barcode = "";
      } else if (e.keyCode == this.suffix) {
        this.$emit("scanned", this.barcode);
        this.barcode = "";
      } else {
        this.barcode += String.fromCharCode(e.keyCode);
        console.log(this.barcode);
      }
    });
  }
};
</script>

<style scoped>
</style>