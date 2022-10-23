<script lang="ts" setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const count = computed(() => store.state.count)
  // const double = computed(() => store.getters.double)
  const increment = () => store.commit('increment')
  // const asyncIncrement = () => store.dispatch('asyncIncrement')
</script>
<template>
  <div>
    home {{ count }}
    <button @click="increment">增加</button>
  </div>
</template>