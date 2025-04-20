// 3D Animation for Hero Section
let heroScene, heroCamera, heroRenderer, heroParticles
const heroCanvas = document.getElementById("hero-canvas")

// 3D Animation for Product Showcase
let productScene, productCamera, productRenderer, productControls
const productModels = []
let currentProductIndex = 0
const productCanvas = document.getElementById("product-canvas")
const productPrevBtn = document.getElementById("product-prev")
const productNextBtn = document.getElementById("product-next")

// Initialize Three.js (if not already included)
if (typeof THREE === "undefined") {
  window.THREE = {}
}

// Initialize 3D animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize hero animation
  initHeroAnimation()

  // Initialize product showcase
  initProductShowcase()

  // Add event listeners for product navigation
  if (productPrevBtn && productNextBtn) {
    productPrevBtn.addEventListener("click", showPreviousProduct)
    productNextBtn.addEventListener("click", showNextProduct)
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    // Resize hero animation
    if (heroRenderer && heroCamera) {
      heroCamera.aspect = window.innerWidth / (window.innerHeight * 0.7)
      heroCamera.updateProjectionMatrix()
      heroRenderer.setSize(window.innerWidth, window.innerHeight * 0.7)
    }

    // Resize product showcase
    if (productRenderer && productCamera) {
      const container = productCanvas.parentElement
      const width = container.clientWidth
      const height = container.clientHeight

      productCamera.aspect = width / height
      productCamera.updateProjectionMatrix()
      productRenderer.setSize(width, height)
    }
  })
})

// Initialize Hero Animation with Particles
function initHeroAnimation() {
  if (!heroCanvas) return

  // Create scene
  heroScene = new THREE.Scene()

  // Create camera
  heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.7), 0.1, 1000)
  heroCamera.position.z = 20

  // Create renderer
  heroRenderer = new THREE.WebGLRenderer({
    canvas: heroCanvas,
    alpha: true,
    antialias: true,
  })
  heroRenderer.setSize(window.innerWidth, window.innerHeight * 0.7)
  heroRenderer.setPixelRatio(window.devicePixelRatio)

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 1000

  const posArray = new Float32Array(particlesCount * 3)
  const colorsArray = new Float32Array(particlesCount * 3)

  // Fill positions and colors arrays
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Positions - random in a sphere
    posArray[i] = (Math.random() - 0.5) * 40
    posArray[i + 1] = (Math.random() - 0.5) * 40
    posArray[i + 2] = (Math.random() - 0.5) * 40

    // Colors - gradient from blue to purple
    colorsArray[i] = 0.3 + Math.random() * 0.2 // R
    colorsArray[i + 1] = 0.2 + Math.random() * 0.1 // G
    colorsArray[i + 2] = 0.8 + Math.random() * 0.2 // B
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))

  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  })

  // Create particles
  heroParticles = new THREE.Points(particlesGeometry, particlesMaterial)
  heroScene.add(heroParticles)

  // Animation loop
  function animateHero() {
    requestAnimationFrame(animateHero)

    // Rotate particles
    heroParticles.rotation.x += 0.0005
    heroParticles.rotation.y += 0.001

    // Render
    heroRenderer.render(heroScene, heroCamera)
  }

  animateHero()
}

// Initialize Product Showcase with 3D Models
function initProductShowcase() {
  if (!productCanvas) return

  const container = productCanvas.parentElement
  const width = container.clientWidth
  const height = container.clientHeight

  // Create scene
  productScene = new THREE.Scene()
  productScene.background = new THREE.Color(0xf8f9fa)

  // Create camera
  productCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  productCamera.position.z = 5

  // Create renderer
  productRenderer = new THREE.WebGLRenderer({
    canvas: productCanvas,
    antialias: true,
  })
  productRenderer.setSize(width, height)
  productRenderer.setPixelRatio(window.devicePixelRatio)
  productRenderer.shadowMap.enabled = true

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  productScene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 5)
  directionalLight.castShadow = true
  productScene.add(directionalLight)

  // Create simple 3D models for products
  createProductModels()

  // Add orbit controls for interaction
  productControls = new THREE.OrbitControls(productCamera, productRenderer.domElement)
  productControls.enableDamping = true
  productControls.dampingFactor = 0.05
  productControls.maxDistance = 10
  productControls.minDistance = 2

  // Animation loop
  function animateProduct() {
    requestAnimationFrame(animateProduct)

    // Update controls
    productControls.update()

    // Render
    productRenderer.render(productScene, productCamera)
  }

  animateProduct()

  // Show first product
  showProduct(0)
}

