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
        const $trigger = $(triggerSelector); // Phần tử kích hoạt
        const $content = $(contentSelector); // Phần tử nội dung

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
    initHover('.menu-item-fluid', '.menu-item__submenu-fluid');
});

$(document).ready(function () {
    $('#deliveryDate').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        todayHighlight: true,
        language: 'vi',
    });
});
