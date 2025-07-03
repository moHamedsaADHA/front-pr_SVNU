document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const phoneInput = document.getElementById("phone");
    const errorMessage = document.getElementById("error-message");
    const passwordInput = document.getElementById("password");

    phoneInput.addEventListener("input", function () {
        if (phoneInput.value.length > 11) {
            errorMessage.textContent = "Phone number must not exceed 11 digits.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });

    function isWeakPassword(password) {
        return password.length < 8 || /^(12345678|abcdefg|password|qwerty|11111111)$/.test(password) || !/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const email = document.getElementById("Email").value;
        const phone = phoneInput.value;
        const username = document.getElementById("username").value;
        const password = passwordInput.value;
        const remember = document.getElementById("remember").checked;

        if (phone.length > 11) {
            alert("Please enter a valid phone number with a maximum of 11 digits.");
            return;
        }

        if (isWeakPassword(password)) {
            alert("Please enter a strong password. It must be at least 8 characters long and include letters, numbers, and special symbols.");
            return;
        }

        const userData = {
            email,
            phone,
            username,
            password,
            remember
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "./login.html";
    });
});



// footer after 1s
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".footer").classList.add("visible");
    }, 1000); // يظهر بعد ثانية واحدة
});
