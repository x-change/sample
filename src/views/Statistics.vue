<template>
  <div class="statistics">
    <h2>{{ title }}</h2>
    <div class="statistics-bundles">
      <table>
        <thead>
          <tr>
            <td>Group</td>
            <td>Count</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(count, group) in countByGroup" :key="group">
            <td>{{ group }}</td>
            <td>{{ count }}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
        <tr>
          <td>Group</td>
          <td>Count</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(count, name) in countByName" :key="name">
          <td>{{ name }}</td>
          <td>{{ count }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: "statistics",
  data() {
    return {
      title: 'Statistics',
    };
  },
  computed: {
    countByGroup() {
      return this.$store.getters.countByGroup;
    },
    countByName() {
      return this.$store.getters.countByName;
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.statistics {
  margin: auto;
}

.statistics-bundles {
  display: flex;
  justify-content: space-evenly;
}

table thead td {
  font-weight: 600;
}
</style>
