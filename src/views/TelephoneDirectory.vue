<template>
  <div class="user-list">
    <h2>{{ title }}</h2>
    <user-search
      label="Group"
      :users="users"
      @change="handleGroupFilterChange"
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
import { mapState, mapActions, mapGetters } from 'vuex';

import UserSearch from "../components/UserSearch.vue";
import UserList from "../components/UserList.vue";

export default {
  name: 'telephoneDirectory',
  data() {
    return {
      title: 'Filter',
    };
  },
  computed: {
    ...mapState(['users', 'groupFilter']),
    ...mapGetters(['filteredUsersByGroup']),
  },
  methods: {
    ...mapActions([
        'removeUser',
        'addUser',
        'updateUser',
        'changeGroupFilter',
        'fetchUserList',
    ]),
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
    },
    handleGroupFilterChange(groupFilter) {
      this.changeGroupFilter(groupFilter);
    }
  },
  created() {
    this.fetchUserList();
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
