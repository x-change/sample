<template>
    <div class="hello-name">
        <div>
            Hello {{ $route.params.name }}
        </div>
        <div>
            <input v-model="name" />
            <button @click="handleClick">Move</button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
      };
    },
    methods: {
      handleClick() {
        this.$router.push(`/hello/${this.name}`);
      },
    },
  }
</script>

<style scoped>
.hello-name {
    width: 100%;
    font-size: 30px;
    font-weight: 600;
}
</style>