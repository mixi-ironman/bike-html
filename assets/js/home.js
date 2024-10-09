// slick cẩousel
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

    $('.coupon-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.product-catalog__list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

function setupSearchWithOverlay(inputId, resultsClass, overlayClass) {
    const searchInput = document.getElementById(inputId);
    const searchResults = document.querySelector(resultsClass);
    const overlay = document.querySelector(overlayClass);

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
