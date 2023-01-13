import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

      // Setup Scene and Camera
      const origin = new THREE.Vector3(0, 0, 0)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        70,
        containerWidth / containerHeight,
        1,
        1000
      )
      camera.position.setZ(40)
      camera.position.setY(25)
      camera.lookAt(origin)

      container.appendChild(renderer.domElement)

      // Add items to scene
      const geometry = new THREE.BoxGeometry(30, 30, 30)
      const material = new THREE.MeshBasicMaterial({color: 0xaaaaaa, wireframe: true})
      const box = new THREE.Mesh(geometry, material)
      scene.add(box)

      // Include orbital controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target = origin
      controls.autoRotate = true
      controls.autoRotateSpeed = 2.5
      controls.enableDamping = true
      controls.dampingFactor = 0.06

      let animFrame: any = null
      const animate = () => {
        animFrame = requestAnimationFrame(animate)

        controls.update()

        renderer.render(scene, camera)
      }

      addEventListener("resize", handleResize)
      animate()

      return () => {
        cancelAnimationFrame(animFrame)
        renderer.domElement.remove()
        renderer.dispose()
        removeEventListener("resize", handleResize)
      }
    }
  }, [])

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
