document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các overview items
    const items = document.querySelectorAll('.overview-item');
    
    // Thêm class fade-up cho mỗi item
    items.forEach(item => {
        item.classList.add('fade-up');
    });

    // Khởi tạo Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Khi phần tử đi vào viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Ngừng theo dõi phần tử sau khi đã hiển thị
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Cấu hình: kích hoạt khi phần tử vào 10% viewport
        threshold: 0.1,
        // Thêm margin để animation bắt đầu sớm hơn
        rootMargin: '0px 0px -50px 0px'
    });

    // Bắt đầu quan sát các items
    items.forEach(item => {
        observer.observe(item);
    });
});