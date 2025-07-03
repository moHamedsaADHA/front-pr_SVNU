// script.js
const sidebar = document.getElementById('sidebar');
const trigger = document.getElementById('trigger');

// لما الماوس يدخل على منطقة trigger، نظهر الـ sidebar
trigger.addEventListener('mouseenter', () => {
  sidebar.style.left = '0';
});

// لما الماوس يسيب الـ sidebar، نخفيه تاني
sidebar.addEventListener('mouseleave', () => {
  sidebar.style.left = '-250px';
});


