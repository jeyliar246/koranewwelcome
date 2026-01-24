// Function to handle going back to the app
function goBack() {
    // Try to open the app using deep link
    // Adjust the URL scheme based on your app's configuration
    const appScheme = 'kora://';
    
    // Attempt to open the app
    window.location.href = appScheme;
    
    // Fallback: If app doesn't open, show a message
    setTimeout(() => {
        alert('Please return to the Kora app manually. If you have the app installed, it should open automatically.');
    }, 1000);
}

// Add some visual feedback when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Email verification page loaded');
    
    // Optional: Check if we're in a mobile app context
    if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Running in standalone mode');
    }
});
