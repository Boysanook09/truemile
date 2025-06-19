document.getElementById('clickMeBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'You clicked the button!';
});

document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');
    // รองรับ user ที่สมัครผ่านระบบ
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (username === 'admin' && password === '1234') {
        loginMessage.style.color = '#0078d7';
        loginMessage.textContent = 'Login successful!';
        setTimeout(function() {
            window.location.href = 'admin.html';
        }, 800);
    } else if (users.find(u => u.username === username && u.password === password)) {
        loginMessage.style.color = '#0078d7';
        loginMessage.textContent = 'Login successful!';
        setTimeout(function() {
            window.location.href = 'storage.html';
        }, 800);
    } else {
        loginMessage.style.color = '#d32f2f';
        loginMessage.textContent = 'Invalid username or password';
    }
});
