import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ImagePrefix from "../../helpers/ImagePrefix";
import MiniModelContainer from "./MiniModelContainer";

const MiniModel: React.FC = () => {
  const containerRef: React.LegacyRef<HTMLDivElement> = useRef(null)

  let renderer: THREE.WebGLRenderer | null = null

  const handleResize = useCallback(() => {
    const container: HTMLElement | null = containerRef.current

    if (container) {
      renderer?.setSize(container.clientWidth, container.clientHeight)
    }
  }, [])

  useEffect(() => {
    const container: HTMLElement | null = containerRef.current

    // initial values
    const prefix = ImagePrefix()

    // For the model => howel_breakfast (from Howel's moving castle) 
    // Can't decide between this and the other one
    //
    // const cameraPos = new THREE.Vector3(0, 5, 12)
    // const origin = new THREE.Vector3(0, 0, 0)
    // const modelPos = new THREE.Vector3(3, 0, 0)
    // const modelScale = 5
    // const modelRotationOffset = 0
    // const modelPath = prefix + '/model/howel_breakfast.glb'

    // For model => laptop.glb
    const cameraPos = new THREE.Vector3(0, 4, 12)
    const origin = new THREE.Vector3(0, 0, 0)
    const modelPos = new THREE.Vector3(-2, -2, 0)
    const modelScale = 1
    const modelRotationOffset = 11
    const modelPath = prefix + '/model/laptop.glb'

    if (container) {
      // Setup Renderer
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      renderer.setSize(containerWidth, containerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)

      // Setup Scene and Camera
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        40,
        containerWidth / containerHeight,
        1,
        1000
      )
      camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z)
      camera.lookAt(origin)

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      // Include orbital controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target = origin
      controls.autoRotate = true
      controls.autoRotateSpeed = 1
      controls.enableDamping = true
      controls.dampingFactor = 0.06

      // anim
      let animFrame: any = null
      const animate = () => {
        animFrame = requestAnimationFrame(animate)

        controls.update()

        renderer?.render(scene, camera)
      }

      // Handle resizing
      addEventListener("resize", handleResize)
      
      // load and play model
      const loader = new GLTFLoader()
      loader.load(modelPath, (gltf) => {
        const model = gltf.scene
        model.position.set(modelPos.x, modelPos.y, modelPos.z)
        model.scale.setScalar(modelScale)
        model.rotation.y += modelRotationOffset

        scene.add(model)

        animate()
      }, undefined, (e) => console.error(e))

      return () => {
        cancelAnimationFrame(animFrame)
        renderer?.domElement.remove()
        renderer?.dispose()
        removeEventListener("resize", handleResize)
      }
    }
  }, [handleResize])

  return (
    <MiniModelContainer containerRef={containerRef} />
  )
}

export default MiniModel
