// Update the products array to include original_price for promotional pricing
const products = [
  {
    name: "Oraimo Wireless Earbuds",
    image:
      "https://cdn-img.oraimo.com/fit-in/600x600/CI/product/2024/09/02/330S-oraimofreepodsneo-680-12.jpg",
    second_image:
      "https://cdn-img.oraimo.com/fit-in/600x600/KE/product/2024/06/20/OTW-330S-black.png",
    description: "Premium wireless earbuds with active noise cancellation and 30-hour battery life.",
    price: "200 MAD",
    original_price: "250 MAD",
    badge: "Bestseller",
    category: "audio",
    path: "oraimo-wireless-earbuds",
  },
  {
    name: "Mi Fast Charger 67W",
    image:
      "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/749166/1.jpg?4766",
    second_image:
      "https://images.unsplash.com/photo-1618751417038-8b6c0a3a8c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Ultra-fast 67W charging for your smartphones and tablets with multiple safety features.",
    price: "100 MAD",
    original_price: "120 MAD",
    badge: "New",
    category: "chargers",
    path: "mi-fast-charger-67w",
  },
  {
    name: "Portable Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Compact waterproof speaker with powerful bass and 12-hour playback time.",
    price: "180 MAD",
    original_price: "220 MAD",
    badge: "Hot Deal",
    category: "speakers",
    path: "portable-bluetooth-speaker",
  },
  {
    name: "Wireless Gaming Headset",
    image:
      "https://images.unsplash.com/photo-1599669454699-e05d8e19a226?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Premium gaming headset with surround sound and noise-cancelling microphone.",
    price: "250 MAD",
    original_price: "300 MAD",
    badge: "Gaming",
    category: "audio",
    path: "wireless-gaming-headset",
  },
  {
    name: "USB-C Fast Charging Cable",
    image:
      "https://images.unsplash.com/photo-1618410320989-9604c34e27f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1588141253684-8ebd4f5da292?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Durable braided USB-C cable with fast data transfer and quick charging support.",
    price: "50 MAD",
    original_price: "65 MAD",
    badge: null,
    category: "chargers",
    path: "usb-c-fast-charging-cable",
  },
  {
    name: "Wireless Power Bank 10000mAh",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1619489646924-b4fce76b2c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Compact power bank with wireless charging capability and dual USB ports.",
    price: "150 MAD",
    original_price: "180 MAD",
    badge: "Bestseller",
    category: "chargers",
    path: "wireless-power-bank-10000mah",
  },
  {
    name: "OTG USB to Type-C Adapter",
    image:
      "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1625895197400-d13c1d5a7871?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Connect USB devices to your Type-C smartphone or tablet with this compact adapter.",
    price: "30 MAD",
    original_price: "45 MAD",
    badge: "Essential",
    category: "adapters",
    path: "otg-usb-to-type-c-adapter",
  },
  {
    name: "TWS Bluetooth Earphones",
    image:
      "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1631176093617-e1b9d873e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "True wireless stereo earphones with touch controls and premium sound quality.",
    price: "120 MAD",
    original_price: "150 MAD",
    badge: "Popular",
    category: "audio",
    path: "tws-bluetooth-earphones",
  },
  {
    name: "HDMI to VGA Converter",
    image:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1629131726476-7d6c8618b5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Connect your modern HDMI devices to older VGA displays with this reliable converter.",
    price: "80 MAD",
    original_price: "95 MAD",
    badge: null,
    category: "adapters",
    path: "hdmi-to-vga-converter",
  },
  {
    name: "USB Hub 4-Port",
    image:
      "https://images.unsplash.com/photo-1618410320345-35c2de174823?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1618410320265-9524582dc252?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Expand your connectivity with this 4-port USB hub, perfect for laptops and desktops.",
    price: "60 MAD",
    original_price: "75 MAD",
    badge: null,
    category: "adapters",
    path: "usb-hub-4-port",
  },
  {
    name: "Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1615663245289-2e7e6e85e1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Ergonomic wireless mouse with adjustable DPI and silent clicking for comfortable use.",
    price: "70 MAD",
    original_price: "90 MAD",
    badge: null,
    category: "accessories",
    path: "wireless-mouse",
  },
  {
    name: "Phone Tripod Stand",
    image:
      "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    second_image:
      "https://images.unsplash.com/photo-1609034227937-50cc00ccc7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Flexible tripod stand for smartphones with Bluetooth remote for perfect photos and videos.",
    price: "45 MAD",
    original_price: "60 MAD",
    badge: "Photography",
    category: "accessories",
    path: "phone-tripod-stand",
  },
]

