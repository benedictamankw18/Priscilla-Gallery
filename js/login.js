document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-message').textContent = 'Login successful!';
        document.getElementById('login-message').style.color = 'green';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password.';
        document.getElementById('login-message').style.color = 'red';
    }
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.history.back();
});
