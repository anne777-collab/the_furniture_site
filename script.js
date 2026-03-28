const WHATSAPP_NUMBER = "919729502887";

const catalog = [
  { id: "B1", title: "Signature Panel Bed", price: "Starting from ₹XX,XXX", material: "Sheesham wood", category: "bed", image: "assets/images/bed/1.jpg" },
  { id: "B2", title: "Cushioned Headboard Bed", price: "Starting from ₹XX,XXX", material: "Engineered wood + fabric", category: "bed", image: "assets/images/bed/2.jpg" },
  { id: "B3", title: "Floating Frame Bed", price: "Starting from ₹XX,XXX", material: "Teak finish board", category: "bed", image: "assets/images/bed/3.jpg" },
  { id: "B4", title: "Premium Platform Bed", price: "Starting from ₹XX,XXX", material: "Hardwood veneer", category: "bed", image: "assets/images/bed/4.webp" },
  { id: "B5", title: "Storage Comfort Bed", price: "Starting from ₹XX,XXX", material: "Laminated ply", category: "bed", image: "assets/images/bed/5.webp" },
  { id: "B6", title: "Grand Walnut Bed", price: "Starting from ₹XX,XXX", material: "Walnut tone wood", category: "bed", image: "assets/images/bed/6.png" },
  { id: "B7", title: "Urban Minimal Bed", price: "Starting from ₹XX,XXX", material: "Matte finish board", category: "bed", image: "assets/images/bed/7.jpg" },
  { id: "B8", title: "Compact Studio Bed", price: "Starting from ₹XX,XXX", material: "Solid pine blend", category: "bed", image: "assets/images/bed/8.jpg" },
  { id: "B9", title: "Luxury Arch Bed", price: "Starting from ₹XX,XXX", material: "Seasoned teakwood", category: "bed", image: "assets/images/bed/9.jpg" },
  { id: "B10", title: "Hotel Style Bed", price: "Starting from ₹XX,XXX", material: "Oak finish ply", category: "bed", image: "assets/images/bed/10.jpg" },
  { id: "B11", title: "Modern Cove Bed", price: "Starting from ₹XX,XXX", material: "Ash veneer", category: "bed", image: "assets/images/bed/11.jpg" },
  { id: "B12", title: "Contour Frame Bed", price: "Starting from ₹XX,XXX", material: "Premium engineered wood", category: "bed", image: "assets/images/bed/12.avif" },
  { id: "S1", title: "Lounge Corner Sofa", price: "Starting from ₹XX,XXX", material: "Kiln-dried wood + fabric", category: "sofa", image: "assets/images/sofa/1.jpg" },
  { id: "S2", title: "Deep Seat Family Sofa", price: "Starting from ₹XX,XXX", material: "Solid frame + foam", category: "sofa", image: "assets/images/sofa/2.jpg" },
  { id: "S3", title: "Statement Living Sofa", price: "Starting from ₹XX,XXX", material: "Seasoned wood + velvet", category: "sofa", image: "assets/images/sofa/3.jpg" },
  { id: "S4", title: "Compact Accent Sofa", price: "Starting from ₹XX,XXX", material: "Pine frame + linen", category: "sofa", image: "assets/images/sofa/4.jpg" },
  { id: "S5", title: "Copper Tone Sofa", price: "Starting from ₹XX,XXX", material: "Hardwood + suede", category: "sofa", image: "assets/images/sofa/5.jpg" },
  { id: "S6", title: "Soft Curve Loveseat", price: "Starting from ₹XX,XXX", material: "Teak frame + boucle", category: "sofa", image: "assets/images/sofa/6.jpg" },
  { id: "S7", title: "Tailored Studio Sofa", price: "Starting from ₹XX,XXX", material: "Engineered wood + foam", category: "sofa", image: "assets/images/sofa/7.jpg" },
  { id: "S8", title: "Premium Modular Sofa", price: "Starting from ₹XX,XXX", material: "Modular hardwood frame", category: "sofa", image: "assets/images/sofa/8.webp" },
  { id: "A1", title: "Mirror Panel Almirah", price: "Starting from ₹XX,XXX", material: "Laminated board", category: "almirah", image: "assets/images/almirah/1.jpg" },
  { id: "A2", title: "Walnut Storage Almirah", price: "Starting from ₹XX,XXX", material: "Sheesham finish ply", category: "almirah", image: "assets/images/almirah/2.jpg" },
  { id: "A3", title: "Compact Two Door Almirah", price: "Starting from ₹XX,XXX", material: "Engineered wood", category: "almirah", image: "assets/images/almirah/3.jpg" },
  { id: "A4", title: "Classic Bedroom Almirah", price: "Starting from ₹XX,XXX", material: "Matte laminate", category: "almirah", image: "assets/images/almirah/4.jpg" },
  { id: "A5", title: "Sliding Door Almirah", price: "Starting from ₹XX,XXX", material: "Premium board + track", category: "almirah", image: "assets/images/almirah/5.jpg" },
  { id: "A6", title: "Textured Finish Almirah", price: "Starting from ₹XX,XXX", material: "Membrane finish", category: "almirah", image: "assets/images/almirah/6.jpg" },
  { id: "A7", title: "Space Saver Almirah", price: "Starting from ₹XX,XXX", material: "Commercial ply", category: "almirah", image: "assets/images/almirah/7.jpg" },
  { id: "A8", title: "Premium Wardrobe Wall", price: "Starting from ₹XX,XXX", material: "BWR ply + veneer", category: "almirah", image: "assets/images/almirah/8.jpg" },
  { id: "A9", title: "Warm Oak Almirah", price: "Starting from ₹XX,XXX", material: "Oak finish board", category: "almirah", image: "assets/images/almirah/9.jpg" },
  { id: "A10", title: "Soft Close Almirah", price: "Starting from ₹XX,XXX", material: "HDHMR board", category: "almirah", image: "assets/images/almirah/10.jpg" },
  { id: "D1", title: "Carved Entry Door", price: "Starting from ₹XX,XXX", material: "Solid teak", category: "door", image: "assets/images/door/1.jpg" },
  { id: "D2", title: "Flush Interior Door", price: "Starting from ₹XX,XXX", material: "Engineered core", category: "door", image: "assets/images/door/2.jpg" },
  { id: "D3", title: "Warm Grain Door", price: "Starting from ₹XX,XXX", material: "Veneer finish", category: "door", image: "assets/images/door/3.jpg" },
  { id: "D4", title: "Slim Line Panel Door", price: "Starting from ₹XX,XXX", material: "Hardwood laminate", category: "door", image: "assets/images/door/4.jpg" },
  { id: "D5", title: "Matte Finish Door", price: "Starting from ₹XX,XXX", material: "Membrane finish", category: "door", image: "assets/images/door/5.jpg" },
  { id: "D6", title: "Custom Groove Door", price: "Starting from ₹XX,XXX", material: "BWR ply", category: "door", image: "assets/images/door/6.jpg" },
  { id: "D7", title: "Minimal Bedroom Door", price: "Starting from ₹XX,XXX", material: "Solid core board", category: "door", image: "assets/images/door/7.jpg" },
  { id: "D8", title: "Statement Main Door", price: "Starting from ₹XX,XXX", material: "Carved hardwood", category: "door", image: "assets/images/door/8.jpg" },
  { id: "D9", title: "Decor Panel Door", price: "Starting from ₹XX,XXX", material: "Decor laminate", category: "door", image: "assets/images/door/9.jpg" },
  { id: "D10", title: "Luxury Veneer Door", price: "Starting from ₹XX,XXX", material: "Teak veneer", category: "door", image: "assets/images/door/10.jpg" },
  { id: "K1", title: "Parallel Kitchen Suite", price: "Starting from ₹XX,XXX", material: "BWR ply + acrylic", category: "kitchen", image: "assets/images/kitchen/1.jpg" },
  { id: "K2", title: "Island Kitchen Concept", price: "Starting from ₹XX,XXX", material: "Marine ply + quartz-ready", category: "kitchen", image: "assets/images/kitchen/2.jpg" },
  { id: "K3", title: "Matte Modular Kitchen", price: "Starting from ₹XX,XXX", material: "HDHMR + laminate", category: "kitchen", image: "assets/images/kitchen/3.jpg" },
  { id: "K4", title: "Compact Urban Kitchen", price: "Starting from ₹XX,XXX", material: "Commercial ply + laminate", category: "kitchen", image: "assets/images/kitchen/4.jpg" },
  { id: "K5", title: "Warm Wood Kitchen", price: "Starting from ₹XX,XXX", material: "Textured laminate", category: "kitchen", image: "assets/images/kitchen/5.jpg" },
  { id: "K6", title: "Premium U-Shape Kitchen", price: "Starting from ₹XX,XXX", material: "BWP ply + matte acrylic", category: "kitchen", image: "assets/images/kitchen/6.jpg" },
  { id: "K7", title: "Soft Tone Kitchen", price: "Starting from ₹XX,XXX", material: "Gloss laminate", category: "kitchen", image: "assets/images/kitchen/7.jpg" },
  { id: "K8", title: "Minimal Utility Kitchen", price: "Starting from ₹XX,XXX", material: "HDHMR + membrane", category: "kitchen", image: "assets/images/kitchen/8.jpg" },
  { id: "K9", title: "Statement Corner Kitchen", price: "Starting from ₹XX,XXX", material: "Marine ply + veneer", category: "kitchen", image: "assets/images/kitchen/9.jpg" },
  { id: "K10", title: "Designer Modular Kitchen", price: "Starting from ₹XX,XXX", material: "Premium acrylic panels", category: "kitchen", image: "assets/images/kitchen/10.jpg" }
];

