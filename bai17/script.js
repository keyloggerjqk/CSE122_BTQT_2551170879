let formDK = document.getElementById('form-dk');

function thietLapLoi(idInput, idThongBao, thongDiep) {
    let oNhap = document.getElementById(idInput);
    let oThongBao = document.getElementById(idThongBao);
    
    oNhap.classList.remove('hop-le');
    oNhap.classList.add('loi');
    
    oThongBao.classList.remove('hop-le');
    oThongBao.classList.add('loi');
    oThongBao.innerText = '✗ ' + thongDiep;
}

function thietLapHopLe(idInput, idThongBao) {
    let oNhap = document.getElementById(idInput);
    let oThongBao = document.getElementById(idThongBao);
    
    oNhap.classList.remove('loi');
    oNhap.classList.add('hop-le');
    
    oThongBao.classList.remove('loi');
    oThongBao.classList.add('hop-le');
    oThongBao.innerText = '✓ Hợp lệ';
}

formDK.addEventListener('submit', function(suKien) {
    suKien.preventDefault();
    
    let hoTen = document.getElementById('ho-ten').value.trim();
    let email = document.getElementById('email').value.trim();
    let matKhau = document.getElementById('mat-khau').value;
    let xacNhan = document.getElementById('xac-nhan').value;
    
    let formHopLe = true;
    
    if (hoTen === '') {
        thietLapLoi('ho-ten', 'tb-ho-ten', 'Họ và tên không được để trống');
        formHopLe = false;
    } else {
        thietLapHopLe('ho-ten', 'tb-ho-ten');
    }
    
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        thietLapLoi('email', 'tb-email', 'Email không được để trống');
        formHopLe = false;
    } else if (!regexEmail.test(email)) {
        thietLapLoi('email', 'tb-email', 'Email không hợp lệ (thiếu tên miền)');
        formHopLe = false;
    } else {
        thietLapHopLe('email', 'tb-email');
    }
    
    if (matKhau.length < 6) {
        thietLapLoi('mat-khau', 'tb-mat-khau', 'Mật khẩu phải có ít nhất 6 ký tự');
        formHopLe = false;
    } else {
        thietLapHopLe('mat-khau', 'tb-mat-khau');
    }
    
    if (xacNhan === '') {
        thietLapLoi('xac-nhan', 'tb-xac-nhan', 'Vui lòng xác nhận mật khẩu');
        formHopLe = false;
    } else if (xacNhan !== matKhau) {
        thietLapLoi('xac-nhan', 'tb-xac-nhan', 'Xác nhận mật khẩu không khớp');
        formHopLe = false;
    } else {
        thietLapHopLe('xac-nhan', 'tb-xac-nhan');
    }
    
    if (formHopLe) {
        alert('Đăng ký thành công!');
    }
});