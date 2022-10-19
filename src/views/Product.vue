<script lang="ts" setup>
  import { computed, ref, onMounted } from 'vue'
  import { useStore } from 'vuex'

  import * as echarts from 'echarts'

  const store = useStore()

  const count = computed(() => store.state.count)
  // const double = computed(() => store.getters.double)
  const increment = () => store.commit('increment')
  // const asyncIncrement = () => store.dispatch('asyncIncrement')

  onMounted(() => {
    const dom = document.querySelector('#chart') as HTMLElement
    const myChart = echarts.init(dom)
    myChart.setOption({
      title: {
        text: '周销量',
      },
      tooltip: {},
      xAxis: {
        data: ['一', '二', '三', '四', '五', '六', '日'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [150, 230, 140, 170, 220, 180, 260, 210]
        }
      ]
    })
  })
</script>
<template>
  <div>
    product {{ count }}
    <div id="chart"></div>
  </div>
</template>