// Create simple 3D models for products
function createProductModels() {
  // Create models based on product categories

  // 1. Headphones/Earbuds model
  const earbudsModel = new THREE.Group()

  // Left earbud
  const leftEarbud = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshPhongMaterial({ color: 0x333333, shininess: 100 }),
  )
  leftEarbud.position.set(-1, 0, 0)
  earbudsModel.add(leftEarbud)

  // Right earbud
  const rightEarbud = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshPhongMaterial({ color: 0x333333, shininess: 100 }),
  )
  rightEarbud.position.set(1, 0, 0)
  earbudsModel.add(rightEarbud)

  // Connection wire
  const wireCurve = new THREE.CubicBezierCurve3(
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-0.5, -1, 0),
    new THREE.Vector3(0.5, -1, 0),
    new THREE.Vector3(1, 0, 0),
  )

  const wireGeometry = new THREE.TubeGeometry(wireCurve, 20, 0.05, 8, false)
  const wireMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 })
  const wire = new THREE.Mesh(wireGeometry, wireMaterial)
  earbudsModel.add(wire)

  earbudsModel.visible = false
  productScene.add(earbudsModel)
  productModels.push(earbudsModel)

  // 2. Charger model
  const chargerModel = new THREE.Group()

  // Charger body
  const chargerBody = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.5, 1),
    new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 50 }),
  )
  chargerModel.add(chargerBody)

  // USB port
  const usbPort = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.2), new THREE.MeshPhongMaterial({ color: 0x666666 }))
  usbPort.position.set(0, 0, -0.5)
  chargerModel.add(usbPort)

  // Power prongs
  const prongs = new THREE.Group()

  const prong1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.3, 0.1),
    new THREE.MeshPhongMaterial({ color: 0xcccccc, metalness: 0.8 }),
  )
  prong1.position.set(-0.2, 0, 0.5)
  prongs.add(prong1)

  const prong2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.3, 0.1),
    new THREE.MeshPhongMaterial({ color: 0xcccccc, metalness: 0.8 }),
  )
  prong2.position.set(0.2, 0, 0.5)
  prongs.add(prong2)

  chargerModel.add(prongs)

  chargerModel.visible = false
  productScene.add(chargerModel)
  productModels.push(chargerModel)

  // 3. Speaker model
  const speakerModel = new THREE.Group()

  // Speaker body
  const speakerBody = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 2, 32),
    new THREE.MeshPhongMaterial({ color: 0x222222, shininess: 30 }),
  )
  speakerModel.add(speakerBody)

  // Speaker grill
  const speakerGrill = new THREE.Mesh(
    new THREE.CircleGeometry(0.8, 32),
    new THREE.MeshPhongMaterial({ color: 0x444444, wireframe: true }),
  )
  speakerGrill.position.set(0, 0, 1.01)
  speakerGrill.rotation.x = Math.PI / 2
  speakerModel.add(speakerGrill)

  // Control buttons
  const buttonGroup = new THREE.Group()
  buttonGroup.position.set(0, 0.8, 0.8)

  const button1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
    new THREE.MeshPhongMaterial({ color: 0x4f46e5 }),
  )
  button1.position.set(-0.3, 0, 0)
  button1.rotation.x = Math.PI / 2
  buttonGroup.add(button1)

  const button2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
    new THREE.MeshPhongMaterial({ color: 0xf59e0b }),
  )
  button2.position.set(0, 0, 0)
  button2.rotation.x = Math.PI / 2
  buttonGroup.add(button2)

  const button3 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
    new THREE.MeshPhongMaterial({ color: 0x4f46e5 }),
  )
  button3.position.set(0.3, 0, 0)
  button3.rotation.x = Math.PI / 2
  buttonGroup.add(button3)

  speakerModel.add(buttonGroup)

  speakerModel.visible = false
  productScene.add(speakerModel)
  productModels.push(speakerModel)
}

// Show product by index
function showProduct(index) {
  // Hide all products
  productModels.forEach((model) => {
    model.visible = false
  })

  // Show selected product
  if (index >= 0 && index < productModels.length) {
    productModels[index].visible = true
    currentProductIndex = index
  }
}

// Show next product
function showNextProduct() {
  const nextIndex = (currentProductIndex + 1) % productModels.length
  showProduct(nextIndex)
}

// Show previous product
function showPreviousProduct() {
  const prevIndex = (currentProductIndex - 1 + productModels.length) % productModels.length
  showProduct(prevIndex)
}

// Add OrbitControls if not included
// This is a simplified version of THREE.OrbitControls
if (!window.THREE) {
  window.THREE = {}
}

