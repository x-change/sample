<template>
    <div class="hello-name">
        Hello {{ $route.params.name }}
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.hello-name {
    width: 100%;
    font-size: 30px;
    font-weight: 600;
}
</style>