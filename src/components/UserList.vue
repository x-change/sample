<template>
  <table>
    <thead>
      <tr>
          <th>#</th>
          <th>Group</th>
          <th>Name</th>
          <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <user-item
        v-for="(user, index) in users"
        :key="user.id"
        :seq="index + 1"
        :user="user"
        @editUser="handleEditUser"
        @removeUser="handleRemoveUser"
      />
      <user-input 
        button-text="Add"
        seq="NEW"
        @buttonClick="handleAddUser"
      />
    </tbody>
  </table>
</template>
<script>
import UserInput from '../components/UserInput.vue';
import UserItem from '../components/UserItem.vue';

export default {
  name: "UserList",
  props: ["users"],
  data () {
    return {
      editId: null,
    }
  },
  methods: {
    handleRemoveUser(id) {
      this.$emit('removeUser', id);
    },
    handleAddUser(user) {
      this.$emit('addUser', user);
    },
    handleEditUser(user) {
      this.$emit('editUser', user);
    },
  },
  components: {
    UserInput,
    UserItem,
  }
};
</script>