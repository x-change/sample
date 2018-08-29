<template>
  <div class="user-list">
    <h2>{{ title }}</h2>
    <user-search
      label="Group"
      :users="users"
      @change="groupFilter = arguments[0]"
    />
    <user-list 
      :users="filteredUsersByGroup"
      @addUser="handleAddUser"
      @editUser="handleEditUser"
      @removeUser="handleRemoveUser"
    />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

import UserSearch from "../components/UserSearch.vue";
import UserList from "../components/UserList.vue";

export default {
  name: "telephoneDirectory",
  data() {
    return {
      title: "Filter",
      groupFilter: ""
    };
  },
  computed: {
    filteredUsersByGroup() {
      if (isEmpty(this.groupFilter)) return this.users;

      return this.users.filter(({ group }) => group === this.groupFilter);
    },
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    handleRemoveUser(id) {
      this.$store.dispatch('removeUser', id);
    },
    handleAddUser({ group, name, phone }) {
      this.$store.dispatch('addUser', {
        group,
        name,
        phone,
        id: new Date().getTime().toString()
      });
    },
    handleEditUser({ group, name, phone, id }) {
      this.$store.dispatch('editUser', { group, name, phone, id });
    }
  },
  components: {
    UserSearch,
    UserList
  }
};
</script>

<style scoped>
.user-list {
  margin: auto;
}
</style>
