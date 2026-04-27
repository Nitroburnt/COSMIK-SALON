// =============================================
// FIREBASE CONFIGURATION & AUTH
// =============================================

const firebaseConfig = {
    apiKey: "AIzaSyCSDWcWam4jNoBiHhxHZGCjkUzgj9n5v6g",
    authDomain: "cosmik-salon.firebaseapp.com",
    projectId: "cosmik-salon",
    storageBucket: "cosmik-salon.firebasestorage.app",
    messagingSenderId: "298565433245",
    appId: "1:298565433245:web:e1b713f91f8f969306e174"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// =============================================
// AUTH STATE LISTENER
// =============================================
auth.onAuthStateChanged((user) => {
    const pill = document.getElementById('auth-pill');
    const pillText = document.getElementById('auth-pill-text');
    const mobileLink = document.getElementById('mobile-auth-link');

    if (user) {
        // Show user email initial or "Account"
        const initial = user.email ? user.email.charAt(0).toUpperCase() : 'U';
        if (pill && pillText) {
            pillText.textContent = initial;
            pill.classList.add('signed-in');
            pill.onclick = () => openUserMenu();
        }
        if (mobileLink) {
            mobileLink.textContent = 'Account (' + initial + ')';
            mobileLink.onclick = (e) => { e.preventDefault(); toggleDrawer(); openUserMenu(); };
        }
    } else {
        if (pill && pillText) {
            pillText.textContent = 'Sign In';
            pill.classList.remove('signed-in');
            pill.onclick = () => openAuthModal();
        }
        if (mobileLink) {
            mobileLink.textContent = 'Sign In / Sign Up';
            mobileLink.onclick = (e) => { e.preventDefault(); toggleDrawer(); openAuthModal(); };
        }
    }
});

// =============================================
// MODAL CONTROLS
// =============================================
function openAuthModal() {
    const overlay = document.getElementById('auth-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchView('signin');
}

function closeAuthModal(event) {
    // If called from overlay click, only close if clicking the overlay itself
    if (event && event.target !== event.currentTarget) return;
    const overlay = document.getElementById('auth-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    clearErrors();
}

function switchView(view) {
    const views = document.querySelectorAll('.auth-view');
    views.forEach(v => v.classList.add('hidden'));
    document.getElementById(`view-${view}`).classList.remove('hidden');
    clearErrors();
}

function clearErrors() {
    document.querySelectorAll('.auth-error, .auth-success').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    el.textContent = message;
    el.style.display = 'block';
}

function showSuccess(elementId, message) {
    const el = document.getElementById(elementId);
    el.textContent = message;
    el.style.display = 'block';
}

function setLoading(btnId, loading) {
    const btn = document.getElementById(btnId);
    if (loading) {
        btn.disabled = true;
        btn.dataset.originalText = btn.textContent;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Please wait...';
    } else {
        btn.disabled = false;
        btn.textContent = btn.dataset.originalText || btn.textContent;
    }
}

// =============================================
// SIGN IN
// =============================================
async function handleSignIn(e) {
    e.preventDefault();
    clearErrors();

    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;

    setLoading('signin-btn', true);

    try {
        await auth.signInWithEmailAndPassword(email, password);
        closeAuthModal();
    } catch (error) {
        console.error("Sign In Error:", error);
        const msg = getFirebaseErrorMessage(error);
        showError('signin-error', msg);
    } finally {
        setLoading('signin-btn', false);
    }
}

// =============================================
// SIGN UP
// =============================================
async function handleSignUp(e) {
    e.preventDefault();
    clearErrors();

    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (password !== confirm) {
        showError('signup-error', 'Passwords do not match.');
        return;
    }

    setLoading('signup-btn', true);

    try {
        await auth.createUserWithEmailAndPassword(email, password);
        closeAuthModal();
    } catch (error) {
        console.error("Sign Up Error:", error);
        const msg = getFirebaseErrorMessage(error);
        showError('signup-error', msg);
    } finally {
        setLoading('signup-btn', false);
    }
}

// =============================================
// FORGOT PASSWORD
// =============================================
async function handleForgot(e) {
    e.preventDefault();
    clearErrors();

    const email = document.getElementById('forgot-email').value.trim();

    setLoading('forgot-btn', true);

    try {
        await auth.sendPasswordResetEmail(email);
        showSuccess('forgot-success', 'Reset link sent! Check your inbox.');
    } catch (error) {
        console.error("Forgot Password Error:", error);
        const msg = getFirebaseErrorMessage(error);
        showError('forgot-error', msg);
    } finally {
        setLoading('forgot-btn', false);
    }
}

// =============================================
// USER MENU (signed-in state)
// =============================================
function openUserMenu() {
    const user = auth.currentUser;
    if (!user) return;

    // Show overlay
    const overlay = document.getElementById('auth-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Populate email
    document.getElementById('account-email').textContent = user.email;

    // Mock VIP Status - Let's make it ACTIVE by default for the demo
    const isVip = true; 
    const badge = document.getElementById('vip-badge');
    const expiry = document.getElementById('vip-expiry');

    if (isVip) {
        badge.textContent = 'ACTIVE';
        badge.className = 'vip-badge active';
        expiry.style.display = 'block';
        
        // Expiry date (e.g. 1 year from now)
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        expiry.textContent = `Expires: ${date.toLocaleDateString()}`;
    } else {
        badge.textContent = 'INACTIVE';
        badge.className = 'vip-badge inactive';
        expiry.style.display = 'none';
    }

    switchView('account');
}

function handleSignOut() {
    auth.signOut().then(() => {
        closeAuthModal();
    });
}

async function handleChangePassword() {
    const user = auth.currentUser;
    if (!user) return;

    setLoading('account-change-btn', true);
    const successMsg = document.getElementById('account-success');
    successMsg.style.display = 'none';

    try {
        await auth.sendPasswordResetEmail(user.email);
        showSuccess('account-success', 'Reset link sent! Check your inbox.');
    } catch (error) {
        console.error('Password reset error:', error);
        alert('Error sending reset email: ' + error.message);
    } finally {
        setLoading('account-change-btn', false);
    }
}

// =============================================
// UI HELPERS
// =============================================
function togglePasswordVisibility(inputId, icon) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

// =============================================
// ERROR MESSAGE MAPPING
// =============================================
function getFirebaseErrorMessage(error) {
    const code = error.code;
    const messages = {
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/user-disabled': 'This account has been disabled.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/weak-password': 'Password must be at least 6 characters.',
        'auth/too-many-requests': 'Too many attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Check your connection.',
        'auth/invalid-credential': 'Invalid email or password. Please try again.',
        'auth/operation-not-allowed': 'Email/Password accounts are not enabled in Firebase Console. Please enable them.'
    };
    return messages[code] || error.message || 'An unexpected error occurred. Please try again.';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('auth-overlay');
        if (overlay && overlay.classList.contains('active')) {
            closeAuthModal();
        }
    }
});