const categoryMeta = {
  bed: { label: "Beds", blurb: "Hand-finished beds with clean silhouettes, comfort-first proportions, and modern storage options.", image: "assets/images/bed/1.jpg" },
  sofa: { label: "Sofas", blurb: "Living room seating built for daily use, deeper comfort, and premium upholstery pairings.", image: "assets/images/sofa/1.jpg" },
  almirah: { label: "Almirahs", blurb: "Smart wardrobe storage with soft-close details, warm finishes, and efficient organization.", image: "assets/images/almirah/8.jpg" },
  door: { label: "Doors", blurb: "Interior and main doors made with durable cores, warm grain textures, and precise fitment.", image: "assets/images/door/10.jpg" },
  kitchen: { label: "Kitchen", blurb: "Modular kitchens planned around workflow, finish quality, and practical everyday durability.", image: "assets/images/kitchen/2.jpg" }
};

const productDescriptions = {
  bed: "Strong wooden build with modern finish",
  sofa: "Comfortable seating with premium design",
  almirah: "Spacious storage with durable wood finish",
  door: "Elegant wooden door with strong build",
  kitchen: "Modern modular kitchen with smart storage"
};

const featuredProductIds = ["B9", "S2", "A8", "D10", "K2", "B12", "S8", "K6"];
const galleryItems = [
  { image: "assets/images/kitchen/2.jpg", caption: "Custom modular kitchen with premium storage zoning" },
  { image: "assets/images/door/10.jpg", caption: "Luxury veneer entry door with warm grain detailing" },
  { image: "assets/images/kitchen/6.jpg", caption: "U-shape kitchen built for heavy family usage" },
  { image: "assets/images/door/8.jpg", caption: "Statement main door crafted for first impressions" },
  { image: "assets/images/almirah/8.jpg", caption: "Full-height wardrobe wall for clean bedroom storage" },
  { image: "assets/images/kitchen/10.jpg", caption: "Designer kitchen with balanced matte and gloss finishes" }
];

