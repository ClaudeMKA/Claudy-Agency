document.addEventListener('DOMContentLoaded', function() {
    function generateCaptcha() {
        var num1 = Math.floor(Math.random() * 10 + 1);
        var num2 = Math.floor(Math.random() * 10 + 1);
        document.getElementById('num1').textContent = num1;
        document.getElementById('num2').textContent = num2;
        return num1 + num2;
    }

    var correctAnswer = generateCaptcha();

    function validateCaptcha(event) {
        var userAnswer = document.getElementById('captcha').value;
        if (parseInt(userAnswer, 10) !== correctAnswer) {
            event.preventDefault();
            document.getElementById('captchaError').textContent = 'La réponse au CAPTCHA est incorrecte.';
            document.getElementById('captchaError').style.color = 'red';
            return false;
        }
    }

    window.validateForm = function(event) {
        var name = document.getElementById('contactForm').elements['name'].value;
        var email = document.getElementById('contactForm').elements['email_address'].value;
        var message = document.getElementById('contactForm').elements['message'].value;

        // Reset error messages and set red color for errors
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';

        document.getElementById('nameError').style.color = 'red';
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('messageError').style.color = 'red';

        // Validation for required fields
        if (name.trim() === '') {
            event.preventDefault();
            document.getElementById('nameError').textContent = 'Please enter your name.';
            return false;
        }

        if (email.trim() === '') {
            event.preventDefault();
            document.getElementById('emailError').textContent = 'Please enter your email address.';
            return false;
        }

        if (message.trim() === '') {
            event.preventDefault();
            document.getElementById('messageError').textContent = 'Please enter your message.';
            return false;
        }

        // Email validation
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            event.preventDefault();
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            return false;
        }

        return validateCaptcha(event);
    }
});