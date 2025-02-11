// Sign In and Sign Up Form Logic
const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const closeSignin = document.getElementById('close-signin');
const closeSignup = document.getElementById('close-signup');
const body = document.body;

let timeoutId;

// Function to show form and blur background
function showForm(form) {
    form.classList.add('active');
    body.classList.add('blur');
    resetTimer();
}

// Function to hide form and unblur background
function hideForm(form) {
    form.classList.remove('active');
    body.classList.remove('blur');
}

// Function to reset the 30-second timer
function resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        hideForm(signinForm);
        hideForm(signupForm);
    }, 30000); // 30 seconds
}

// Event listeners for buttons
signinBtn.addEventListener('click', () => showForm(signinForm));
signupBtn.addEventListener('click', () => showForm(signupForm));

// Event listeners for close buttons
closeSignin.addEventListener('click', () => hideForm(signinForm));
closeSignup.addEventListener('click', () => hideForm(signupForm));

// Event listeners for form inputs to reset timer on interaction
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', resetTimer);
});