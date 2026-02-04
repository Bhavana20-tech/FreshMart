// ========== PRODUCTS DATA WITH LOCAL IMAGES ==========
const products = [
    {
        id: 1, name: "Apple", price: 120, category: "fruits", 
        image: "images/apple.jpg", per: "kg", organic: true,
        description: "Crisp, sweet, and juicy red apples. Rich in fiber and antioxidants. Perfect for snacking or baking.",
        nutrients: "Vitamin C, Fiber, Potassium",
        shelfLife: "2-3 weeks",
        origin: "Kashmir"
    },
    {
        id: 2, name: "Orange", price: 80, category: "fruits", 
        image: "images/orange.avif", per: "kg", organic: true,
        description: "Fresh, juicy oranges packed with Vitamin C. Great for immunity and refreshing juice.",
        nutrients: "Vitamin C, Folate, Thiamine",
        shelfLife: "1-2 weeks",
        origin: "Nagpur"
    },
    {
        id: 3, name: "Banana", price: 60, category: "fruits", 
        image: "images/banana.jpg", per: "dozen", organic: true,
        description: "Ripe, energy-boosting bananas. Natural source of potassium and quick energy.",
        nutrients: "Potassium, Vitamin B6, Fiber",
        shelfLife: "5-7 days",
        origin: "Kerala"
    },
    {
        id: 4, name: "Mango", price: 150, category: "fruits", 
        image: "images/mango.jpg", per: "kg", organic: true,
        description: "King of fruits! Sweet, aromatic Alphonso mangoes. Limited seasonal availability.",
        nutrients: "Vitamin A, Vitamin C, Fiber",
        shelfLife: "3-5 days",
        origin: "Ratnagiri"
    },
    {
        id: 5, name: "Grapes", price: 180, category: "fruits", 
        image: "images/grapes.avif", per: "kg", organic: true,
        description: "Sweet seedless green grapes. Perfect for snacking or making wine.",
        nutrients: "Vitamin K, Vitamin C, Antioxidants",
        shelfLife: "1 week",
        origin: "Nasik"
    },
    {
        id: 6, name: "Strawberry", price: 250, category: "fruits", 
        image: "images/strawberry.avif", per: "250g", organic: true,
        description: "Bright red, sweet strawberries. Ideal for desserts, smoothies, or fresh eating.",
        nutrients: "Vitamin C, Manganese, Folate",
        shelfLife: "2-3 days",
        origin: "Mahableshwar"
    },
    {
        id: 7, name: "Pineapple", price: 70, category: "fruits", 
        image: "images/pineapple.avif", per: "piece", organic: true,
        description: "Tropical sweet pineapple. Contains bromelain enzyme for digestion.",
        nutrients: "Vitamin C, Manganese, Bromelain",
        shelfLife: "3-5 days",
        origin: "Assam"
    },
    {
        id: 8, name: "Kiwi", price: 200, category: "fruits", 
        image: "images/kiwi.avif", per: "kg", organic: true,
        description: "Tangy green kiwi with black seeds. Packed with Vitamin C and fiber.",
        nutrients: "Vitamin C, Vitamin K, Fiber",
        shelfLife: "1-2 weeks",
        origin: "Imported"
    },
    {
        id: 9, name: "Tomato", price: 40, category: "vegetables", 
        image: "images/tomato.avif", per: "kg", organic: true,
        description: "Fresh, red tomatoes. Rich in lycopene and versatile for cooking.",
        nutrients: "Vitamin C, Potassium, Lycopene",
        shelfLife: "1 week",
        origin: "Local farms"
    },
    {
        id: 10, name: "Potato", price: 30, category: "vegetables", 
        image: "images/potato.avif", per: "kg", organic: true,
        description: "Versatile potatoes. Good source of carbohydrates and potassium.",
        nutrients: "Vitamin C, Potassium, Vitamin B6",
        shelfLife: "2-3 weeks",
        origin: "Punjab"
    },
    {
        id: 11, name: "Onion", price: 35, category: "vegetables", 
        image: "images/onion.avif", per: "kg", organic: true,
        description: "Pungent cooking onions. Essential base for Indian curries.",
        nutrients: "Vitamin C, Folate, Quercetin",
        shelfLife: "1 month",
        origin: "Maharashtra"
    },
    {
        id: 12, name: "Carrot", price: 50, category: "vegetables", 
        image: "images/carrot.avif", per: "kg", organic: true,
        description: "Sweet, crunchy carrots. Excellent for eyesight and raw snacks.",
        nutrients: "Vitamin A, Vitamin K, Fiber",
        shelfLife: "2-3 weeks",
        origin: "Himachal Pradesh"
    },
    {
        id: 13, name: "Capsicum", price: 80, category: "vegetables", 
        image: "images/capsicum.avif", per: "kg", organic: true,
        description: "Colorful bell peppers. Available in green, red, and yellow varieties.",
        nutrients: "Vitamin C, Vitamin A, Antioxidants",
        shelfLife: "1-2 weeks",
        origin: "Kashmir"
    },
    {
        id: 14, name: "Broccoli", price: 120, category: "vegetables", 
        image: "images/broccoli.avif", per: "piece", organic: true,
        description: "Nutrient-dense broccoli. Superfood rich in vitamins and minerals.",
        nutrients: "Vitamin K, Vitamin C, Fiber",
        shelfLife: "1 week",
        origin: "Ooty"
    },
    {
        id: 15, name: "Avocado", price: 180, category: "exotic", 
        image: "images/avocado.avif", per: "piece", organic: true,
        description: "Creamy, nutrient-rich avocado. Source of healthy fats and fiber.",
        nutrients: "Healthy Fats, Fiber, Potassium",
        shelfLife: "3-5 days",
        origin: "Imported"
    },
    {
        id: 16, name: "Dragon Fruit", price: 200, category: "exotic", 
        image: "images/dragonfruit.jpg", per: "piece", organic: true,
        description: "Vibrant pink dragon fruit. Mildly sweet with edible black seeds.",
        nutrients: "Antioxidants, Vitamin C, Fiber",
        shelfLife: "3-5 days",
        origin: "Imported"
    },
 {
    id: 17,
    name: "Rambutan",
    price: 350,
    category: "exotic",
    image: "images/rambutan.jpg",
    per: "kg",
    organic: true,
    description: "Hairy red tropical fruit with juicy, sweet flesh similar to lychee.",
    nutrients: "Vitamin C, Iron, Fiber",
    shelfLife: "4-6 days",
    origin: "Imported"
},
{
    id: 18,
    name: "Longan",
    price: 420,
    category: "exotic",
    image: "images/longan.jpg",
    per: "kg",
    organic: true,
    description: "Small round fruit with translucent flesh and a sweet, musky taste.",
    nutrients: "Vitamin C, Iron, Fiber",
    shelfLife: "4-6 days",
    origin: "Imported"
}
];

