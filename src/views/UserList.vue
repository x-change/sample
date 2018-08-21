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
              <td>{{ index + 1 }}</td>
              <td>{{ user.group }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>
                <button @click="handleRemoveUser(user.id)">Remove</button>
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
    }
  },
  methods: {
    handleRemoveUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  }
}
</script>

<style scoped>
.user-list {
  margin: auto;
}
</style>
