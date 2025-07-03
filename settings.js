
document.getElementById("notification-bell").addEventListener("click", function () {
    this.classList.toggle("fa-bell");
    this.classList.toggle("fa-bell-slash");
  });
  

  document.getElementById("auto-sync").addEventListener("click", function () {
    this.classList.toggle("fa-sync");
    this.classList.toggle("fa-sync-alt");
    this.classList.toggle("active");
  });
  

  document.getElementById("privacy-mode").addEventListener("click", function () {
    this.classList.toggle("fa-user-secret");
    this.classList.toggle("fa-user-lock");
    this.classList.toggle("active");
  });
  
  setTimeout(() => {
    document.querySelector(".footer").classList.add("visible");
  }, 1000);
  