let nutGat = document.getElementById('toggle-theme');
let trangThai = document.getElementById('trang-thai');

nutGat.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('toi');
        trangThai.innerText = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        document.body.classList.remove('toi');
        trangThai.innerText = 'Đây là giao diện ở chế độ SÁNG (đang bật).';
    }
});