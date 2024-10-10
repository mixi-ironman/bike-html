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

    $('.coupon-list_').slick({
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
                    slidesToScroll: 2,
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

// check nếu mà mobile thì add slick
$(document).ready(function () {
    function initializeSlick() {
        if ($(window).width() < 768) {
            $('.btn-load_more').css('display', 'none');

            if (!$('.flashsale__list').hasClass('slick-initialized')) {
                $('.flashsale__list').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                });
            }

            if (!$('.collection-gallery').hasClass('slick-initialized')) {
                $('.collection-gallery').slick({
                    infinite: true,
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                });
            }

            if (!$('.blog-list').hasClass('slick-initialized')) {
                $('.blog-list')
                    .slick({
                        infinite: false,
                        slidesToShow: 1.3,
                        slidesToScroll: 1,
                    })
                    .on('setPosition', function () {
                        // Sau khi slick đã được khởi tạo, chỉnh sửa margin của slick-slide
                        $('.blog-list .slick-slide').css('margin-right', '15px');
                    });
            }
        } else {
            if (
                $('.flashsale__list').hasClass('slick-initialized') ||
                $('.blog-list').hasClass('slick-initialized') ||
                $('.collection-gallery').hasClass('slick-initialized')
            ) {
                $('.flashsale__list').slick('unslick'); // Bỏ slick trên màn lớn
                $('.blog-list').slick('unslick');
                $('.collection-gallery').slick('unslick');
            }
        }
    }

    // Khởi tạo slick dựa trên kích thước màn hình khi tải trang
    initializeSlick();

    // Kiểm tra lại mỗi khi kích thước màn hình thay đổi
    $(window).resize(function () {
        initializeSlick();
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

$('.news-article-sidebar__title').on('click', function () {
    const icon = $('.cate-icon_news');
    if (icon.css('transform') === 'none') {
        icon.css('transform', 'rotate(180deg)');
    } else {
        icon.css('transform', 'none');
    }
});
