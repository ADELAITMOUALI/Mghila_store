// Enhanced script with all requested features

// Sample products data with new/used classification and multiple images
const products = [
  // New Products
  {
    id: 1,
    name: "Oraimo Wireless Earbuds",
    images: [
      "https://cdn-img.oraimo.com/fit-in/600x600/CI/product/2024/09/02/330S-oraimofreepodsneo-680-12.jpg",
      "https://cdn-img.oraimo.com/fit-in/600x600/KE/product/2024/06/20/OTW-330S-black.png",
      "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Premium wireless earbuds with active noise cancellation and 30-hour battery life.",
    price: "200 MAD",
    original_price: "250 MAD",
    badge: "Bestseller",
    category: "audio",
    type: "new",
    path: "oraimo-wireless-earbuds",
  },
  {
    id: 2,
    name: "Mi Fast Charger 67W",
    images: [
      "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/749166/1.jpg?4766",
      "https://images.unsplash.com/photo-1618751417038-8b6c0a3a8c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Ultra-fast 67W charging for your smartphones and tablets with multiple safety features.",
    price: "100 MAD",
    original_price: "120 MAD",
    badge: "New",
    category: "chargers",
    type: "new",
    path: "mi-fast-charger-67w",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Compact waterproof speaker with powerful bass and 12-hour playback time.",
    price: "180 MAD",
    original_price: "220 MAD",
    badge: "Hot Deal",
    category: "speakers",
    type: "new",
    path: "portable-bluetooth-speaker",
  },
  {
    id: 4,
    name: "Wireless Gaming Headset",
    images: [
      "https://images.unsplash.com/photo-1599669454699-e05d8e19a226?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Premium gaming headset with surround sound and noise-cancelling microphone.",
    price: "250 MAD",
    original_price: "300 MAD",
    badge: "Gaming",
    category: "audio",
    type: "new",
    path: "wireless-gaming-headset",
  },
  {
    id: 5,
    name: "USB-C Fast Charging Cable",
    images: [
      "https://images.unsplash.com/photo-1618410320989-9604c34e27f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588141253684-8ebd4f5da292?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Durable braided USB-C cable with fast data transfer and quick charging support.",
    price: "50 MAD",
    original_price: "65 MAD",
    badge: null,
    category: "chargers",
    type: "new",
    path: "usb-c-fast-charging-cable",
  },
  {
    id: 6,
    name: "Wireless Power Bank 10000mAh",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1619489646924-b4fce76b2c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Compact power bank with wireless charging capability and dual USB ports.",
    price: "150 MAD",
    original_price: "180 MAD",
    badge: "Bestseller",
    category: "chargers",
    type: "new",
    path: "wireless-power-bank-10000mah",
  },

  // Used Products
  {
    id: 7,
    name: "iPhone 12 Pro",
    images: [
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Excellent condition iPhone 12 Pro with original charger and box. Minor scratches on back.",
    price: "Negotiable",
    badge: "Used",
    category: "phones",
    type: "used",
    path: "iphone-12-pro-used",
  },
  {
    id: 8,
    name: "MacBook Air M1",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "2021 MacBook Air M1 in great condition. Used for 1 year, includes original charger.",
    price: "Negotiable",
    badge: "Used",
    category: "laptops",
    type: "used",
    path: "macbook-air-m1-used",
  },
  {
    id: 9,
    name: "Sony WH-1000XM4",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "Premium noise-cancelling headphones in good condition. Some wear on ear pads.",
    price: "Negotiable",
    badge: "Used",
    category: "audio",
    type: "used",
    path: "sony-wh1000xm4-used",
  },
  {
    id: 10,
    name: "iPad Pro 11-inch",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    ],
    description: "2020 iPad Pro 11-inch with Apple Pencil. Minor screen protector bubbles.",
    price: "Negotiable",
    badge: "Used",
    category: "tablets",
    type: "used",
    path: "ipad-pro-11-used",
  },
]

// Translation data
const translations = {
  en: {
    welcome: "Welcome!",
    "choose-products": "What would you like to see?",
    "new-products": "New Products",
    "used-products": "Used Products",
    "change-later": "You can change this later",
    "about-us": "About Us",
    "about-description":
      "This is a student-run store in Beni Mellal, focused on helping university students get the best prices. Delivery available to the university campus (حي جامعي).",
    "delivery-info": "Delivery Information",
    "delivery-text": "Delivered to your dorm room",
    products: "Products",
    features: "Features",
    about: "About",
    "hero-title": "Next-Gen Electronics for Modern Life",
    "hero-subtitle": "Discover cutting-edge technology products at competitive prices",
    "explore-products": "Explore Products",
    "featured-products": "Featured Products",
    "products-subtitle": "Top-rated electronics handpicked for quality and performance",
    "all-categories": "All Categories",
    "all-prices": "All Prices",
    "default-sorting": "Default Sorting",
    previous: "Previous",
    next: "Next",
    page: "Page",
    of: "of",
    "why-choose-us": "Why Choose Us",
    "dorm-delivery": "Dorm Delivery",
    "dorm-delivery-desc": "Delivered to your dorm room",
    "quality-guarantee": "Quality Guarantee",
    "quality-guarantee-desc": "All our products are authentic with manufacturer warranty.",
    support: "24/7 Support",
    "support-desc": "Contact us anytime via WhatsApp for assistance.",
    "footer-desc": "Providing premium electronics for all your tech needs.",
    "quick-links": "Quick Links",
    contact: "Contact",
    privacy: "Privacy Policy",
    "contact-us": "Contact Us",
    "built-with": "Built with",
    "cutting-edge": "and cutting-edge technology",
    "buy-now": "Buy Now",
    "whatsapp-us": "WhatsApp Us",
    negotiable: "Negotiable",
  },
  ar: {
    welcome: "مرحباً!",
    "choose-products": "ماذا تريد أن ترى؟",
    "new-products": "منتجات جديدة",
    "used-products": "منتجات مستعملة",
    "change-later": "يمكنك تغيير هذا لاحقاً",
    "about-us": "من نحن",
    "about-description":
      "هذا متجر يديره طلاب في بني ملال، يركز على مساعدة طلاب الجامعة في الحصول على أفضل الأسعار. التوصيل متاح للحرم الجامعي (حي جامعي).",
    "delivery-info": "معلومات التوصيل",
    "delivery-text": "يتم التوصيل إلى غرفة السكن الجامعي",
    products: "المنتجات",
    features: "المميزات",
    about: "حول",
    "hero-title": "إلكترونيات الجيل القادم للحياة العصرية",
    "hero-subtitle": "اكتشف منتجات التكنولوجيا المتطورة بأسعار تنافسية",
    "explore-products": "استكشف المنتجات",
    "featured-products": "المنتجات المميزة",
    "products-subtitle": "إلكترونيات عالية التقييم مختارة بعناية للجودة والأداء",
    "all-categories": "جميع الفئات",
    "all-prices": "جميع الأسعار",
    "default-sorting": "الترتيب الافتراضي",
    previous: "السابق",
    next: "التالي",
    page: "صفحة",
    of: "من",
    "why-choose-us": "لماذا تختارنا",
    "dorm-delivery": "توصيل للسكن الجامعي",
    "dorm-delivery-desc": "يتم التوصيل إلى غرفة السكن الجامعي",
    "quality-guarantee": "ضمان الجودة",
    "quality-guarantee-desc": "جميع منتجاتنا أصلية مع ضمان الشركة المصنعة.",
    support: "دعم 24/7",
    "support-desc": "تواصل معنا في أي وقت عبر واتساب للمساعدة.",
    "footer-desc": "نوفر إلكترونيات عالية الجودة لجميع احتياجاتك التقنية.",
    "quick-links": "روابط سريعة",
    contact: "اتصل",
    privacy: "سياسة الخصوصية",
    "contact-us": "اتصل بنا",
    "built-with": "مبني بـ",
    "cutting-edge": "وتكنولوجيا متطورة",
    "buy-now": "اشتري الآن",
    "whatsapp-us": "راسلنا واتساب",
    negotiable: "قابل للتفاوض",
  },
}

// Global variables
const whatsappNumber = "+212703880079"
let currentPage = 1
const itemsPerPage = window.innerWidth <= 768 ? 8 : 6 // 8 for mobile, 6 for desktop
let filteredProducts = [...products]
let currentProductType = "new" // 'new' or 'used'
let currentLanguage = "en"
let hasSelectedProductType = false

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
const productTypeModal = document.getElementById("productTypeModal")
const aboutModal = document.getElementById("aboutModal")

// Declare lucide variable
const lucide = window.lucide

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Check if user has previously selected product type
  const savedProductType = localStorage.getItem("selectedProductType")
  if (savedProductType) {
    hasSelectedProductType = true
    currentProductType = savedProductType
    productTypeModal.style.display = "none"
  }

  // Check saved language
  const savedLanguage = localStorage.getItem("selectedLanguage")
  if (savedLanguage) {
    currentLanguage = savedLanguage
    updateLanguage()
  }

  // Initialize mobile menu
  initMobileMenu()

  // Initialize scroll animation
  initScrollAnimation()

  // Load products after a delay
  setTimeout(() => {
    loadProducts()
    updateProductTypeButtons()
  }, 1000)

  // Initialize filters
  initFilters()

  // Add scroll event listener for floating WhatsApp button
  window.addEventListener("scroll", toggleWhatsAppFloat)

  // Check initial scroll position
  toggleWhatsAppFloat()

  // Initialize smooth scrolling
  initSmoothScrolling()

  // Update language display
  updateLanguageDisplay()
})

// Product type selection
function selectProductType(type) {
  currentProductType = type
  hasSelectedProductType = true
  localStorage.setItem("selectedProductType", type)

  // Hide modal with animation
  productTypeModal.querySelector(".bg-white").classList.remove("animate__zoomIn")
  productTypeModal.querySelector(".bg-white").classList.add("animate__zoomOut")

  setTimeout(() => {
    productTypeModal.style.display = "none"
    loadProducts()
    updateProductTypeButtons()
  }, 500)
}

// Switch product type
function switchProductType(type) {
  currentProductType = type
  localStorage.setItem("selectedProductType", type)
  currentPage = 1
  loadProducts()
  updateProductTypeButtons()
}

// Update product type buttons
function updateProductTypeButtons() {
  const newBtn = document.getElementById("newProductsBtn")
  const usedBtn = document.getElementById("usedProductsBtn")

  if (currentProductType === "new") {
    newBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate bg-primary text-white"
    usedBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate text-gray-600 hover:text-primary"
  } else {
    usedBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate bg-green-500 text-white"
    newBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate text-gray-600 hover:text-primary"
  }
}

// Language functions
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ar" : "en"
  localStorage.setItem("selectedLanguage", currentLanguage)
  updateLanguage()
}

function updateLanguage() {
  const html = document.documentElement

  if (currentLanguage === "ar") {
    html.setAttribute("dir", "rtl")
    html.setAttribute("lang", "ar")
  } else {
    html.setAttribute("dir", "ltr")
    html.setAttribute("lang", "en")
  }

  // Update all translatable elements
  const translatableElements = document.querySelectorAll("[data-translate]")
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key]
    }
  })

  updateLanguageDisplay()
}

