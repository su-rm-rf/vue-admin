<script lang="ts" setup>
  import { onMounted } from 'vue'
  import * as echarts from 'echarts'

  onMounted(() => {
    const dom = document.querySelector('#chart') as HTMLElement
    const myChart = echarts.init(dom)
    
    myChart.setOption({
      title: {
        text: '销售额',
      },
      tooltip: {},
      legend: {},
      xAxis: {
        data: ['米', '油', '盐', '酱', '醋', '茶'],
      },
      yAxis: {},
      series: [
        {
          name: '周一',
          type: 'bar',
          data: [350, 250, 100, 100, 80, 200],
        },
        {
          name: '周二',
          type: 'bar',
          data: [300, 200, 140, 110, 70, 180],
        },
        {
          name: '周三',
          type: 'bar',
          data: [400, 180, 120, 120, 60, 230],
        },
        {
          name: '周四',
          type: 'bar',
          data: [320, 210, 110, 110, 70, 210],
        },
        {
          name: '周五',
          type: 'bar',
          data: [370, 230, 130, 100, 90, 240],
        },
      ]
    })

    const dom2 = document.querySelector('#chart2') as HTMLElement
    const myChart2 = echarts.init(dom2)
    myChart2.setOption({
      title: {
        text: '销售额',
      },
      tooltip: {},
      dataset: {
        dimension: ['product', '米', '油', '盐', '酱', '醋', '茶'],
        source: [
          { 'product': '米', '周一': 350, '周二': 300, '周三': 400, '周四': 320, '周五': 370, },
          { 'product': '油', '周一': 250, '周二': 200, '周三': 180, '周四': 210, '周五': 230, },
          { 'product': '盐', '周一': 100, '周二': 140, '周三': 120, '周四': 110, '周五': 130, },
          { 'product': '酱', '周一': 100, '周二': 110, '周三': 120, '周四': 110, '周五': 100, },
          { 'product': '醋', '周一': 80, '周二': 70, '周三': 60, '周四': 70, '周五': 90, },
          { 'product': '茶', '周一': 200, '周二': 180, '周三': 230, '周四': 210, '周五': 240, },
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
      ]
    })

    const dom3 = document.querySelector('#chart3') as HTMLElement
    const myChart3 = echarts.init(dom3)
    myChart3.setOption({
      title: {
        text: '销售额',
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '米', '油', '盐', '酱', '醋', '茶'],
          ['周一', 350, 250, 100, 100, 80, 200],
          ['周二', 300, 200, 140, 110, 70, 180],
          ['周三', 400, 180, 120, 120, 60, 230],
          ['周四', 320, 210, 110, 110, 70, 210],
          ['周五', 370, 230, 130, 100, 90, 240],
        ]
      },
      legend: {
        orient: 'vertical',
        right: 60,
        top: 'center',
      },
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

    const dom4 = document.querySelector('#chart4') as HTMLElement
    const myChart4 = echarts.init(dom4)
    myChart4.setOption({
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
        type: 'category',
        name: '周几'
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
    myChart4.on('click', params => {
      window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(params.name + ' 买' + params.seriesName)}`)
    })

    window.onresize = () => {
      myChart.resize()
      myChart2.resize()
      myChart3.resize()
      myChart4.resize()
    }
  })
</script>
<template>
  <div>
    <div id="chart"></div>
    <div id="chart2"></div>
    <div id="chart3"></div>
    <div id="chart4"></div>
  </div>
</template>