// ========== IMAGE FALLBACK HANDLER ==========
// ========== IMAGE FALLBACK FOR CATEGORY CARDS ==========//
function setupCategoryImageFallbacks() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const categoryImage = card.querySelector('.category-image');
        const categoryType = card.querySelector('h3').textContent.toLowerCase();
        
        // Set fallback based on category
        let fallbackImage = '';
        if (categoryType.includes('fruit')) {
            fallbackImage = 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&auto=format&fit=crop';
        } else if (categoryType.includes('vegetable')) {
            fallbackImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop';
        } else if (categoryType.includes('exotic')) {
            fallbackImage = 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=600&auto=format&fit=crop';
        }
        
        // Check if image loads, otherwise use fallback
        const img = new Image();
        const currentBg = categoryImage.style.backgroundImage;
        const currentUrl = currentBg.match(/url\(['"]?(.*?)['"]?\)/)[1];
        
        img.src = currentUrl.replace('linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ', '');
        img.onerror = function() {
            categoryImage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${fallbackImage}')`;
        };
    });
}
// ========== CART SYSTEM ==========
let cart = JSON.parse(localStorage.getItem('freshCart')) || [];

function saveCart() {
    localStorage.setItem('freshCart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            per: product.per,
            quantity: quantity,
            category: product.category
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`Added ${product.name} (${quantity} ${product.per}) to cart!`, 'success');
    
    // Update product display
    if (document.getElementById('productsContainer')) {
        displayProducts();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    showNotification('Item removed from cart', 'info');
}

// ========== PRODUCT DISPLAY ==========
let visibleCount = 8;
let currentCategory = 'all';

function createProductCard(product) {
    const cartItem = cart.find(item => item.id === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 0;
    const fallbackImage = product.category === 'fruits' 
        ? 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop'
        : product.category === 'vegetables'
        ? 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop'
        : 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=300&fit=crop';
    
    return `
        <div class="product-card" data-id="${product.id}">
            ${product.organic ? '<span class="organic-badge">🌱 Organic</span>' : ''}
            
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" 
                     onerror="this.onerror=null; this.src='${fallbackImage}';">
            </div>
            
            <div class="product-info">
                <div class="product-title">
                    <span>${product.name}</span>
                    ${currentQuantity > 0 ? `<span style="color: var(--success); font-size: 0.9rem;">In Cart: ${currentQuantity}</span>` : ''}
                </div>
                
                <span class="product-category">${product.category.toUpperCase()}</span>
                
                <p class="product-description">
                    ${product.description.substring(0, 100)}...
                </p>
                
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    <span class="per-kg">/${product.per}</span>
                </div>
                
                <div class="quantity-controls">
                    <button class="qty-btn minus-btn" data-id="${product.id}">-</button>
                    <input type="number" class="quantity-input" 
                           id="qty-${product.id}" 
                           value="${currentQuantity || 1}" 
                           min="1" max="10">
                    <button class="qty-btn plus-btn" data-id="${product.id}">+</button>
                    <span style="margin-left: 5px; color: var(--gray); font-size: 0.9rem;">
                        ${product.per}
                    </span>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> ${currentQuantity > 0 ? 'Update' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function displayProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    // Filter by category
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(p => p.category === currentCategory);
    }
    
    // Get only visible products
    const productsToShow = filteredProducts.slice(0, visibleCount);
    
    // Display products
    container.innerHTML = productsToShow.map(createProductCard).join('');
    
    // Setup event listeners
    setupProductEventListeners();
    
    // Show/hide view more button
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    if (viewMoreBtn) {
        if (visibleCount >= filteredProducts.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'inline-flex';
            viewMoreBtn.innerHTML = `<i class="fas fa-chevron-down"></i> Load More (${filteredProducts.length - visibleCount} left)`;
        }
    }
}

function setupProductEventListeners() {
    // Quantity buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            const input = document.getElementById(`qty-${productId}`);
            let value = parseInt(input.value);
            
            if (this.classList.contains('plus-btn')) {
                value = Math.min(value + 1, 10);
            } else if (this.classList.contains('minus-btn')) {
                value = Math.max(value - 1, 1);
            }
            
            input.value = value;
        });
    });
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            const input = document.getElementById(`qty-${productId}`);
            const quantity = parseInt(input.value);
            
            addToCart(productId, quantity);
        });
    });
}

function loadMoreProducts() {
    visibleCount += 4;
    displayProducts();
}

// ========== CATEGORY FILTERING ==========
function setupCategoryFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Set new category
            currentCategory = this.dataset.category;
            visibleCount = 8;
            displayProducts();
        });
    });
}

// ========== SEARCH FUNCTIONALITY ==========
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
    }
}
// ========== SEARCH FUNCTIONALITY ==========
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        // If search is empty, show all products
        visibleCount = 8;
        currentCategory = 'all';
        
        // Reset filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === 'all') {
                btn.classList.add('active');
            }
        });
        
        displayProducts();
        showNotification('Showing all products', 'info');
        return;
    }
    
    // Filter products
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    
    if (filteredProducts.length === 0) {
        showNotification('No products found for "' + query + '"', 'info');
        return;
    }
    
    // Update UI to show only search results
    currentCategory = 'search';
    visibleCount = filteredProducts.length;
    
    const container = document.getElementById('productsContainer');
    if (container) {
        // Create cards for filtered products
        let searchHTML = '';
        filteredProducts.forEach(product => {
            const cartItem = cart.find(item => item.id === product.id);
            const currentQuantity = cartItem ? cartItem.quantity : 0;
            const fallbackImage = product.category === 'fruits' 
                ? 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop'
                : product.category === 'vegetables'
                ? 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop'
                : 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=300&fit=crop';
            
            searchHTML += `
                <div class="product-card" data-id="${product.id}">
                    ${product.organic ? '<span class="organic-badge">🌱 Organic</span>' : ''}
                    
                    <div class="product-img-container">
                        <img src="${product.image}" alt="${product.name}" class="product-img" 
                             onerror="this.onerror=null; this.src='${fallbackImage}';">
                    </div>
                    
                    <div class="product-info">
                        <div class="product-title">
                            <span>${product.name}</span>
                            ${currentQuantity > 0 ? `<span style="color: var(--success); font-size: 0.9rem;">In Cart: ${currentQuantity}</span>` : ''}
                        </div>
                        
                        <span class="product-category">${product.category.toUpperCase()}</span>
                        
                        <p class="product-description">
                            ${product.description.substring(0, 100)}...
                        </p>
                        
                        <div class="product-price">
                            <span class="current-price">₹${product.price}</span>
                            <span class="per-kg">/${product.per}</span>
                        </div>
                        
                        <div class="quantity-controls">
                            <button class="qty-btn minus-btn" data-id="${product.id}">-</button>
                            <input type="number" class="quantity-input" 
                                   id="qty-${product.id}" 
                                   value="${currentQuantity || 1}" 
                                   min="1" max="10">
                            <button class="qty-btn plus-btn" data-id="${product.id}">+</button>
                            <span style="margin-left: 5px; color: var(--gray); font-size: 0.9rem;">
                                ${product.per}
                            </span>
                        </div>
                        
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i> ${currentQuantity > 0 ? 'Update' : 'Add'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = searchHTML;
        setupProductEventListeners();
        
        // Update filter buttons - remove active from all
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Hide view more button during search
        const viewMoreBtn = document.getElementById('viewMoreBtn');
        if (viewMoreBtn) {
            viewMoreBtn.style.display = 'none';
        }
        
        showNotification(`Found ${filteredProducts.length} product${filteredProducts.length > 1 ? 's' : ''} for "${query}"`, 'success');
    }
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.auth-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'auth-notification';
    
    // Set icon based on type
    let icon = 'info-circle';
    let bgColor = 'var(--info)';
    
    switch(type) {
        case 'success':
            icon = 'check-circle';
            bgColor = 'var(--success)';
            break;
        case 'error':
            icon = 'exclamation-circle';
            bgColor = 'var(--danger)';
            break;
        case 'warning':
            icon = 'exclamation-triangle';
            bgColor = 'var(--warning)';
            break;
    }
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    notification.style.backgroundColor = bgColor;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 3000);
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();
    
    // Display products if container exists
    const productsContainer = document.getElementById('productsContainer');
    if (productsContainer) {
        displayProducts();
        setupCategoryFilters();
        setupSearch();
        
        // View More button
        const viewMoreBtn = document.getElementById('viewMoreBtn');
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', loadMoreProducts);
        }
    }
    
    // Check URL for category parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && productsContainer) {
        currentCategory = categoryParam;
        const filterBtn = document.querySelector(`.filter-btn[data-category="${categoryParam}"]`);
        if (filterBtn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            filterBtn.classList.add('active');
        }
        displayProducts();
    }
});

// ========== GLOBAL FUNCTIONS ==========
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.loadMoreProducts = loadMoreProducts;