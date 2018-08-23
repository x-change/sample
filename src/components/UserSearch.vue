<template>
  <div>
    <label for="search">{{ label }}</label>
    <select id="search" :value="searchValue" @change="handleSearchValueChange">
      <option selected value="">All</option>
      <option v-for="group in groups" :key="group" :value="group">{{ group }}</option>
    </select>
  </div>
</template>
<script>
import uniq from 'lodash/uniq';

export default {
  name: "userSearch",
  props: ['label', 'users'],
  data () {
    return {
      searchValue: '',
    }
  },
  computed: {
    groups() {
      return uniq(this.users.map(({group}) => group));
    },
  },
  methods: {
    handleSearchValueChange ({ target: { value } }) {
      this.$emit('change', value);
    }
  },
};
</script>