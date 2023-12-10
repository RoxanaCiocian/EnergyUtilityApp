<template>
  <v-card>
    <v-card-title>
      Devices - Client
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
    ></v-data-table>
    
    <v-btn @click="goToSensors">Go to sensors</v-btn>
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
  
    goToSensors() {
      router.push("/sensors/client");
    },
    async refreshList() {
      this.dialogVisible = false;
      
      const id = this.$store.getters["auth/getCustomerID"];
      //const id1 = this.$store.getters["auth/getCustomerDeviceID"];
      this.users = await api.devices.allDevicesForUser(id);
      
    },
  },

  async created() {
    console.log(this.$store.getters["auth/getCustomerID"]);
    
    const id = this.$store.getters["auth/getCustomerID"];
    this.users = await api.devices.allDevicesForUser(id);
    
    this.refreshList();
  },
};
</script>

<style scoped></style>
