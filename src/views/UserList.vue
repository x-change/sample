<template>
  <div class="user-list">
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
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
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
  }
}
</script>

<style scoped>
.user-list {
  margin: auto;
}
</style>
