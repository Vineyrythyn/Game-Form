document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });
    
    let valid = true;

    // Username validation
    const username = document.getElementById('username').value;
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        document.getElementById('username-error').textContent = "Username can only contain letters and numbers.";
        document.getElementById('username-error').style.display = 'block';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^[\w-]+@[a-zA-Z]+\.[a-z]{2,3}$/.test(email)) {
        document.getElementById('email-error').textContent = "Email must be a valid domain format (e.g., yourname@domain.com).";
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('password-error').textContent = "Password must be at least 6 characters long.";
        document.getElementById('password-error').style.display = 'block';
        valid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = "Passwords do not match.";
        document.getElementById('confirm-password-error').style.display = 'block';
        valid = false;
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phone-error').textContent = "Phone number must be exactly 10 digits long.";
        document.getElementById('phone-error').style.display = 'block';
        valid = false;
    }

    // Date of birth validation
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    if (dob >= today) {
        document.getElementById('dob-error').textContent = "Date of birth must be in the past.";
        document.getElementById('dob-error').style.display = 'block';
        valid = false;
    }

    // Favorite game genre validation
    const genre = document.getElementById('favorite-genre').value;
    if (genre === "") {
        document.getElementById('genre-error').textContent = "Please select a game genre.";
        document.getElementById('genre-error').style.display = 'block';
        valid = false;
    }

    // Game development experience validation
    const experience = document.getElementById('experience').value;
    if (experience.trim() === "") {
        document.getElementById('experience-error').textContent = "Please provide your game development experience.";
        document.getElementById('experience-error').style.display = 'block';
        valid = false;
    }

    // Portfolio link validation
    const portfolio = document.getElementById('portfolio').value;
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlPattern.test(portfolio)) {
        document.getElementById('portfolio-error').textContent = "Please provide a valid portfolio URL.";
        document.getElementById('portfolio-error').style.display = 'block';
        valid = false;
    }

    // Avatar upload validation
    const avatar = document.getElementById('avatar').files[0];
    if (!avatar) {
        document.getElementById('avatar-error').textContent = "Please upload an avatar.";
        document.getElementById('avatar-error').style.display = 'block';
        valid = false;
    } else {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(avatar.type)) {
            document.getElementById('avatar-error').textContent = "Avatar must be an image file (JPEG, PNG, GIF).";
            document.getElementById('avatar-error').style.display = 'block';
            valid = false;
        }
    }

    // Terms and conditions validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms-error').textContent = "You must agree to the terms and conditions.";
        document.getElementById('terms-error').style.display = 'block';
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        alert('Registration successful! Welcome to the Game Dev Quest.');
        // Optionally, submit the form or send data via AJAX
        // document.getElementById('registration-form').submit();
    }
});
