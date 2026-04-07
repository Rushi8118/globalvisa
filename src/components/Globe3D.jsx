import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Globe3D({ size = 500 }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth || size
    const height = mount.clientHeight || size

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 2.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Globe sphere
    const geometry = new THREE.SphereGeometry(1, 64, 64)

    // Create canvas texture for the globe
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1024
    const ctx = canvas.getContext('2d')

    // Deep ocean gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 1024)
    grad.addColorStop(0, '#0d1b4b')
    grad.addColorStop(0.5, '#0f2560')
    grad.addColorStop(1, '#0a1535')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 2048, 1024)

    // Draw lat/lon grid lines
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)'
    ctx.lineWidth = 1

    // Longitude lines
    for (let lon = -180; lon <= 180; lon += 15) {
      const x = ((lon + 180) / 360) * 2048
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 1024)
      ctx.stroke()
    }

    // Latitude lines
    for (let lat = -90; lat <= 90; lat += 15) {
      const y = ((90 - lat) / 180) * 1024
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(2048, y)
      ctx.stroke()
    }

    // Draw simple continent shapes
    ctx.fillStyle = 'rgba(99, 102, 241, 0.35)'
    ctx.strokeStyle = 'rgba(129, 140, 248, 0.6)'
    ctx.lineWidth = 1.5

    const drawContinent = (points) => {
      if (points.length < 2) return
      ctx.beginPath()
      const [x0, y0] = points[0]
      ctx.moveTo(x0, y0)
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1])
      }
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
    }

    // North America (simplified)
    drawContinent([
      [200, 140], [320, 100], [420, 110], [480, 160], [500, 240],
      [440, 330], [380, 380], [300, 420], [240, 400], [180, 340],
      [160, 260], [180, 190]
    ])

    // South America
    drawContinent([
      [310, 430], [380, 410], [430, 460], [450, 560], [420, 660],
      [360, 740], [290, 760], [250, 700], [240, 600], [260, 500]
    ])

    // Europe
    drawContinent([
      [860, 110], [940, 90], [1010, 120], [1040, 180], [980, 230],
      [920, 250], [870, 220], [840, 170]
    ])

    // Africa
    drawContinent([
      [900, 260], [980, 240], [1060, 280], [1100, 380], [1080, 500],
      [1020, 620], [940, 680], [860, 640], [820, 520], [840, 400], [870, 310]
    ])

    // Asia
    drawContinent([
      [1040, 120], [1200, 80], [1450, 100], [1600, 140], [1650, 220],
      [1580, 320], [1480, 380], [1350, 360], [1250, 300], [1150, 280],
      [1080, 240], [1040, 190]
    ])

    // Australia
    drawContinent([
      [1500, 520], [1600, 500], [1660, 540], [1680, 620], [1640, 680],
      [1560, 700], [1480, 660], [1450, 590]
    ])

    // Add glowing dots for major cities
    const cities = [
      [400, 200], [480, 220], [870, 170], [1050, 170], [1180, 200],
      [1380, 210], [1520, 560], [320, 500], [1000, 340], [1600, 180]
    ]

    cities.forEach(([x, y]) => {
      const grd = ctx.createRadialGradient(x, y, 0, x, y, 8)
      grd.addColorStop(0, 'rgba(251, 191, 36, 0.9)')
      grd.addColorStop(0.5, 'rgba(245, 158, 11, 0.4)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.beginPath()
      ctx.arc(x, y, 8, 0, Math.PI * 2)
      ctx.fill()
    })

    const texture = new THREE.CanvasTexture(canvas)

    const material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
    })

    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    // Atmosphere glow
    const atmosphereGeo = new THREE.SphereGeometry(1.06, 64, 64)
    const atmosphereMat = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat)
    scene.add(atmosphere)

    // Outer glow ring
    const ringGeo = new THREE.TorusGeometry(1.12, 0.015, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.4 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2
    scene.add(ring)

    // Particles around globe
    const particleCount = 300
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const r = 1.3 + Math.random() * 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0x818cf8, size: 0.008, transparent: true, opacity: 0.6 })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)

    const dirLight = new THREE.DirectionalLight(0xfbbf24, 1.5)
    dirLight.position.set(5, 3, 5)
    scene.add(dirLight)

    const blueLight = new THREE.PointLight(0x6366f1, 1, 10)
    blueLight.position.set(-3, -2, -3)
    scene.add(blueLight)

    // Mouse interaction
    let mouseX = 0, mouseY = 0
    const handleMouse = (e) => {
      const rect = mount.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    mount.addEventListener('mousemove', handleMouse)

    // Animation
    let frameId
    let time = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.005

      globe.rotation.y += 0.002 + mouseX * 0.001
      globe.rotation.x += mouseY * 0.0005

      atmosphere.rotation.y = globe.rotation.y
      ring.rotation.z = time * 0.3

      particles.rotation.y += 0.001
      particles.rotation.x = Math.sin(time) * 0.05

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      mount.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [size])

  return <div ref={mountRef} className="w-full h-full" />
}