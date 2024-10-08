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

$(document).ready(function () {
    // Hàm hiển thị nội dung khi hover
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
