<template>
  <v-card>
    <v-card-title>
      Sensors - Admin
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-btn @click="addUser">Add sensor</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      @click:row="editUser"
    ></v-data-table>
    <SensorDialog
      :opened="dialogVisible"
      :sensor="selectedUser"
      @refresh="refreshList"
    >
    </SensorDialog>
    <v-btn @click="goToUsers">Go to users</v-btn>
    <v-btn @click="goToDevices">Go to devices</v-btn>
  </v-card>
</template>

<script>
import api from "../api";
import SensorDialog from "../components/SensorDialog";
import router from "../router";

export default {
  name: "DevicesList",
  components: { SensorDialog },
  data() {
    return {
      users: [],
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Description", value: "description" },
        { text: "Maximum value", value: "maxValue" },
        { text: "Device ID", value: "deviceId" },
        // { text: "Roles", value: "roles" },
      ],
      dialogVisible: false,
      selectedUser: {},
    };
  },

  methods: {
    editUser(user) {
      this.selectedUser = user;
      this.dialogVisible = true;
    },
    addUser() {
      this.dialogVisible = true;
    },
    async refreshList() {
      this.dialogVisible = false;
      this.selectedUser = {};
      this.users = await api.sensors.allSensors();
    },
    goToUsers() {
      router.push("/users");
    },
    goToDevices() {
        router.push("/devices");
    },
  },

  async created() {
    this.users = await api.sensors.allSensors();
  },
};
</script>

<style scoped></style>
