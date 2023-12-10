<template>
  <v-card>
    <v-card-title>
      Values - Client
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
    <v-btn @click="goToSensors">Go to sensors</v-btn>
  </v-card>
</template>

<script>
import api from "../api";
import router from "../router";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";

export default {
  name: "DevicesList",
  //components: ClientListSensorsVue,
  data() {
    return {
      users: [],
      search: "",
      headers: [
        {
          text: "Timestamp",
          align: "start",
          sortable: false,
          value: "timeStamp",
        },
        { text: "Value", value: "value" },
        { text: "Sensor ID", value: "sensorId" },
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
    async refreshList() {
      this.dialogVisible = false;
      this.selectedUser = {};
    //   const id = ClientListSensorsVue.id;
    //   console.log(id);
      this.users = await api.values.allValuess();
    },
    goToSensors() {
        router.push("/sensors/client");
    },
  },

  async created() {
    this.users = await api.values.allValuess();
    this.refreshList();
    this.stompClient = Stomp.over(
      new SockJS("http://localhost:8080/gs-guide-websocket")
    );
    this.stompClient.connect(
      {},
      (frame) => {
        this.connected = true;
        console.log(frame);
        this.stompClient.subscribe("/sensors/client/values", (message) => {
          console.log(message);
          alert(message.body);
        });
      },
      (error) => {
        console.log(error);
        this.connected = false;
      }
    );
  },
};
</script>

<style scoped></style>
