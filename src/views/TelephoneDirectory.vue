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
import { mapState, mapActions } from 'vuex';
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
    ...mapState(['users']),
    filteredUsersByGroup() {
      if (isEmpty(this.groupFilter)) return this.users;

      return this.users.filter(({ group }) => group === this.groupFilter);
    }
  },
  methods: {
    ...mapActions(['removeUser', 'addUser', 'updateUser']),
    handleRemoveUser(id) {
      this.removeUser(id);
    },
    handleAddUser(user) {
      this.addUser({
        ...user,
        id: new Date().getTime().toString()
      });
    },
    handleEditUser(user) {
      this.updateUser(user);
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
