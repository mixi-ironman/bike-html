$(document).ready(function () {
    function showTab(event) {
        var tabItem = $('.product-detail__nav-item');
        var panes = $('.product-detail__tab-content');
        // console.log(panes);

        tabItem.removeClass('active');
        panes.removeClass('active');

        // Thêm class active cho tab được click và content tương ứng
        $(this).addClass('active');
        var index = tabItem.index(this);
        panes.eq(index).addClass('active');
    }

    // Đăng ký sự kiện click cho các tab
    $(document).on('click', '.product-detail__nav-item', showTab);
});

$(document).ready(function () {
    $('.similar_products-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    $('.same_products-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    $('.viewed_products-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    $('.product-detail_wrap-img_main-list').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    });
});

$(document).ready(function () {
    function changeImage(targetElement, event, mainImageClass) {
        event.preventDefault();
        var url = $(targetElement).data('img');
        $(mainImageClass).attr('src', url);
    }

    $(document).on('click', '.product-detail_img-thumbnail', function (event) {
        changeImage(this, event, '.mainImage');
    });
});
