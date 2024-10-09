// thay đối số lượng sản phẩm
$(document).ready(function () {
    // Bắt sự kiện cho tất cả các quantity-input
    $('[data-quantity-input]').each(function () {
        const $this = $(this);

        // Nút tăng
        $this.find('.btn-increase').on('click', function () {
            const $input = $this.find('.input-quantity');
            let currentValue = parseInt($input.val());
            console.log(currentValue);
            $input.val(currentValue + 1);
        });

        // Nút giảm
        $this.find('.btn-decrease').on('click', function () {
            const $input = $this.find('.input-quantity');
            let currentValue = parseInt($input.val());
            if (currentValue > 1) {
                $input.val(currentValue - 1);
            }
        });
    });
});

// Hàm hiển thị nội dung khi hover
$(document).ready(function () {
    function initHover(triggerSelector, contentSelector) {
        const $trigger = $(triggerSelector);
        const $content = $(contentSelector);

        // Hiển thị nội dung khi hover vào trigger
        $trigger.hover(
            function () {
                $content.css('display', 'block'); // Hiển thị nội dung
            },
            function () {
                // Khi chuột rời khỏi trigger, kiểm tra xem có đang hover vào content không
                // if (!$content.is(':hover')) {
                // $content.css('display', 'none'); // Ẩn nếu không hover vào content
                // }
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
    initHover('.header-right__cart_', '.top-cart-content_');
    initHover('.menu-item-fluid', '.menu-item__submenu-fluid');
});

// hiển thị resultBox search
$(document).ready(function () {
    const resultBox = $('#resultBox');
    // Khi click vào nút tìm kiếm, hiển thị resultBox
    $('.icon-action__search').on('click', function (e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
        resultBox.removeClass('hidden');
        setTimeout(() => {
            resultBox.addClass('show');
        }, 80);
    });

    // Khi click ra ngoài, ẩn resultBox
    $(document).on('click', function () {
        resultBox.addClass('hidden');
    });

    // Ngăn không ẩn resultBox khi click vào bên trong nó
    resultBox.on('click', function (e) {
        e.stopPropagation();
    });
});

// check nếu mà mobile thì add slick
$(document).ready(function () {
    function initializeSlick() {
        if ($(window).width() < 768) {
            if (!$('.flashsale__list').hasClass('slick-initialized')) {
                $('.flashsale__list').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

// scroll header
function headerScroll() {
    window.addEventListener('scroll', function () {
        var stickyElement = document.querySelector('.header');
        var contentOffsetTop = document.querySelector('.main-content').offsetTop;

        if (window.scrollY >= contentOffsetTop) {
            stickyElement.classList.add('sticky');
        } else {
            stickyElement.classList.remove('sticky');
        }
    });
}

headerScroll();

// // toggle nav mobile
// $(document).ready(function () {
//     var navBar = $('.nav__mobile');
//     var overlay = $('.overlay');

//     // Khi bấm vào nút toggle, hiển thị nav bar và overlay
//     $('.toggle-nav__mobile').on('click', function (e) {
//         e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
//         navBar.addClass('show').removeClass('hidden');
//         overlay.fadeIn(300);
//     });

//     // Khi bấm vào bất cứ đâu bên ngoài nav bar, ẩn nav bar và overlay
//     $(document).on('click', function () {
//         navBar.addClass('hidden').removeClass('show');
//         overlay.fadeOut(300);
//     });

//     // Ngăn không ẩn nav bar khi click vào bên trong nó
//     navBar.on('click', function (e) {
//         e.stopPropagation();
//     });
// });

// toggle nav mobile
$(document).ready(function () {
    var navBar = $('.nav__mobile');
    var overlay = $('.overlay');

    // Khi bấm vào nút toggle, hiển thị nav bar và overlay
    $('.toggle-nav__mobile').on('click', function (e) {
        e.stopPropagation();

        // Hiển thị nav bar với animation trượt từ trái
        navBar.show().animate(
            {
                left: '0',
            },
            300,
        );

        overlay.fadeIn(300);
        $('.header').removeClass('sticky');
        $('body').css('overflow', 'hidden');
    });

    // Khi bấm vào bất cứ đâu bên ngoài nav bar, ẩn nav bar và overlay với hiệu ứng mượt
    $(document).on('click', function () {
        navBar.animate(
            {
                left: '-300px',
            },
            300,
            function () {
                navBar.hide(); // Sau khi animation xong thì ẩn hẳn
            },
        );

        overlay.fadeOut(300);
        $('body').css('overflow', 'visible');
    });

    // Ngăn không ẩn nav bar khi click vào bên trong nó
    navBar.on('click', function (e) {
        e.stopPropagation();
    });
});

// accordion
$(document).ready(function () {
    //toggle footer
    $('.footer-section_click').click(function () {
        toggleAccordion($(this), '.footer-links_click', '.footer-section__icon');
    });

    $('.nav__mobile-item > a').click(function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
        toggleAccordion($(this).parent(), '.nav__mobile-item__sub-menu', '.mobile-nav__icon');
    });
});

// Hàm để hiển thị/ẩn danh sách và xoay icon
function toggleAccordion(trigger, contentClass, iconClass) {
    var icon = trigger.find(iconClass);

    // Xóa lớp .rotated khỏi tất cả các icon khác
    $(iconClass).not(icon).removeClass('rotated');

    // Kiểm tra xem icon hiện tại đã có lớp .rotated chưa
    if (icon.hasClass('rotated')) {
        icon.removeClass('rotated'); // Xoay ngược lại
    } else {
        icon.addClass('rotated'); // Xoay 180 độ
    }

    // Ẩn tất cả các nội dung ngoại trừ phần tử liền sau
    $(contentClass).not(trigger.find(contentClass)).slideUp();

    // Hiển thị hoặc ẩn danh sách hiện tại
    trigger.find(contentClass).slideToggle();
}
