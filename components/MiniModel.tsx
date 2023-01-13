import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ImagePrefix from "../helpers/ImagePrefix";

const MiniModel: React.FC = () => {
  const containerRef: React.RefObject<HTMLElement> | any = useRef(null)

  let renderer: THREE.WebGLRenderer | any = null

  const handleResize = useCallback(() => {
    const container: HTMLElement | null = containerRef.current

    if (container) {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  }, [])

  useEffect(() => {
    const container: HTMLElement | null = containerRef.current

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
      const origin = new THREE.Vector3(0, 20, 0)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        40,
        containerWidth / containerHeight,
        1,
        1000
      )
      camera.position.set(30, 40, 50)
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

        renderer.render(scene, camera)
      }

      // Handle resizing
      addEventListener("resize", handleResize)
      
      // load and play model
      const loader = new GLTFLoader()
      const prefix = ImagePrefix()
      loader.load(prefix + '/model/howel_breakfast.glb', (gltf) => {
        const model = gltf.scene
        model.position.set(0, 20, 0)
        model.scale.set(20, 20, 20)
        model.rotation.y -= 30

        scene.add(model)

        animate()
      }, undefined, (e) => console.error(e))

      return () => {
        cancelAnimationFrame(animFrame)
        renderer.domElement.remove()
        renderer.dispose()
        removeEventListener("resize", handleResize)
      }
    }
  }, [handleResize])

  return (
    <div className="
      w-[366px] 
      h-[240px] 
      lg:h-[380px] 
      lg:w-[580px] 
      mt-[70px]
      bg-[#F9F3DF]
      dark:bg-[#1c1c1c]
      " 
    ref={containerRef} />
  )
}

export default MiniModel
