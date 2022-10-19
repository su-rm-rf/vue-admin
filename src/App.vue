<script lang="ts" setup>
</script>

<template>
  <nav class="nav-header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/product">Product</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <div class="content-body">
    <RouterView />
  </div>
</template>