function updateLanguageDisplay() {
  const currentLangElements = document.querySelectorAll("#currentLang, #currentLangMobile")
  currentLangElements.forEach((element) => {
    element.textContent = currentLanguage.toUpperCase()
  })
}

// About modal functions
function openAboutModal() {
  aboutModal.classList.remove("hidden")
  aboutModal.classList.add("flex")
  document.body.style.overflow = "hidden"
}

function closeAboutModal() {
  aboutModal.classList.remove("flex")
  aboutModal.classList.add("hidden")
  document.body.style.overflow = "auto"
}

// Initialize Mobile Menu
function initMobileMenu() {
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("translate-y-0")

      if (isOpen) {
        closeMobileMenu()
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = entry.target.dataset.animation
          const delay = entry.target.dataset.delay || 0

          setTimeout(() => {
            entry.target.classList.add("animate__animated", animation)
            entry.target.style.visibility = "visible"
          }, delay)

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

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
  applyFilters()
  updatePagination()
  productsGrid.innerHTML = ""

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length)
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  if (paginatedProducts.length === 0) {
    const noProductsMsg = document.createElement("div")
    noProductsMsg.className = "col-span-full text-center py-16 text-gray-500"
    noProductsMsg.textContent =
      "No products match your current filters. Try adjusting the filters to see more products."
    productsGrid.appendChild(noProductsMsg)
    return
  }

  // Create product cards with staggered animation
  paginatedProducts.forEach((product, index) => {
    const delay = index * 100
    const card = createProductCard(product, delay, index + 1)
    productsGrid.appendChild(card)
  })

  // Reinitialize Lucide icons for new content
  lucide.createIcons()
}

