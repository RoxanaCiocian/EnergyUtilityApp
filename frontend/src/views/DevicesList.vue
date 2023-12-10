<template>
  <v-card>
    <v-card-title>
      Devices - Admin
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-btn @click="addUser">Add device</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      @click:row="editUser"
    ></v-data-table>
    <DeviceDialog
      :opened="dialogVisible"
      :device="selectedUser"
      @refresh="refreshList"
    >
    </DeviceDialog>
    <v-btn @click="goToUsers">Go to users</v-btn>
    <v-btn @click="goToSensors">Go to sensors</v-btn>
  </v-card>
</template>

<script>
import api from "../api";
import DeviceDialog from "../components/DeviceDialog";
import router from "../router";

export default {
  name: "DevicesList",
  components: { DeviceDialog },
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
        { text: "Location", value: "location" },
        { text: "User ID", value: "userId" },
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
      this.users = await api.devices.allDevices();
    },
    goToUsers() {
      router.push("/users");
    },
    goToSensors() {
      router.push("/sensors");
    },
  },

  async created() {
    this.users = await api.devices.allDevices();
  },
};
</script>

<style scoped></style>
