function toggleColors() {
    $('.filter-checkbox .form-check[data-visible="false"]').each(function () {
        $(this).toggle();
    });

    // Đổi tên nút và thêm icon với style
    const button = $('#toggleColors');
    if (button.text().trim() === 'Xem thêm') {
        button.html('Thu gọn <i class="fa-solid fa-chevron-up" style="font-size: 13px; margin-left: 2px;"></i>');
    } else {
        button.html('Xem thêm <i class="fa-solid fa-chevron-down" style="font-size: 13px; margin-left: 2px;"></i>');
    }
}

$(document).ready(function () {
    $('#toggleColors').on('click', toggleColors);
});
