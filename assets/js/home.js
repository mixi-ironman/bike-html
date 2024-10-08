$(document).ready(function () {
    $('.slider-list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
    });
});

// // Lấy các phần tử
// const searchInput = document.getElementById('searchInput');
// const searchResults = document.querySelector('.search-results');
// const overlay = document.querySelector('.overlay');

// // Hiển thị kết quả và overlay khi focus vào input
// // searchInput.addEventListener('focus', function () {
// //     searchResults.style.display = 'block'; // Hiển thị phần kết quả
// //     overlay.style.display = 'block'; // Hiển thị overlay
// // });

// searchInput.addEventListener('keyup', function () {
//     searchResults.style.display = 'block'; // Hiển thị phần kết quả
//     overlay.style.display = 'block'; // Hiển thị overlay
// });

// // Ẩn kết quả và overlay khi click ra ngoài
// overlay.addEventListener('click', function () {
//     searchResults.style.display = 'none'; // Ẩn phần kết quả
//     overlay.style.display = 'none'; // Ẩn overlay
// });

// // // Tự động hiển thị kết quả khi người dùng nhập từ khóa
// // searchInput.addEventListener('keyup', function () {
// //     const query = searchInput.value.toLowerCase();
// //     const items = searchResults.querySelectorAll('li');

// //     items.forEach(function (item) {
// //         if (item.textContent.toLowerCase().includes(query)) {
// //             item.style.display = 'block';
// //         } else {
// //             item.style.display = 'none';
// //         }
// //     });
// // });

function setupSearchWithOverlay(inputId, resultsClass, overlayClass) {
    // Lấy các phần tử
    const searchInput = document.getElementById(inputId);
    const searchResults = document.querySelector(resultsClass);
    const overlay = document.querySelector(overlayClass);

    // Hiển thị kết quả và overlay khi focus vào input
    // searchInput.addEventListener('focus', function () {
    //     searchResults.style.display = 'block'; // Hiển thị phần kết quả
    //     overlay.style.display = 'block'; // Hiển thị overlay
    // });

    // Hiển thị kết quả và overlay khi keyup vào input
    searchInput.addEventListener('keyup', function () {
        searchResults.style.display = 'block'; // Hiển thị phần kết quả
        overlay.style.display = 'block'; // Hiển thị overlay
    });

    // Ẩn kết quả và overlay khi click ra ngoài
    overlay.addEventListener('click', function () {
        searchResults.style.display = 'none'; // Ẩn phần kết quả
        overlay.style.display = 'none'; // Ẩn overlay
    });

    // Tự động hiển thị kết quả khi người dùng nhập từ khóa
    // searchInput.addEventListener('keyup', function () {
    //     const query = searchInput.value.toLowerCase();
    //     const items = searchResults.querySelectorAll('li');

    //     items.forEach(function (item) {
    //         if (item.textContent.toLowerCase().includes(query)) {
    //             item.style.display = 'block'; // Hiển thị kết quả phù hợp
    //         } else {
    //             item.style.display = 'none'; // Ẩn kết quả không phù hợp
    //         }
    //     });
    // });
}

setupSearchWithOverlay('searchInput', '.search-results', '.overlay');