// Global variables
const whatsappNumber = "+212703880079"
let currentPage = 1
const itemsPerPage = 3
let filteredProducts = [...products]
const currentProductImage = "image" // Track which image is displayed (main or second)

// Elements
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const closeIcon = document.querySelector(".close-icon")
const productsGrid = document.getElementById("productsGrid")
const categoryFilter = document.getElementById("categoryFilter")
const priceFilter = document.getElementById("priceFilter")
const sortFilter = document.getElementById("sortFilter")
const pagination = document.getElementById("pagination")
const prevPageBtn = document.getElementById("prevPage")
const nextPageBtn = document.getElementById("nextPage")
const currentPageElement = document.getElementById("currentPage")
const totalPagesElement = document.getElementById("totalPages")
const whatsappFloat = document.getElementById("whatsappFloat")

// Declare lucide variable
const lucide = window.lucide

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Initialize mobile menu
  initMobileMenu()

  // Initialize scroll animation
  initScrollAnimation()

  // Load products
  setTimeout(loadProducts, 1000)

  // Initialize filters
  initFilters()

  // Add scroll event listener for floating WhatsApp button
  window.addEventListener("scroll", toggleWhatsAppFloat)

  // Check initial scroll position
  toggleWhatsAppFloat()

  // Initialize smooth scrolling
  initSmoothScrolling()
})

// Initialize Mobile Menu
function initMobileMenu() {
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("translate-y-0")

      if (isOpen) {
        // Close menu
        mobileMenu.classList.remove("translate-y-0")
        mobileMenu.classList.add("-translate-y-full")
        hamburgerIcon.classList.remove("hidden")
        closeIcon.classList.add("hidden")
        document.body.style.overflow = "auto"
      } else {
        // Open menu
        mobileMenu.classList.remove("-translate-y-full")
        mobileMenu.classList.add("translate-y-0")
        hamburgerIcon.classList.add("hidden")
        closeIcon.classList.remove("hidden")
        document.body.style.overflow = "hidden"
      }
    })
  }
}

// Close mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove("translate-y-0")
  mobileMenu.classList.add("-translate-y-full")
  hamburgerIcon.classList.remove("hidden")
  closeIcon.classList.add("hidden")
  document.body.style.overflow = "auto"
}

// Initialize Scroll Animations
function initScrollAnimation() {
  const animatedElements = document.querySelectorAll(".animated-hidden")

  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If element is in view
        if (entry.isIntersecting) {
          // Get animation class and delay
          const animation = entry.target.dataset.animation
          const delay = entry.target.dataset.delay || 0

          // Add animation after delay
          setTimeout(() => {
            entry.target.classList.add("animate__animated", animation)
            entry.target.style.visibility = "visible"
          }, delay)

          // Stop observing after animation
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    },
  )

  // Observe all hidden elements
  animatedElements.forEach((element) => {
    observer.observe(element)
  })
}

// Initialize Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")

      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    })
  })
}

