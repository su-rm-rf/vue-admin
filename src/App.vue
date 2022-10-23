<script lang="ts" setup>
</script>

<template>
  <nav class="nav-header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/element">Element</RouterLink>
    <RouterLink to="/eCharts">ECharts</RouterLink>
    <RouterLink to="/threejs">Threejs</RouterLink>
    <RouterLink to="/bigscreen">BigScreen</RouterLink>
  </nav>
  <div class="content-body">
    <RouterView />
  </div>
</template>