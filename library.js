// // Sample data for demonstration
// const libraryData = {
//     unreadBooks: ["Book 1", "Book 2", "Book 3"],
//     favorites: ["Favorite Book 1", "Favorite Book 2"],
//     savedBooks: ["Saved Book 1", "Saved Book 2", "Saved Book 3"],
//     fullyRead: ["Fully Read Book 1", "Fully Read Book 2"],
//     toReadLater: ["To Read Later Book 1", "To Read Later Book 2"]
// };

// function populateBookList(containerId, books) {
//     const container = document.getElementById(containerId);
//     container.innerHTML = books.map(book => `<div>${book}</div>`).join('');
// }

// document.addEventListener("DOMContentLoaded", () => {
//     populateBookList("unread-books", libraryData.unreadBooks);
//     populateBookList("favorites", libraryData.favorites);
//     populateBookList("saved-books", libraryData.savedBooks);
//     populateBookList("fully-read", libraryData.fullyRead);
//     populateBookList("to-read-later", libraryData.toReadLater);
// });
// // Book data structure
// class Book {
//     constructor(title, author, coverUrl) {
//         this.id = Date.now().toString();
//         this.title = title;
//         this.author = author;
//         this.coverUrl = coverUrl;
//         this.dateAdded = new Date().toISOString();
//     }
// }

// // Library data management
// class LibraryManager {
//     constructor() {
//         this.libraryData = {
//             unreadBooks: [],
//             favorites: [],
//             savedBooks: [],
//             fullyRead: [],
//             toReadLater: []
//         };
//         this.loadFromLocalStorage();
//     }

//     loadFromLocalStorage() {
//         const savedData = localStorage.getItem('libraryData');
//         if (savedData) {
//             this.libraryData = JSON.parse(savedData);
//         }
//     }

//     saveToLocalStorage() {
//         localStorage.setItem('libraryData', JSON.stringify(this.libraryData));
//     }

//     addBookToCategory(book, category) {
//         if (!this.libraryData[category].some(b => b.id === book.id)) {
//             this.libraryData[category].push(book);
//             this.saveToLocalStorage();
//             this.updateUI();
//         }
//     }

//     removeBookFromCategory(bookId, category) {
//         this.libraryData[category] = this.libraryData[category].filter(book => book.id !== bookId);
//         this.saveToLocalStorage();
//         this.updateUI();
//     }

//     updateUI() {
//         const categories = ['unreadBooks', 'favorites', 'savedBooks', 'fullyRead', 'toReadLater'];
//         categories.forEach(category => {
//             const container = document.getElementById(category.replace(/([A-Z])/g, '-$1').toLowerCase());
//             if (container) {
//                 container.innerHTML = this.libraryData[category]
//                     .map(book => this.createBookElement(book, category))
//                     .join('');
//             }
//         });
//     }

//     createBookElement(book, category) {
//         return `
//             <div class="book-item" data-book-id="${book.id}">
//                 <img src="${book.coverUrl}" alt="${book.title}" class="book-cover">
//                 <div class="book-info">
//                     <h3>${book.title}</h3>
//                     <p>${book.author}</p>
//                 </div>
//                 <button class="remove-book" onclick="libraryManager.removeBookFromCategory('${book.id}', '${category}')">
//                     <i class="fas fa-times"></i>
//                 </button>
//             </div>
//         `;
//     }
// }

// function toggleSidebar() {
//     var sidebar = document.getElementById("sidebar");
//     sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
// }

// // Initialize library manager
// const libraryManager = new LibraryManager();

// // Function to handle book actions from home page
// function handleBookAction(bookData, action) {
//     const book = new Book(bookData.title, bookData.author, bookData.coverUrl);
    
//     switch(action) {
//         case 'save':
//             libraryManager.addBookToCategory(book, 'savedBooks');
//             break;
//         case 'favorite':
//             libraryManager.addBookToCategory(book, 'favorites');
//             break;
//         case 'read':
//             libraryManager.addBookToCategory(book, 'fullyRead');
//             break;
//         case 'later':
//             libraryManager.addBookToCategory(book, 'toReadLater');
//             break;
//         case 'unread':
//             libraryManager.addBookToCategory(book, 'unreadBooks');
//             break;
//     }
// }

// // Initialize the library page
// document.addEventListener("DOMContentLoaded", () => {
//     libraryManager.updateUI();

//     // Add search functionality
//     const searchBox = document.getElementById('search-box');
//     if (searchBox) {
//         searchBox.addEventListener('input', (e) => {
//             const searchTerm = e.target.value.toLowerCase();
//             const allBooks = Object.values(libraryManager.libraryData).flat();
            
//             const filteredBooks = allBooks.filter(book => 
//                 book.title.toLowerCase().includes(searchTerm) ||
//                 book.author.toLowerCase().includes(searchTerm)
//             );

//             // Update UI with filtered results
//             Object.keys(libraryManager.libraryData).forEach(category => {
//                 const container = document.getElementById(category.replace(/([A-Z])/g, '-$1').toLowerCase());
//                 if (container) {
//                     container.innerHTML = filteredBooks
//                         .filter(book => libraryManager.libraryData[category].some(b => b.id === book.id))
//                         .map(book => libraryManager.createBookElement(book, category))
//                         .join('');
//                 }
//             });
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const texts = ["My Library","Welcome To Your World"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        textElement.textContent = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; 
        }

        setTimeout(typeEffect, isDeleting ? 80 : 150); // سرعة الحذف أسرع قليلًا
    }

    setTimeout(typeEffect, 500); // بدء تشغيل الدالة بعد تحميل الصفحة
});

