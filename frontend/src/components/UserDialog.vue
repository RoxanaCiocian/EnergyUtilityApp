<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    :value="opened"
  >
    <template>
      <v-card>
        <v-toolbar color="primary" dark>
          {{ isNew ? "Create user" : "Edit user" }}
        </v-toolbar>
        <v-form>
          <v-text-field v-model="user.username" label="Username" />
          <v-text-field v-model="user.address" label="Address" />
          <v-text-field v-model="user.password" label="Password" />
          <v-text-field v-model="user.name" label="Name" />
          <v-text-field v-model="user.birthday" label="Birthday" />
        </v-form>
        <v-card-actions>
          <v-btn @click="persist">
            {{ isNew ? "Create" : "Save" }}
          </v-btn>
          <v-btn @click="deleteUser">Delete User</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import api from "../api";
export default {
  name: "UserDialog",
  props: {
    user: Object,
    opened: Boolean,
  },
  methods: {
    persist() {
      if (this.isNew) {
        api.users
          .create({
            username: this.user.username,
            address: this.user.address,
            password: this.user.password,
            name: this.user.name,
            birthday: this.user.birthday,
          })
          .then(() => this.$emit("refresh"));
      } else {
        api.users
          .edit(this.user.id, {
            id: this.user.id,
            username: this.user.username,
            address: this.user.address,
            password: this.user.password,
            name: this.user.name,
            birthday: this.user.birthday,
          })
          .then(() => this.$emit("refresh"));
      }
    },
    deleteUser() {
      api.users.deleteById(this.user.id).then(() => this.$emit("refresh"));
    },
  },
  computed: {
    isNew: function () {
      return !this.user.id;
    },
  },
};
</script>

<style scoped></style>