// Load Products
function loadProducts() {
  // Apply filters
  applyFilters()

  // Update pagination
  updatePagination()

  // Clear loading placeholders
  productsGrid.innerHTML = ""

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length)
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  // No products found message
  if (paginatedProducts.length === 0) {
    const noProductsMsg = document.createElement("div")
    noProductsMsg.className = "col-span-3 text-center py-16 text-gray-500"
    noProductsMsg.textContent =
      "No products match your current filters. Try adjusting the filters to see more products."
    productsGrid.appendChild(noProductsMsg)
    return
  }

  // Create product cards
  paginatedProducts.forEach((product, index) => {
    const delay = index * 150
    const card = createProductCard(product, delay)
    productsGrid.appendChild(card)
  })

  // Reinitialize Lucide icons for new content
  lucide.createIcons()
}

// Update the createProductCard function to show both original and discounted prices
function createProductCard(product, delay) {
  const messageText = encodeURIComponent(`I want to buy ${product.name} from Mghila Electronics`)
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${messageText}`

  // Create card element
  const card = document.createElement("div")
  card.className =
    "bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 transform card-hover "
  card.dataset.animation = "animate__fadeInUp"
  card.dataset.delay = delay
  card.dataset.productPath = product.path

  // Set card HTML content
  card.innerHTML = `
  <div class="relative h-48 overflow-hidden cursor-pointer zoom-container">
    ${product.badge ? `<span class="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">${product.badge}</span>` : ""}
    <img 
      src="${product.image}"
      alt="${product.name}" 
      class="w-full h-full object-cover zoom-effect product-main-image"
      data-product-path="${product.path}"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
  </div>
  
  <div class="p-6 bg-white">
    <h3 class="text-xl font-bold mb-2 text-gray-800">${product.name}</h3>
    <p class="text-sm text-gray-600 mb-4">${product.description}</p>
    
    <div class="image-gallery">
      <img src="${product.image}" alt="${product.name} view 1" class="thumbnail active" data-image="main" data-product-path="${product.path}">
      <img src="${product.second_image}" alt="${product.name} view 2" class="thumbnail" data-image="second" data-product-path="${product.path}">
    </div>
    
    <div class="flex justify-between items-center mt-4">
      <div class="flex flex-col">
        <div class="bg-indigo-100 px-4 py-2 rounded">
          <span class="text-lg font-bold text-indigo-600">${product.price}</span>
          ${product.original_price ? `<span class="text-sm text-gray-500 line-through ml-2">${product.original_price}</span>` : ''}
        </div>
        ${product.original_price ? `<span class="text-xs text-green-600 mt-1 font-medium">Save ${calculateDiscount(product.price, product.original_price)}%</span>` : ''}
      </div>
      
      <a 
        href="${whatsappUrl}"
        class="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Buy Now</span>
        <i data-lucide="message-circle" class="w-5 h-5"></i>
      </a>
    </div>
  </div>
  `

  // Add image click event for modal
  const productImage = card.querySelector(".product-main-image")
  productImage.addEventListener("click", () => {
    openImageModal(product.image, product.name)
  })

  // Add thumbnail click events
  const thumbnails = card.querySelectorAll(".thumbnail")
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      const productPath = this.dataset.productPath
      const imageType = this.dataset.image
      const mainImage = document.querySelector(`.product-main-image[data-product-path="${productPath}"]`)

      // Update active thumbnail
      thumbnails.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      // Update main image
      if (imageType === "main") {
        mainImage.src = product.image
      } else {
        mainImage.src = product.second_image
      }

      // Update click handler for modal
      mainImage.onclick = () => {
        openImageModal(mainImage.src, product.name)
      }
    })
  })

  return card
}

// Add a function to calculate discount percentage
function calculateDiscount(currentPrice, originalPrice) {
  const current = parseFloat(currentPrice.replace(/[^0-9.]/g, ''));
  const original = parseFloat(originalPrice.replace(/[^0-9.]/g, ''));
  
  if (original > current) {
    const discount = Math.round(((original - current) / original) * 100);
    return discount;
  }
  
  return 0;
}

// Initialize Filters
function initFilters() {
  // Event listeners for filters
  categoryFilter.addEventListener("change", () => {
    currentPage = 1
    loadProducts()
  })

  priceFilter.addEventListener("change", () => {
    currentPage = 1
    loadProducts()
  })

  sortFilter.addEventListener("change", () => {
    currentPage = 1
    loadProducts()
  })

  // Pagination event listeners
  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--
      loadProducts()
      // Scroll to products section
      scrollToProducts()
    }
  })

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      currentPage++
      loadProducts()
      // Scroll to products section
      scrollToProducts()
    }
  })
}

// Apply filters and sorting
function applyFilters() {
  let result = [...products]

  // Apply category filter
  const category = categoryFilter.value
  if (category !== "all") {
    result = result.filter((product) => product.category === category)
  }

  // Apply price filter
  const price = priceFilter.value
  if (price !== "all") {
    switch (price) {
      case "under100":
        result = result.filter((product) => Number.parseFloat(product.price) < 100)
        break
      case "100-200":
        result = result.filter((product) => {
          const productPrice = Number.parseFloat(product.price)
          return productPrice >= 100 && productPrice <= 200
        })
        break
      case "over200":
        result = result.filter((product) => Number.parseFloat(product.price) > 200)
        break
    }
  }

  // Apply sorting
  const sort = sortFilter.value
  if (sort !== "default") {
    switch (sort) {
      case "priceAsc":
        result.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
        break
      case "priceDesc":
        result.sort((a, b) => Number.parseFloat(b.price) - Number.parseFloat(a.price))
        break
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }
  }

  filteredProducts = result
}

// Update pagination display
function updatePagination() {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  if (totalPages <= 1) {
    pagination.classList.add("hidden")
  } else {
    pagination.classList.remove("hidden")

    currentPageElement.textContent = currentPage
    totalPagesElement.textContent = totalPages

    prevPageBtn.disabled = currentPage === 1
    nextPageBtn.disabled = currentPage === totalPages
  }
}

// Scroll to products section
function scrollToProducts() {
  const productsSection = document.getElementById("products")
  if (productsSection) {
    const headerOffset = 80
    const elementPosition = productsSection.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

// Image Modal Functions
const imageModal = document.getElementById("imageModal")
const modalImage = document.getElementById("modalImage")
const modalCaption = document.getElementById("modalCaption")

// Open image modal
function openImageModal(imgSrc, caption) {
  modalImage.src = imgSrc
  modalCaption.textContent = caption

  imageModal.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

// Close image modal
function closeImageModal() {
  imageModal.classList.add("hidden")
  document.body.style.overflow = "auto"
}

// Close modal on backdrop click
imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    closeImageModal()
  }
})

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !imageModal.classList.contains("hidden")) {
    closeImageModal()
  }
})

// Toggle WhatsApp float button visibility
function toggleWhatsAppFloat() {
  if (whatsappFloat) {
    // Show float button only on mobile and after scrolling
    const isMobile = window.innerWidth <= 768
    const hasScrolled = window.scrollY > 300

    if (isMobile && hasScrolled) {
      whatsappFloat.classList.remove("hidden")
      whatsappFloat.classList.add("flex")
    } else {
      whatsappFloat.classList.remove("flex")
      whatsappFloat.classList.add("hidden")
    }
  }
}

// Handle window resize events
window.addEventListener("resize", () => {
  toggleWhatsAppFloat()
})

// Export products data for the mobile app
function getProductsData() {
  return JSON.stringify(products)
}

// Inside the loadProducts function, update the categoryFilter options
categoryFilter.innerHTML = `
  <option value="all">All Categories</option>
  <option value="audio">Audio</option>
  <option value="chargers">Chargers</option>
  <option value="speakers">Speakers</option>
  <option value="adapters">Adapters</option>
  <option value="accessories">Accessories</option>
`
