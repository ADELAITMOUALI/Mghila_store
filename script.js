// Simplified script that loads products from JSON file

// Translation data
const translations = {
  en: {
    "about-us": "About Us",
    "about-description":
      "This is a student-run store in Beni Mellal, focused on helping university students get the best prices. Delivery available to the university campus (حي جامعي).",
    "delivery-info": "Delivery Information",
    "delivery-text": "Delivered to your dorm room",
    products: "Products",
    features: "Features",
    about: "About",
    "explore-products": "EXPLORE PRODUCTS",
    "new-products": "New Products",
    "old-products": "Used Products",
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
    "our-mission": "Our Mission",
    "mission-text":
      "Empowering university students in Beni Mellal with affordable, high-quality electronics and technology solutions to support their academic journey and digital lifestyle.",
    "campus-delivery": "Campus Delivery",
    "delivery-service": "Direct delivery to university dormitories (حي جامعي)",
    "student-focused": "Student-Focused",
    "student-service": "Run by students, for students",
    "affordable-prices": "Affordable Prices",
    "price-service": "Student-friendly pricing on all products",
    "whatsapp-support": "WhatsApp Support",
    "support-service": "24/7 assistance via WhatsApp",
    "serving-students": "Proudly serving the student community of Beni Mellal",
  },
  ar: {
    "about-us": "من نحن",
    "about-description":
      "هذا متجر يديره طلاب في بني ملال، يركز على مساعدة طلاب الجامعة في الحصول على أفضل الأسعار. التوصيل متاح للحرم الجامعي (حي جامعي).",
    "delivery-info": "معلومات التوصيل",
    "delivery-text": "يتم التوصيل إلى غرفة السكن الجامعي",
    products: "المنتجات",
    features: "المميزات",
    about: "حول",
    "explore-products": "استكشف المنتجات",
    "new-products": "منتجات جديدة",
    "old-products": "منتجات مستعملة",
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
    "our-mission": "مهمتنا",
    "mission-text":
      "تمكين طلاب الجامعة في بني ملال بحلول إلكترونية وتقنية عالية الجودة وبأسعار معقولة لدعم رحلتهم الأكاديمية ونمط حياتهم الرقمي.",
    "campus-delivery": "التوصيل للحرم الجامعي",
    "delivery-service": "التوصيل المباشر للسكن الجامعي (حي جامعي)",
    "student-focused": "يركز على الطلاب",
    "student-service": "يديره طلاب، للطلاب",
    "affordable-prices": "أسعار معقولة",
    "price-service": "أسعار مناسبة للطلاب على جميع المنتجات",
    "whatsapp-support": "دعم واتساب",
    "support-service": "مساعدة على مدار الساعة عبر واتساب",
    "serving-students": "نخدم بفخر مجتمع الطلاب في بني ملال",
  },
}

// Global variables
const whatsappNumber = "+212703880079"
let currentPage = 1
const itemsPerPage = window.innerWidth <= 768 ? 8 : 6
let filteredProducts = []
let allProducts = []
let currentProductType = "new"
let currentLanguage = "en"

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
const aboutModal = document.getElementById("aboutModal")

// Declare lucide variable
const lucide = window.lucide

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Check saved language
  const savedLanguage = localStorage.getItem("selectedLanguage")
  if (savedLanguage) {
    currentLanguage = savedLanguage
    updateLanguage()
  }

  // Check saved product type
  const savedProductType = localStorage.getItem("selectedProductType")
  if (savedProductType) {
    currentProductType = savedProductType
  }

  // Initialize mobile menu
  initMobileMenu()

  // Initialize scroll animation
  initScrollAnimation()

  // Load products from JSON file
  loadProductsFromJSON()

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

  // Initialize hero animations
  initHeroAnimations()

  // Update product type buttons
  updateProductTypeButtons()

  // Add image error handling
  addImageErrorHandling()
})

// Load products from JSON file
async function loadProductsFromJSON() {
  try {
    const response = await fetch("products.json")
    const products = await response.json()
    allProducts = products

    setTimeout(() => {
      loadProducts()
    }, 1000)
  } catch (error) {
    console.error("Error loading products:", error)
    // Fallback to empty array
    allProducts = []
    loadProducts()
  }
}

