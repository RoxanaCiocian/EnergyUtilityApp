<template>
  <v-card>
    <v-card-title>
      Users - Admin
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-btn @click="addUser">Add user</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      @click:row="editUser"
    ></v-data-table>
    <UserDialog
      :opened="dialogVisible"
      :user="selectedUser"
      @refresh="refreshList"
    >
    </UserDialog>
    <v-btn @click="goToDevices">Go to devices</v-btn>
    <v-btn @click="goToSensors">Go to sensors</v-btn>
  </v-card>
</template>

<script>
import api from "../api";
import UserDialog from "../components/UserDialog";
import router from "../router";

export default {
  name: "UserList",
  components: { UserDialog },
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
        { text: "Username", value: "username" },
        { text: "Name", value: "name" },
        { text: "Birthday", value: "birthday" },
        { text: "Adress", value: "address" },
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
      this.users = await api.users.allUsers();
    },
    goToDevices() {
      router.push("/devices");
    },
    goToSensors() {
      router.push("/sensors");
    },
  },

  async created() {
    this.users = await api.users.allUsers();
  },
};
</script>

<style scoped></style>
