<template>
  <v-card>
    <v-card-title>
      Sensors - Client
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
       @click:row="editUser"
    ></v-data-table>
    <v-btn @click="goToDevices">Go to devices</v-btn>
  </v-card>
</template>

<script>
import api from "../api";
import router from "../router";

export default {
  name: "DevicesList",
  components: {},
  data() {
    return {
      users: [],
      props: ['id'],
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Description", value: "description" },
        { text: "Max value", value: "maxValue" },
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
      //console.log(user.id);
      router.push("/sensors/client/values");
    },
    
    goToDevices() {
      router.push("/devices/client");
    },
    async refreshList() {
      this.dialogVisible = false;
      const id = this.$store.getters["auth/getCustomerID"];
      //const id1 = this.$store.getters["auth/getCustomerDeviceID"];
      this.users = await api.sensors.allSensorsForDevice(id);
      
      
    },
  },

  async created() {
    console.log(this.$store.getters["auth/getCustomerID"]);
    
    const id = this.$store.getters["auth/getCustomerID"];
    this.users = await api.sensors.allSensorsForDevice(id);   
    
    this.refreshList();
    
  },
};
</script>

<style scoped></style>