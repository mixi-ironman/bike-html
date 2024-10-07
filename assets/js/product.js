$(document).ready(function () {
    function showTab(event) {
        var tabItem = $('.product-detail__nav-item');
        var panes = $('.product-detail__tab-content');

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
