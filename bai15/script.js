let bieuThuc = '';
let daTinhToan = false;

function appendValue(giaTri) {
    if (daTinhToan) {
        let laPhepTinh = ['+', '-', '×', '÷', '%'].includes(giaTri);
        if (laPhepTinh) {
            daTinhToan = false;
        } else {
            bieuThuc = '';
            daTinhToan = false;
        }
    }
    
    if (giaTri === '()') {
        let moNgoac = (bieuThuc.match(/\(/g) || []).length;
        let dongNgoac = (bieuThuc.match(/\)/g) || []).length;
        if (moNgoac > dongNgoac) {
            bieuThuc += ')';
        } else {
            bieuThuc += '(';
        }
    } else {
        bieuThuc += giaTri;
    }
    
    hienThi();
}

function clearDisplay() {
    bieuThuc = '';
    document.getElementById('result').innerText = '0';
    document.getElementById('expression').innerText = '';
}

function calculate() {
    try {
        let bieuThucTinh = bieuThuc.replace(/×/g, '*').replace(/÷/g, '/');
        let ketQua = eval(bieuThucTinh);
        
        document.getElementById('expression').innerText = bieuThuc + ' =';
        document.getElementById('result').innerText = ketQua;
        
        bieuThuc = ketQua.toString();
        daTinhToan = true;
    } catch (error) {
        document.getElementById('result').innerText = 'Lỗi';
    }
}

function hienThi() {
    if (bieuThuc === '') {
        document.getElementById('result').innerText = '0';
    } else {
        document.getElementById('result').innerText = bieuThuc;
    }
}
