<script lang="ts" setup>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'

  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

  const store = useStore()

  const count = computed(() => store.state.count)
  // const double = computed(() => store.getters.double)
  const increment = () => store.commit('increment')
  // const asyncIncrement = () => store.dispatch('asyncIncrement')


  const scene = new THREE.Scene()
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5),
    pointLight = new THREE.PointLight(0xffffff, 0.4)
  pointLight.position.set(200, 300, 400)

  scene.add(ambientLight)
  scene.add(pointLight)

  const width = window.innerWidth, height = window.innerHeight - 100
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)

  camera.position.set(200, 200, 200)
  camera.lookAt(0, 0, 0)

  const axesHelper = new THREE.AxesHelper(100)
  scene.add(axesHelper)

  // 对象、材质、网格，加入到场景中
  const geometry = new THREE.BoxGeometry(100, 100, 100)
  const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  renderer.render(scene, camera)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', () => {
    renderer.render(scene, camera)
  })
  onMounted(() => {
    document.querySelector('.threejs')?.appendChild(renderer.domElement)
  })
</script>
<template>
  <div>
    about {{ count }}
    <div class="threejs"></div>
  </div>
</template>