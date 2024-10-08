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
}

setupSearchWithOverlay('searchInput', '.search-results', '.overlay');

function copyCouponCode(elementId, button) {
    const couponCode = $(button).closest('.coupon-item').find('.couponCode').text().trim();
    // alert(couponCode);
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(couponCode)
            .then(() => {
                const $button = $(button);
                $button.text('Đã sao chép');
                $button.css('background-color', '#7D726E');

                // Sau 2 giây đổi lại trạng thái của button đó
                setTimeout(() => {
                    $button.text('Sao chép');
                    $button.css('background-color', 'black');
                }, 2000);
            })
            .catch((err) => {
                console.error('Không thể sao chép mã: ', err);
            });
    }
}
