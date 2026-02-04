// ========== AUTHENTICATION SYSTEM ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize storage
    initializeStorage();
    
    // Setup login form if on login page
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        setupLoginForm(loginForm);
    }
    
    // Setup registration form if on register page
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        setupRegistrationForm(registerForm);
    }
    
    // Update user status on all pages
    updateUserStatus();
});

// ========== STORAGE MANAGEMENT ==========
const STORAGE_KEY = 'freshmart_users';
const CURRENT_USER_KEY = 'freshmart_current_user';
const ORDERS_KEY = 'freshmart_orders';

function initializeStorage() {
    // Create empty users array if it doesn't exist
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
    
    // Create empty orders array if it doesn't exist
    if (!localStorage.getItem(ORDERS_KEY)) {
        localStorage.setItem(ORDERS_KEY, JSON.stringify([]));
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    updateUserStatus();
}

function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    updateUserStatus();
}

// ========== ORDER MANAGEMENT ==========
function getOrders() {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
}

function getUserOrders(userId) {
    const orders = getOrders();
    return orders.filter(order => order.userId === userId);
}

function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function createOrder(user, cart, total) {
    const orders = getOrders();
    const order = {
        id: 'ORD' + Date.now(),
        userId: user.id,
        userEmail: user.email,
        userName: user.fullName,
        items: [...cart],
        total: total,
        date: new Date().toISOString(),
        status: 'Confirmed',
        deliveryDate: getDeliveryDate()
    };
    
    orders.push(order);
    saveOrders(orders);
    return order;
}

function getDeliveryDate() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3); // 3 days delivery
    return deliveryDate.toISOString();
}

// ========== LOGIN FORM HANDLER ==========
function setupLoginForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe')?.checked || false;
        
        // Simple validation
        if (!email || !password) {
            showAuthNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAuthNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Authenticate user
        const users = getUsers();
        const user = users.find(u => 
            u.email.toLowerCase() === email.toLowerCase() && 
            u.password === password
        );
        
        if (user) {
            // Store in session
            setCurrentUser(user);
            
            // Remember email if checked
            if (rememberMe) {
                localStorage.setItem('remembered_email', email);
            } else {
                localStorage.removeItem('remembered_email');
            }
            
            showAuthNotification('Login successful! Welcome back.', 'success');
            
            // Redirect to home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            showAuthNotification('Invalid email or password', 'error');
        }
    });
}

// ========== REGISTRATION FORM HANDLER ==========
function setupRegistrationForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('regEmail').value.trim(),
            password: document.getElementById('regPassword').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };
        
        // Validate form
        const validation = validateRegistration(formData);
        if (!validation.isValid) {
            showAuthNotification(validation.message, 'error');
            return;
        }
        
        // Check if user exists
        const users = getUsers();
        const existingUser = users.find(u => 
            u.email.toLowerCase() === formData.email.toLowerCase()
        );
        
        if (existingUser) {
            showAuthNotification('User with this email already exists', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            fullName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email.toLowerCase(),
            password: formData.password,
            createdAt: new Date().toISOString(),
            isVerified: false,
            address: '',
            phone: '',
            orders: []
        };
        
        // Save user
        users.push(newUser);
        saveUsers(users);
        
        // Auto login
        setCurrentUser(newUser);
        
        showAuthNotification('Registration successful! Welcome to FreshMart.', 'success');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
}

// ========== VALIDATION FUNCTIONS ==========
function validateRegistration(data) {
    // Check required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    for (const field of requiredFields) {
        if (!data[field]) {
            return { 
                isValid: false, 
                message: `Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}` 
            };
        }
    }
    
    // Check name length
    if (data.firstName.length < 2 || data.lastName.length < 2) {
        return { 
            isValid: false, 
            message: 'First and last name must be at least 2 characters' 
        };
    }
    
    // Validate email
    if (!isValidEmail(data.email)) {
        return { 
            isValid: false, 
            message: 'Please enter a valid email address' 
        };
    }
    
    // Check password length
    if (data.password.length < 6) {
        return { 
            isValid: false, 
            message: 'Password must be at least 6 characters' 
        };
    }
    
    // Check password match
    if (data.password !== data.confirmPassword) {
        return { 
            isValid: false, 
            message: 'Passwords do not match' 
        };
    }
    
    // Check terms agreement
    const termsChecked = document.getElementById('terms')?.checked;
    if (!termsChecked) {
        return { 
            isValid: false, 
            message: 'Please agree to the Terms of Service' 
        };
    }
    
    return { isValid: true, message: 'Valid registration data' };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== USER STATUS ==========
function updateUserStatus() {
    const userStatus = document.getElementById('userStatus');
    const userDropdownMenu = document.getElementById('userDropdownMenu');
    
    if (!userStatus || !userDropdownMenu) return;
    
    const currentUser = getCurrentUser();
    
    if (currentUser) {
        // User is logged in
        userStatus.textContent = currentUser.firstName || 'Account';
        
        // Get user orders count
        const userOrders = getUserOrders(currentUser.id);
        const ordersCount = userOrders.length;
        
        // Update dropdown for logged in user
        userDropdownMenu.innerHTML = `
            <div class="dropdown-header">
                <strong>Hi, ${currentUser.firstName}!</strong>
                <small>${currentUser.email}</small>
            </div>
            <a href="profile.html" class="dropdown-item"><i class="fas fa-user"></i> My Profile</a>
            <a href="orders.html" class="dropdown-item"><i class="fas fa-shopping-bag"></i> My Orders (${ordersCount})</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item logout-btn" style="color: var(--danger);">
                <i class="fas fa-sign-out-alt"></i> Logout
            </a>
        `;
        
        // Add logout event listener
        const logoutBtn = userDropdownMenu.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
            });
        }
    } else {
        // User is not logged in
        userStatus.textContent = 'Account';
        
        // Reset dropdown to default
        userDropdownMenu.innerHTML = `
            <a href="login.html" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> Login</a>
            <a href="register.html" class="dropdown-item"><i class="fas fa-user-plus"></i> Register</a>
        `;
    }
}

function logoutUser() {
    clearCurrentUser();
    showAuthNotification('Logged out successfully', 'success');
    
    // Redirect to home page after logout
    setTimeout(() => {
        if (!window.location.href.includes('login.html') && 
            !window.location.href.includes('register.html')) {
            window.location.reload();
        }
    }, 1000);
}

// ========== AUTH NOTIFICATION ==========
function showAuthNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.auth-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'auth-notification';
    
    // Set icon based on type
    let icon = 'info-circle';
    let bgColor = '#17a2b8';
    
    switch(type) {
        case 'success':
            icon = 'check-circle';
            bgColor = '#28a745';
            break;
        case 'error':
            icon = 'exclamation-circle';
            bgColor = '#dc3545';
            break;
        case 'warning':
            icon = 'exclamation-triangle';
            bgColor = '#ffc107';
            break;
    }
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 16px 24px;
        border-radius: 10px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideIn 0.4s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 400);
    }, 3000);
}

// ========== MAKE FUNCTIONS GLOBAL ==========
window.authSystem = {
    getCurrentUser,
    logoutUser,
    isValidEmail,
    getOrders,
    getUserOrders,
    createOrder
};