<template>
  <div class="user-list">
    <h2>{{ title }}</h2>
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
            <tr v-for="(user, index) in users" :key="user.id">
              <template v-if="editId === user.id">
                <td>{{ index + 1 }}</td>
                <td><input type="text" placeholder="Group" v-model="group"></td>
                <td><input type="text" placeholder="Name" v-model="name"></td>
                <td><input type="text" placeholder="Phone" v-model="phone"></td>
                <td @click="handleEditUserEnd">
                  <button>Save</button>
                </td>
              </template>
              <template v-else>
                <td>{{ index + 1 }}</td>
                <td>{{ user.group }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.phone }}</td>
                <td>
                  <button @click="handleEditUserStart(user.id)">Edit</button>
                </td>
                <td>
                  <button @click="handleRemoveUser(user.id)">Remove</button>
                </td>
              </template>
          </tr>
          <tr v-show="editId === null">
            <td>New</td>
            <td><input type="text" placeholder="Group" v-model="group"/></td>
            <td><input type="text" placeholder="Name" v-model="name"/></td>
            <td><input
                type="text"
                placeholder="Phone"
                v-model="phone"
                @keyup.ctrl.enter="handleAddUser"
            />
            </td>
            <td>
              <button type="button" @click="handleAddUser">Add</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      title: 'Basic List',
      users: [
        {
          id: '1', name: 'Tony', phone: '01099128812', group: 'Red',
        },
        {
          id: '2', name: 'Leo', phone: '01099128813', group: 'Blue',
        },
        {
          id: '3', name: 'Bell', phone: '01012345678', group: 'Red',
        },
        {
          id: '4', name: 'Lee', phone: '01043621234', group: 'Yellow',
        },
      ],
      group: '',
      name: '',
      phone: '',
      editId: null,
    }
  },
  methods: {
    handleRemoveUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
    handleAddUser() {
      const {group, name, phone} = this;

      this.users.push({
        group, name, phone,
        id: new Date().getTime().toString(),
      });

      this.clearUserInput();
    },
    handleEditUserStart(id) {
      this.clearUserInput();
      this.editId = id;
      
      const {group, name, phone} = this.users.find(user => user.id === id);
      this.group = group;
      this.name = name;
      this.phone = phone;
    },
    handleEditUserEnd() {
      const {group, name, phone} = this;

      const userIndex = this.users.findIndex(({id}) => id === this.editId);

      this.$set(this.users, userIndex, {group, name, phone, id: this.editId});
      // 아래와 같다.
      // const newUsers = [...this.users];
      // newUsers[userIndex] = {group, name, phone};
      //
      // this.users = newUsers;


      this.editId = null;
      this.clearUserInput();
    },
    clearUserInput() {
      this.group = '';
      this.name = '';
      this.phone = '';
    },
  }
}
</script>

<style scoped>
.user-list {
  margin: auto;
}
</style>