function pageName() {
  return document.body.dataset.page || "";
}

function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function createProductWhatsAppUrl(productId) {
  return createWhatsAppUrl(`Hello, I want to order ${productId}. Please share details.`);
}

function createCustomWhatsAppUrl() {
  return createWhatsAppUrl("Hello, I want custom furniture for my home.");
}

function formatStartingPrice(price) {
  return "Starting from ₹XX,XXX";
}

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  const current = pageName();
  const links = [["index","Home","index.html"],["products","Products","products.html"],["about","About","about.html"],["contact","Contact","contact.html"],["help","Help","help.html"],["feedback","Feedback","feedback.html"]];
  host.innerHTML = `<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html" aria-label="Premium Wooden Furniture home"><span class="brand-mark">Premium Wooden Furniture</span><small>Made-to-measure comfort and carpentry</small></a><div class="header-right"><button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button><nav id="site-nav" class="site-nav" data-open="false" aria-label="Primary navigation">${links.map(([key,label,href]) => `<a href="${href}" ${current === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}</nav><a class="button header-cta" href="${createCustomWhatsAppUrl()}" target="_blank" rel="noreferrer">WhatsApp Us</a></div></div></header>`;
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  host.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark">Premium Wooden Furniture</span><small>Premium interiors, custom storage, and handmade woodwork.</small></a><p class="text-muted">From bedrooms and living rooms to modular kitchens and doors, we build warm spaces with durable materials and careful finishing.</p></div><div><h3>Quick Links</h3><div class="footer-links"><a href="products.html">Browse Products</a><a href="about.html">Our Story</a><a href="help.html">FAQs</a><a href="feedback.html">Share Feedback</a></div></div><div><h3>Contact</h3><div class="footer-links"><a href="${createCustomWhatsAppUrl()}" target="_blank" rel="noreferrer">WhatsApp: +91 97295 02887</a><span class="text-muted">Serving your city and nearby locations</span></div></div></div><div class="footer-meta"><span>&copy; <span id="year"></span> Premium Wooden Furniture. All rights reserved.</span><a href="contact.html">Fast quotes on WhatsApp</a></div></div></footer>`;
}

