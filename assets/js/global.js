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

// scroll header
function headerScroll() {
    window.addEventListener('scroll', function () {
        var stickyElement = document.querySelector('.header');
        var contentOffsetTop = document.querySelector('.main-content').offsetTop;
        // var contentOffsetTop = document.querySelector('.main-content').getBoundingClientRect().top;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= contentOffsetTop) {
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

    // Khi bấm vào bất cứ đâu bên ngoài nav bar, ẩn nav bar và overlay
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
// $(document).ready(function () {
//     //toggle footer
//     $('.footer-section_click').click(function (event) {
//         event.preventDefault();
//         toggleAccordion($(this), '.footer-links_click', '.footer-section__icon');
//     });

//     // toggle sub nav mobile
//     $('.nav__mobile-item > a').click(function (event) {
//         event.preventDefault();
//         toggleAccordion($(this).parent(), '.nav__mobile-item__sub-menu', '.mobile-nav__icon');
//     });

//     // toggle tab - product detail
//     if ($(window).width() < 768) {
//         alert('ngu');
//         $('.product-detail__nav-item > .product-detail__tab-link').click(function (event) {
//             event.preventDefault();
//             $('.product-detail__content-mobile').removeClass('d-none');
//             toggleAccordion($(this).parent(), '.product-detail__content-mobile', '.mobile-nav__icon');
//         });
//     }
// });

$(document).ready(function () {
    // toggle footer
    $('.footer-section_click').click(function (event) {
        event.preventDefault();
        toggleAccordion($(this), '.footer-links_click', '.footer-section__icon');
    });

    // toggle sub nav mobile
    $('.nav__mobile-item > a').click(function (event) {
        event.preventDefault();
        toggleAccordion($(this).parent(), '.nav__mobile-item__sub-menu', '.mobile-nav__icon');
    });

    // Hàm kiểm tra kích thước màn hình và gán sự kiện cho tab trên màn mobile
    function handleProductDetailTabClick() {
        if ($(window).width() < 768) {
            // Đảm bảo sự kiện chỉ được gán một lần khi ở màn hình nhỏ
            $('.product-detail__nav-item > .product-detail__tab-link').off('click'); // Gỡ bỏ sự kiện cũ
            $('.product-detail__nav-item > .product-detail__tab-link').on('click', function (event) {
                event.preventDefault();
                $('.product-detail__content-mobile').removeClass('d-none');
                toggleAccordion($(this).parent(), '.product-detail__content-mobile', '.mobile-nav__icon');
            });
        } else {
            $('.product-detail__content-mobile').addClass('d-none');
            $('.mobile-nav__icon-wrapper').addClass('d-none');
        }
    }

    // Gọi hàm khi document load
    handleProductDetailTabClick();

    // Gọi lại hàm khi thay đổi kích thước cửa sổ
    $(window).resize(function () {
        handleProductDetailTabClick();
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
