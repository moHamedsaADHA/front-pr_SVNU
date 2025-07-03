
function getFromStorage(key, defaultValue = '') {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  }

  document.addEventListener('DOMContentLoaded', () => {
    
    const userName = getFromStorage('userName', 'اسم المستخدم');
    const userEmail = getFromStorage('userEmail', 'email@example.com');
    const booksRead = getFromStorage('booksRead', '0');
    const favoritesCount = getFromStorage('favoritesCount', '0');

   
    document.querySelector('.user-name').textContent = userName;
    document.querySelector('.user-email').textContent = userEmail;
    document.querySelector('.books-read').textContent = booksRead;
    document.querySelector('.favorites-count').textContent = favoritesCount;
  });

  

  document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('profile-upload');
    const profilePhoto = document.getElementById('profile-photo');
  
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      
      if (!file.type.startsWith('image/')) {
        alert('الرجاء اختيار ملف صورة.');
        return;
      }
  
      const reader = new FileReader();
      reader.onload = (e) => {
        
        profilePhoto.src = e.target.result;
        
        try {
          localStorage.setItem('profileImage', e.target.result);
        } catch (err) {
          console.warn('تعذّر حفظ الصورة في localStorage:', err);
        }
      };
      reader.readAsDataURL(file);
    });
  
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      profilePhoto.src = savedImage;
    }
  });