// Create Product Card
function createProductCard(product, delay, productNumber) {
  const isMobile = window.innerWidth <= 768
  const isUsed = product.type === "used"

  // Generate product number based on type
  const numberPrefix = product.type === "new" ? "N" : "U"
  const displayNumber = `${numberPrefix}${productNumber}`

  // Create WhatsApp message
  const messageText = isUsed
    ? encodeURIComponent(
        `I'm interested in ${product.name} (${displayNumber}) - Used product. Can we negotiate the price?`,
      )
    : encodeURIComponent(`I want to buy ${product.name} (${displayNumber}) from Mghila Electronics`)
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${messageText}`

  const card = document.createElement("div")
  card.className = isMobile
    ? "bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 transform card-hover product-card-mobile animated-hidden"
    : "bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 transform card-hover animated-hidden"

  card.dataset.animation = "animate__fadeInUp"
  card.dataset.delay = delay
  card.dataset.productPath = product.path

  // Create main image HTML
  const mainImage = product.images[0]

  // Create thumbnail gallery HTML
  let thumbnailsHTML = ""
  if (product.images.length > 1) {
    thumbnailsHTML = `
      <div class="image-gallery">
        ${product.images
          .map(
            (img, index) => `
          <img src="${img}" 
               alt="${product.name} view ${index + 1}" 
               class="thumbnail ${index === 0 ? "active" : ""}" 
               data-image-index="${index}" 
               data-product-path="${product.path}">
        `,
          )
          .join("")}
      </div>
    `
  }

  // Create price HTML
  let priceHTML = ""
  if (isUsed) {
    priceHTML = `
      <div class="negotiable-price">
        <span>${translations[currentLanguage]["negotiable"] || "Negotiable"}</span>
      </div>
    `
  } else {
    priceHTML = `
      <div class="bg-indigo-100 px-4 py-2 rounded">
        <span class="text-lg font-bold text-indigo-600 ${isMobile ? "mobile-price" : ""}">${product.price}</span>
        ${product.original_price ? `<span class="text-sm text-gray-500 line-through ml-2">${product.original_price}</span>` : ""}
      </div>
      ${product.original_price ? `<span class="text-xs text-green-600 mt-1 font-medium">Save ${calculateDiscount(product.price, product.original_price)}%</span>` : ""}
    `
  }

  // Create button HTML
  const buttonText = isUsed
    ? translations[currentLanguage]["whatsapp-us"] || "WhatsApp Us"
    : translations[currentLanguage]["buy-now"] || "Buy Now"

  const buttonClass = isMobile
    ? "flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white mobile-button transition-all hover:-translate-y-1 shadow-md hover:shadow-lg btn-animate"
    : "flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-1 shadow-md hover:shadow-lg btn-animate"

  card.innerHTML = `
    <div class="relative h-48 overflow-hidden cursor-pointer zoom-container">
      <div class="product-number">${displayNumber}</div>
      ${product.badge ? `<span class="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">${product.badge}</span>` : ""}
      <img 
        src="${mainImage}"
        alt="${product.name}" 
        class="w-full h-full object-cover zoom-effect product-main-image"
        data-product-path="${product.path}"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
    </div>
    
    <div class="card-content bg-white ${isMobile ? "p-3" : "p-6"}">
      <h3 class="text-xl font-bold mb-2 text-gray-800 ${isMobile ? "text-sm" : ""}">${product.name}</h3>
      <p class="text-sm text-gray-600 mb-4 ${isMobile ? "text-xs" : ""}">${product.description}</p>
      
      ${thumbnailsHTML}
      
      <div class="flex justify-between items-center mt-4 ${isMobile ? "flex-col gap-3" : ""}">
        <div class="flex flex-col ${isMobile ? "w-full" : ""}">
          ${priceHTML}
        </div>
        
        <a 
          href="${whatsappUrl}"
          class="${buttonClass}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>${buttonText}</span>
          <i data-lucide="message-circle" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `

  // Add image click event for modal
  const productImage = card.querySelector(".product-main-image")
  productImage.addEventListener("click", () => {
    openImageModal(mainImage, product.name)
  })

  // Add thumbnail click events
  const thumbnails = card.querySelectorAll(".thumbnail")
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", function () {
      const productPath = this.dataset.productPath
      const imageIndex = Number.parseInt(this.dataset.imageIndex)
      const mainImage = document.querySelector(`.product-main-image[data-product-path="${productPath}"]`)

      // Update active thumbnail
      thumbnails.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      // Update main image
      mainImage.src = product.images[imageIndex]

      // Update click handler for modal
      mainImage.onclick = () => {
        openImageModal(product.images[imageIndex], product.name)
      }
    })
  })

  return card
}

// Calculate discount percentage
function calculateDiscount(currentPrice, originalPrice) {
  const current = Number.parseFloat(currentPrice.replace(/[^0-9.]/g, ""))
  const original = Number.parseFloat(originalPrice.replace(/[^0-9.]/g, ""))

  if (original > current) {
    const discount = Math.round(((original - current) / original) * 100)
    return discount
  }

  return 0
}

// Initialize Filters
function initFilters() {
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

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--
      loadProducts()
      scrollToProducts()
    }
  })

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      currentPage++
      loadProducts()
      scrollToProducts()
    }
  })
}

// Apply filters and sorting
function applyFilters() {
  let result = products.filter((product) => product.type === currentProductType)

  // Apply category filter
  const category = categoryFilter.value
  if (category !== "all") {
    result = result.filter((product) => product.category === category)
  }

  // Apply price filter (only for new products)
  if (currentProductType === "new") {
    const price = priceFilter.value
    if (price !== "all") {
      switch (price) {
        case "under100":
          result = result.filter((product) => Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) < 100)
          break
        case "100-200":
          result = result.filter((product) => {
            const productPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
            return productPrice >= 100 && productPrice <= 200
          })
          break
        case "over200":
          result = result.filter((product) => Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) > 200)
          break
      }
    }
  }

  // Apply sorting (only for new products)
  if (currentProductType === "new") {
    const sort = sortFilter.value
    if (sort !== "default") {
      switch (sort) {
        case "priceAsc":
          result.sort(
            (a, b) =>
              Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(b.price.replace(/[^0-9.]/g, "")),
          )
          break
        case "priceDesc":
          result.sort(
            (a, b) =>
              Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(a.price.replace(/[^0-9.]/g, "")),
          )
          break
        case "nameAsc":
          result.sort((a, b) => a.name.localeCompare(b.name))
          break
      }
    }
  }

  // Hide price filter for used products
  const priceFilterContainer = priceFilter.parentElement
  const sortFilterContainer = sortFilter.parentElement

  if (currentProductType === "used") {
    priceFilterContainer.style.display = "none"
    sortFilterContainer.style.display = "none"
  } else {
    priceFilterContainer.style.display = "block"
    sortFilterContainer.style.display = "block"
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

function openImageModal(imgSrc, caption) {
  modalImage.src = imgSrc
  modalCaption.textContent = caption

  imageModal.classList.remove("hidden")
  imageModal.classList.add("flex")
  document.body.style.overflow = "hidden"
}

function closeImageModal() {
  imageModal.classList.remove("flex")
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
  // Reload products if switching between mobile/desktop for different layouts
  const newItemsPerPage = window.innerWidth <= 768 ? 8 : 6
  if (newItemsPerPage !== itemsPerPage) {
    location.reload() // Simple reload to handle layout changes
  }
})

// Close modals when clicking outside
document.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    closeAboutModal()
  }
})

// Export products data for debugging
function getProductsData() {
  return JSON.stringify(products)
}

// Initialize page
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
