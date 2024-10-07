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

$(document).ready(function () {
    // Hàm hiển thị nội dung khi hover
    function initHover(triggerSelector, contentSelector) {
        const $trigger = $(triggerSelector); // Phần tử kích hoạt
        const $content = $(contentSelector); // Phần tử nội dung

        // Hiển thị nội dung khi hover vào trigger
        $trigger.hover(
            function () {
                $content.css('display', 'block'); // Hiển thị nội dung
            },
            function () {
                // Khi chuột rời khỏi trigger, kiểm tra xem có đang hover vào content không
                if (!$content.is(':hover')) {
                    // $content.css('display', 'none'); // Ẩn nếu không hover vào content
                }
            },
        );

        // Giữ hiển thị nội dung khi hover vào chính nó
        $content.hover(
            function () {
                // $(this).css('display', 'block');
            },
            function () {
                $(this).css('display', 'none'); // Ẩn khi không hover vào
            },
        );
    }

    // Khởi tạo hover cho các phần tử cụ thể
    initHover('.header-right__cart', '.top-cart-content');
});
