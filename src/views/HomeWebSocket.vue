<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg6>
        <v-card class="card--flex-toolbar">
          <web-socket-barcode @scanned="onScan"></web-socket-barcode>
          <v-card-text>
            <v-text-field
              label="Barcode"
              v-model="barcode"
              @keypress.enter="onScan(barcode)"
            ></v-text-field>
          </v-card-text>
        </v-card>

        <v-flex v-if="barcode_history" v-for="record in barcode_history" :key="record.id">
          <v-card class="my-3" hover>
            <v-card-title primary-title>{{record}}</v-card-title>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WebSocketBarcode from "@/components/WebSocketBarcode";

export default {
  components: {
    WebSocketBarcode
  },
  data() {
    return {
      barcode: "",
      barcode_history: []
    };
  },
  methods: {
    onScan(value) {
      //this[this.nextbarcode[0]] = value;
      //this.nextbarcode.shift();
      let data_read = {
        item: {
          code: value,
          title: "fake barcode",
          measure_unit_id: 6
        },
        read: {
          location_id: 1,
          project_id: 1,
          quantity: 1,
          read_typology_id: 2
        }
      };
      this.$store.dispatch("reads/create", data_read).then(data => {
        console.log(data);
        this.barcode_history.unshift(data.item.code);
        if (this.barcode_history.length > 5) {
          this.barcode_history.length = 5;
        }
        this.barcode = "";
      });
    },
  }
};
</script>
