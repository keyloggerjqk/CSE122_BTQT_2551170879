let nutThem = document.getElementById('nut-them');
let oNhap = document.getElementById('o-nhap-viec');
let danhSach = document.getElementById('danh-sach-viec');
let phanDem = document.getElementById('so-dem');

let mangViec = [
    { ten: "Đọc chương HTML5 cơ bản", hoanThanh: true },
    { ten: "Làm bài tập CSS Grid", hoanThanh: false },
    { ten: "Quay video OBS nộp bài", hoanThanh: false }
];

function capNhatDem() {
    let chuaXong = mangViec.filter(function(viec) {
        return !viec.hoanThanh;
    }).length;
    phanDem.innerText = `Còn ${chuaXong} việc chưa hoàn thành`;
}

function veDanhSach() {
    danhSach.innerHTML = '';
    
    mangViec.forEach(function(viec, viTri) {
        let theLi = document.createElement('li');
        theLi.className = 'muc-viec';
        if (viec.hoanThanh) {
            theLi.classList.add('hoan-thanh');
        }

        let nutKiem = document.createElement('div');
        nutKiem.className = 'o-kiem';
        nutKiem.onclick = function() {
            mangViec[viTri].hoanThanh = !mangViec[viTri].hoanThanh;
            veDanhSach();
        };

        let theChu = document.createElement('span');
        theChu.className = 'chu-viec';
        theChu.innerText = viec.ten;
        theChu.onclick = function() {
            mangViec[viTri].hoanThanh = !mangViec[viTri].hoanThanh;
            veDanhSach();
        };

        let nutXoa = document.createElement('button');
        nutXoa.className = 'nut-xoa';
        nutXoa.innerText = 'Xoá';
        nutXoa.onclick = function() {
            mangViec.splice(viTri, 1);
            veDanhSach();
        };

        theLi.appendChild(nutKiem);
        theLi.appendChild(theChu);
        theLi.appendChild(nutXoa);
        danhSach.appendChild(theLi);
    });
    
    capNhatDem();
}

nutThem.onclick = function() {
    let noiDung = oNhap.value.trim();
    if (noiDung !== '') {
        mangViec.push({ ten: noiDung, hoanThanh: false });
        oNhap.value = '';
        veDanhSach();
    }
};

oNhap.addEventListener('keypress', function(suKien) {
    if (suKien.key === 'Enter') {
        nutThem.onclick();
    }
});

veDanhSach();