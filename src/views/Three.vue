<script lang="ts" setup>
  import { onMounted } from 'vue'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  
  // 创建一个三维场景
  const scene = new THREE.Scene()
  // 创建一个透视相机，width/height是整个画布的宽高度
  const width = window.innerWidth, height = window.innerHeight - 100
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // 创建一个网格模型
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  function animate() {
    // 动起来
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  
  // 创建一个WebGL渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight - 100)
  animate()

  // 轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', () => {
    renderer.render(scene, camera)
  })
  onMounted(() => {
    // 将渲染器绘制出的canvas添加到页面中
    document.querySelector('.threejs')?.appendChild(renderer.domElement)
  })
</script>

<template>
  <div class="threejs">
  </div>
</template>