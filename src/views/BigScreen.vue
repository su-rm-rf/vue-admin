<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue'
  import * as echarts from 'echarts'

  const width = ref(window.innerWidth), height = ref(window.innerHeight-40)
  const title = '数据可视化系统'
  const percent = reactive({
    value: 66
  })
  const water = reactive({
    data: [67]
  })

  onMounted(() => {
    const dom = document.querySelector('#chart') as HTMLElement
    const myChart = echarts.init(dom)
    myChart.setOption({
      title: {
        text: '销售额',
      },
      tooltip: {},
      dataset: {
        dimension: ['product', '米', '油', '盐', '酱', '醋', '茶'],
        source: [
          { product: '周一', '米': 350, '油': 250, '盐': 100, '酱': 100, '醋': 80, '茶': 200 },
          { product: '周二', '米': 300, '油': 200, '盐': 140, '酱': 110, '醋': 70, '茶': 180 },
          { product: '周三', '米': 400, '油': 180, '盐': 120, '酱': 120, '醋': 60, '茶': 230 },
          { product: '周四', '米': 320, '油': 210, '盐': 110, '酱': 110, '醋': 70, '茶': 210 },
          { product: '周五', '米': 370, '油': 230, '盐': 130, '酱': 100, '醋': 90, '茶': 240 },
        ]
      },
      legend: {},
      xAxis: {
        type: 'category'
      },
      yAxis: {},
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
      ]
    })
    myChart.on('click', params => {
      window.open(`https://www.baidu.com/s?wd=` + encodeURIComponent(params.name + params.seriesName))
    })
  })
</script>

<template>
  <div>
    <div demo-bg :style="`width: ${width}px; height: ${height}px`">
      <dv-border-box11 :title="title" :title-width="400">
        <div style="padding: 60px 20px;">
          <div id="chart"></div>
          <dv-water-level-pond :config="water" style="width: 100px; height: 200px;"></dv-water-level-pond>
          <dv-percent-pond :config="percent" style="width: 200px; height: 50px;"></dv-percent-pond>1
        </div>
      </dv-border-box11>
    </div>
  </div>
</template>

<style>
</style>
