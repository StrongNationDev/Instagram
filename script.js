document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const originalText = loginBtn.innerText;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        loginBtn.disabled = true;
        loginBtn.style.opacity = '0.8';

        setTimeout(() => {
            form.submit();
        }, 1000);
    });
});