function renderFloatingWhatsApp() {
  const host = document.getElementById("floating-whatsapp");
  if (!host) return;
  host.innerHTML = `<a class="floating-whatsapp" href="${createCustomWhatsAppUrl()}" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.26 16.8L2 22l5.38-1.22a11 11 0 1 0 13.12-17.28Zm-8.48 16a9.2 9.2 0 0 1-4.68-1.28l-.34-.2-3.18.72.76-3.1-.22-.36a9.25 9.25 0 1 1 7.66 4.22Zm5.16-6.9c-.28-.14-1.66-.82-1.92-.92-.26-.1-.44-.14-.62.14-.18.28-.72.92-.88 1.1-.16.18-.32.2-.6.06-.28-.14-1.18-.44-2.24-1.42-.82-.72-1.38-1.62-1.54-1.9-.16-.28-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.34-.02-.48-.06-.14-.62-1.5-.84-2.06-.22-.52-.46-.46-.62-.46h-.54c-.18 0-.48.06-.72.34-.24.28-.94.92-.94 2.24 0 1.32.96 2.58 1.1 2.76.14.18 1.88 2.86 4.56 4.02.64.28 1.14.44 1.54.56.64.2 1.22.18 1.68.12.52-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.16-1.34-.08-.12-.26-.2-.54-.34Z"></path></svg></a>`;
}

function productCard(product) {
  return `<article class="product-card fade-in" data-category="${product.category}"><img src="${product.image}" alt="${product.title} in ${categoryMeta[product.category].label}"><div class="product-body"><span class="product-id">${product.id}</span><h3>${product.title}</h3><p class="product-description">${productDescriptions[product.category]}</p><strong class="product-price">${formatStartingPrice(product.price)}</strong><a class="button" href="${createProductWhatsAppUrl(product.id)}" target="_blank" rel="noreferrer">Order on WhatsApp</a></div></article>`;
}

function renderFeaturedProducts() {
  const host = document.getElementById("featured-products");
  if (!host) return;
  host.innerHTML = featuredProductIds.map((id) => catalog.find((product) => product.id === id)).filter(Boolean).map(productCard).join("");
}

function renderCategoryCards() {
  const host = document.getElementById("category-cards");
  if (!host) return;
  host.innerHTML = Object.entries(categoryMeta).map(([slug, meta]) => `<article class="category-card" data-reveal><img src="${meta.image}" alt="${meta.label} category preview"><h3>${meta.label}</h3><p>${meta.blurb}</p><div class="badge-row"><span class="badge">${catalog.filter((product) => product.category === slug).length} designs</span><span class="badge">Made to order</span></div></article>`).join("");
}

function renderGallery() {
  const host = document.getElementById("work-gallery");
  if (!host) return;
  host.innerHTML = galleryItems.map((item) => `<figure class="gallery-card" data-reveal><img src="${item.image}" alt="${item.caption}"><figcaption>${item.caption}</figcaption></figure>`).join("");
}

function renderProducts(category = "all") {
  const host = document.getElementById("products-grid");
  if (!host) return;
  const filtered = category === "all" ? catalog : catalog.filter((product) => product.category === category);
  host.innerHTML = filtered.map(productCard).join("");
}

function setupProductFilters() {
  const filters = document.querySelectorAll("[data-filter]");
  if (!filters.length) return;
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderProducts(button.dataset.filter);
      const grid = document.getElementById("products-grid");
      if (grid) {
        grid.classList.remove("fade-in");
        void grid.offsetWidth;
        grid.classList.add("fade-in");
      }
    });
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-item").forEach((item, index) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) return;
    answer.id = `faq-answer-${index + 1}`;
    button.setAttribute("aria-controls", answer.id);
    button.addEventListener("click", () => {
      const open = item.dataset.open === "true";
      item.dataset.open = String(!open);
      button.setAttribute("aria-expanded", String(!open));
    });
  });
}

function setupFeedbackForm() {
  const form = document.getElementById("feedback-form");
  if (!form) return;
  const success = document.getElementById("feedback-success");
  const error = document.getElementById("feedback-error");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      error.textContent = "Please share your name and a short message before submitting.";
      if (success) success.hidden = true;
      return;
    }
    error.textContent = "";
    if (success) {
      success.hidden = false;
      success.textContent = `Thank you, ${name}. Your feedback has been received on this device.`;
    }
    form.reset();
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.dataset.open = String(!expanded);
  });
}

function setupReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  targets.forEach((target) => observer.observe(target));
}

function populateYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function initPage() {
  renderHeader();
  renderFooter();
  renderFloatingWhatsApp();
  renderCategoryCards();
  renderFeaturedProducts();
  renderGallery();
  renderProducts("all");
  setupMobileNav();
  setupProductFilters();
  setupFaq();
  setupFeedbackForm();
  populateYear();
  setupReveal();
}

window.furnitureCatalog = catalog;
window.createWhatsAppUrl = createWhatsAppUrl;
window.createProductWhatsAppUrl = createProductWhatsAppUrl;
window.createCustomWhatsAppUrl = createCustomWhatsAppUrl;

document.addEventListener("DOMContentLoaded", initPage);

