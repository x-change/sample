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
      users: [
        {
          id: "1",
          name: "Tony",
          phone: "01099128812",
          group: "Red"
        },
        {
          id: "2",
          name: "Leo",
          phone: "01099128813",
          group: "Blue"
        },
        {
          id: "3",
          name: "Bell",
          phone: "01012345678",
          group: "Red"
        },
        {
          id: "4",
          name: "Lee",
          phone: "01043621234",
          group: "Yellow"
        }
      ],
      groupFilter: ""
    };
  },
  computed: {
    filteredUsersByGroup() {
      if (isEmpty(this.groupFilter)) return this.users;

      return this.users.filter(({ group }) => group === this.groupFilter);
    }
  },
  methods: {
    handleRemoveUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    },
    handleAddUser({ group, name, phone }) {
      this.users.push({
        group,
        name,
        phone,
        id: new Date().getTime().toString()
      });
    },
    handleEditUser({ group, name, phone, id }) {
      const userIndex = this.users.findIndex(({ id: userId }) => userId === id);

      this.$set(this.users, userIndex, { group, name, phone, id });
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