THREE.OrbitControls = function (camera, domElement) {
  this.camera = camera
  this.domElement = domElement

  // API
  this.enableDamping = false
  this.dampingFactor = 0.05
  this.minDistance = 0
  this.maxDistance = Number.POSITIVE_INFINITY

  // Internals
  this.target = new THREE.Vector3()
  this.rotateSpeed = 1.0
  this.zoomSpeed = 1.0

  const scope = this
  const STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 }
  let state = STATE.NONE

  const rotateStart = new THREE.Vector2()
  const rotateEnd = new THREE.Vector2()
  const rotateDelta = new THREE.Vector2()

  const zoomStart = new THREE.Vector2()
  const zoomEnd = new THREE.Vector2()
  const zoomDelta = new THREE.Vector2()

  // Event listeners
  this.domElement.addEventListener("mousedown", onMouseDown, false)
  this.domElement.addEventListener("wheel", onMouseWheel, false)
  this.domElement.addEventListener("touchstart", onTouchStart, false)
  this.domElement.addEventListener("touchmove", onTouchMove, false)

  function onMouseDown(event) {
    event.preventDefault()

    if (event.button === 0) {
      state = STATE.ROTATE
      rotateStart.set(event.clientX, event.clientY)
    }

    document.addEventListener("mousemove", onMouseMove, false)
    document.addEventListener("mouseup", onMouseUp, false)
  }

  function onMouseMove(event) {
    event.preventDefault()

    if (state === STATE.ROTATE) {
      rotateEnd.set(event.clientX, event.clientY)
      rotateDelta.subVectors(rotateEnd, rotateStart)

      // Rotate
      scope.rotateLeft(((2 * Math.PI * rotateDelta.x) / scope.domElement.clientWidth) * scope.rotateSpeed)
      scope.rotateUp(((2 * Math.PI * rotateDelta.y) / scope.domElement.clientHeight) * scope.rotateSpeed)

      rotateStart.copy(rotateEnd)
    }
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove, false)
    document.removeEventListener("mouseup", onMouseUp, false)
    state = STATE.NONE
  }

  function onMouseWheel(event) {
    event.preventDefault()

    // Zoom
    if (event.deltaY < 0) {
      scope.dollyOut(scope.zoomSpeed)
    } else {
      scope.dollyIn(scope.zoomSpeed)
    }
  }

  function onTouchStart(event) {
    event.preventDefault()

    switch (event.touches.length) {
      case 1: // One-finger touch: rotate
        state = STATE.ROTATE
        rotateStart.set(event.touches[0].pageX, event.touches[0].pageY)
        break
      case 2: // Two-finger touch: zoom
        state = STATE.ZOOM
        const dx = event.touches[0].pageX - event.touches[1].pageX
        const dy = event.touches[0].pageY - event.touches[1].pageY
        const distance = Math.sqrt(dx * dx + dy * dy)
        zoomStart.set(0, distance)
        break
    }
  }

  function onTouchMove(event) {
    event.preventDefault()

    switch (event.touches.length) {
      case 1: // One-finger touch: rotate
        if (state !== STATE.ROTATE) return

        rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY)
        rotateDelta.subVectors(rotateEnd, rotateStart)

        // Rotate
        scope.rotateLeft(((2 * Math.PI * rotateDelta.x) / scope.domElement.clientWidth) * scope.rotateSpeed)
        scope.rotateUp(((2 * Math.PI * rotateDelta.y) / scope.domElement.clientHeight) * scope.rotateSpeed)

        rotateStart.copy(rotateEnd)
        break

      case 2: // Two-finger touch: zoom
        if (state !== STATE.ZOOM) return

        const dx = event.touches[0].pageX - event.touches[1].pageX
        const dy = event.touches[0].pageY - event.touches[1].pageY
        const distance = Math.sqrt(dx * dx + dy * dy)

        zoomEnd.set(0, distance)
        zoomDelta.subVectors(zoomEnd, zoomStart)

        if (zoomDelta.y > 0) {
          scope.dollyOut(scope.zoomSpeed)
        } else {
          scope.dollyIn(scope.zoomSpeed)
        }

        zoomStart.copy(zoomEnd)
        break
    }
  }

  // Methods
  this.rotateLeft = function (angle) {
    // Rotate around y-axis
    const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle)
    const offset = new THREE.Vector3().subVectors(camera.position, this.target)
    offset.applyQuaternion(quaternion)
    camera.position.copy(this.target).add(offset)
    camera.lookAt(this.target)
  }

  this.rotateUp = function (angle) {
    // Rotate around x-axis
    const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), angle)
    const offset = new THREE.Vector3().subVectors(camera.position, this.target)
    offset.applyQuaternion(quaternion)
    camera.position.copy(this.target).add(offset)
    camera.lookAt(this.target)
  }

  this.dollyIn = function (dollyScale) {
    const offset = new THREE.Vector3().subVectors(camera.position, this.target)
    const newLength = offset.length() * (1.0 / dollyScale)

    if (newLength < this.minDistance) {
      offset.setLength(this.minDistance)
    } else if (newLength > this.maxDistance) {
      offset.setLength(this.maxDistance)
    } else {
      offset.setLength(newLength)
    }

    camera.position.copy(this.target).add(offset)
  }

  this.dollyOut = function (dollyScale) {
    this.dollyIn(1.0 / dollyScale)
  }

  this.update = function () {
    // For damping
    if (this.enableDamping) {
      // Implementation would go here
    }
  }
}
