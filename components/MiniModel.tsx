import React, { DOMElement, useCallback, useEffect, useRef } from "react";
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
      console.log("hi")
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      renderer.setSize(containerWidth, containerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        70,
        containerWidth / containerHeight,
        1,
        1000
      )
      camera.position.setZ(40)
      camera.position.setY(30)
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      container.appendChild(renderer.domElement)

      const geometry = new THREE.BoxGeometry(20, 20, 20)
      const material = new THREE.MeshStandardMaterial({color: 0xcccccc})
      const box = new THREE.Mesh(geometry, material)
      scene.add(box)

      const light = new THREE.AmbientLight(0xcccccc, 0.9)
      scene.add(light)

      const pointLight = new THREE.PointLight(0xcccccc, 1)
      pointLight.position.set(30, 30, 5)
      scene.add(pointLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target = new THREE.Vector3(0, 0, 0)
      controls.autoRotate = true
      controls.enableDamping = true
      controls.dampingFactor = 0.06
      controls.enablePan = false

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
