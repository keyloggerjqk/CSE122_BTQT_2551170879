document.getElementById('btn-in-lich').addEventListener('click', function() {
    let ngay = parseInt(document.getElementById('nhap-ngay').value);
    let thang = parseInt(document.getElementById('nhap-thang').value);
    let nam = parseInt(document.getElementById('nhap-nam').value);

    if (!ngay || !thang || !nam) {
        return;
    }

    let ngayChon = new Date(nam, thang - 1, ngay);
    
    let mangThu = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    let tenThu = mangThu[ngayChon.getDay()];

    document.getElementById('nam').innerText = nam;
    document.getElementById('thang').innerText = 'Tháng ' + thang;
    document.getElementById('ngay').innerText = ngay;
    document.getElementById('thu').innerText = tenThu;

    let gioHienTai = new Date().getHours();
    let cauChao = '';

    if (gioHienTai < 12) {
        cauChao = 'Chào buổi sáng!';
    } else if (gioHienTai < 18) {
        cauChao = 'Chào buổi chiều!';
    } else {
        cauChao = 'Chào buổi tối!';
    }

    document.getElementById('loi-chao').innerText = cauChao;
});
