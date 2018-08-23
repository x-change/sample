<template>
  <user-input
    v-if="isEditMode" 
    :seq="seq"
    :user="user" 
    button-text="Save"
    @buttonClick="handleEditUserEnd"
  />
  <tr v-else>
    <td>{{ seq}}</td>
    <td>{{ user.group }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.phone | phone}}</td>
    <td>
      <button @click="handleEditUserStart">Edit</button>
    </td>
    <td>
      <button @click="handleRemoveUser">Remove</button>
    </td>
  </tr>
</template>
<script>
import UserInput from './UserInput.vue';

export default {
  name: 'userItem',
  props: ['user', 'seq'],
  data () {
    return {
      isEditMode: false,
    }
  },
  methods: {
    handleEditUserStart () {
      this.isEditMode = true;
    },
    handleEditUserEnd (editUser) {
      this.$emit('editUser', {...this.user, ...editUser});
      this.isEditMode = false;
    },
    handleRemoveUser () {
      this.$emit('removeUser', this.user.id);
    }
  },
  filters: {
    phone (value) {
      return value.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  },
  components: {
    UserInput,
  }
}
</script>