// Hero animations
function initHeroAnimations() {
  // Typewriter effect
  const typewriterElement = document.getElementById("typewriter")
  const texts = [
    "Next-Gen Electronics for Modern Life",
    "أحدث الإلكترونيات للحياة العصرية",
    "Premium Quality at Student Prices",
    "جودة عالية بأسعار الطلاب",
  ]

  let textIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeWriter() {
    const currentText = texts[textIndex]

    if (isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex - 1)
      charIndex--
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex + 1)
      charIndex++
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 2000)
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
    }

    const speed = isDeleting ? 50 : 100
    setTimeout(typeWriter, speed)
  }

  setTimeout(typeWriter, 1000)

  // Create particles
  createParticles()
}

// Create particle effects
function createParticles() {
  const particlesContainer = document.getElementById("particles")

  function createParticle() {
    const particle = document.createElement("div")
    particle.className = "particle"

    const size = Math.random() * 4 + 2
    particle.style.width = size + "px"
    particle.style.height = size + "px"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDuration = Math.random() * 3 + 5 + "s"
    particle.style.animationDelay = Math.random() * 2 + "s"

    particlesContainer.appendChild(particle)

    setTimeout(() => {
      particle.remove()
    }, 8000)
  }

  // Create particles periodically
  setInterval(createParticle, 300)
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
  const oldBtn = document.getElementById("oldProductsBtn")

  if (currentProductType === "new") {
    newBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate bg-primary text-white"
    oldBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate text-gray-600 hover:text-primary"
  } else {
    oldBtn.className = "px-6 py-3 rounded-lg font-semibold transition-all btn-animate bg-green-500 text-white"
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
  const isUsed = product.type === "old"

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
  card.dataset.productPath = product.name.toLowerCase().replace(/\s+/g, "-")

  // Get available images (filter out empty strings)
  const availableImages = [product.image1, product.image2, product.image3].filter((img) => img && img.trim() !== "")
  const mainImage = availableImages[0]

  // Create thumbnail gallery HTML
  let thumbnailsHTML = ""
  if (availableImages.length > 1) {
    thumbnailsHTML = `
      <div class="image-gallery">
        ${availableImages
          .map(
            (img, index) => `
          <img src="${img}" 
               alt="${product.name} view ${index + 1}" 
               class="thumbnail ${index === 0 ? "active" : ""}" 
               data-image-index="${index}" 
               data-product-path="${card.dataset.productPath}">
        `,
          )
          .join("")}
      </div>
    `
  }

  // Create price HTML
  let priceHTML = ""
  if (isUsed || product.price === "Negotiable") {
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
  const buttonText =
    isUsed || product.price === "Negotiable"
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
        data-product-path="${card.dataset.productPath}"
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
      mainImage.src = availableImages[imageIndex]

      // Update click handler for modal
      mainImage.onclick = () => {
        openImageModal(availableImages[imageIndex], product.name)
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
  let result = allProducts.filter((product) => product.type === currentProductType)

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
          result = result.filter((product) => {
            const productPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
            return !isNaN(productPrice) && productPrice < 100
          })
          break
        case "100-200":
          result = result.filter((product) => {
            const productPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
            return !isNaN(productPrice) && productPrice >= 100 && productPrice <= 200
          })
          break
        case "over200":
          result = result.filter((product) => {
            const productPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
            return !isNaN(productPrice) && productPrice > 200
          })
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
          result.sort((a, b) => {
            const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
            const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
            return priceA - priceB
          })
          break
        case "priceDesc":
          result.sort((a, b) => {
            const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
            const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
            return priceB - priceA
          })
          break
        case "nameAsc":
          result.sort((a, b) => a.name.localeCompare(b.name))
          break
      }
    }
  }

  // Hide price and sort filters for used products
  const priceFilterContainer = document.getElementById("priceFilterContainer")
  const sortFilterContainer = document.getElementById("sortFilterContainer")

  if (currentProductType === "old") {
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
})

// Close modals when clicking outside
document.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    closeAboutModal()
  }
})

// Initialize page
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Handle image loading errors for better online hosting
function handleImageError(img) {
  img.style.display = "none"
  console.warn("Image failed to load:", img.src)
}

// Add error handling to all product images
function addImageErrorHandling() {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("error", () => handleImageError(img))
    // Add crossorigin attribute for better CORS handling
    if (img.src && !img.src.includes("placeholder.svg")) {
      img.crossOrigin = "anonymous"
    }
  })
}
