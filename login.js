document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // منع إرسال الفورم فعليًا

        const storedUserData = localStorage.getItem("userData");

        if (!storedUserData) {
            alert("No account found. Please register first.");
            window.location.href = "./sign up.html";
            return;
        }

        const userData = JSON.parse(storedUserData);
        const enteredUser = document.getElementById("username").value.trim();
        const enteredPass = document.getElementById("password").value.trim();

        if (enteredUser === userData.username && enteredPass === userData.password) {

            sessionStorage.setItem("loggedIn", "true"); //  تخزين حالة تسجيل الدخول
            localStorage.removeItem("exited"); //  إزالة حالة تسجيل الخروج
            window.location.replace("./Home.html"); // توجيه المستخدم للصفحة الرئيسية
        } else {
            alert("Invalid username or password.");
        }
    });
});





// footer
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".footer").classList.add("visible");
    }, 1000); // ظهور الfooter بعد 1 ثانيه
});
