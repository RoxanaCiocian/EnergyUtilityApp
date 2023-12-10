<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    :value="opened"
  >
    <template>
      <v-card>
        <v-toolbar color="primary" dark>
          {{ isNew ? "Create device" : "Edit device" }}
        </v-toolbar>
        <v-form>
          <v-text-field v-model="device.description" label="Description" />
          <v-text-field v-model="device.location" label="Location" />
          <v-text-field v-model="device.maxEnergyConsumption" label="Max en" />
          <v-text-field v-model="device.baseline" label="Baseline" />
          <v-text-field v-model="device.userId" label="User ID" />

          <!-- <v-text-field
            v-model="flight.available_seats"
            label="Available seats"
          />
          <v-text-field v-model="flight.ticket_price" label="Ticket price" /> -->
        </v-form>
        <v-card-actions>
          <v-btn @click="persist">
            {{ isNew ? "Create" : "Save" }}
          </v-btn>
          <v-btn @click="deleteDevice">Delete Device</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import api from "../api";
export default {
  name: "DeviceDialog",
  props: {
    device: Object,
    opened: Boolean,
  },
  methods: {
    persist() {
      if (this.isNew) {
        api.devices
          .createDevice({
            description: this.device.description,
            location: this.device.location,
            maxEnergyConsumption: this.device.maxEnergyConsumption,
            baseline: this.device.baseline,
            userId: this.device.userId,
          })
          .then(() => this.$emit("refresh"));
      } else {
        api.devices
          .editDevice(this.device.id, {
            id: this.device.id,
           description: this.device.description,
            location: this.device.location,
          })
          .then(() => this.$emit("refresh"));
      }
    },
    deleteDevice() {
      api.devices
        .deleteById(this.device.id)
        .then(() => this.$emit("refresh"));
    },
  },
  computed: {
    isNew: function () {
      return !this.device.id;
    },
  },
};
</script>

<style scoped></style>
