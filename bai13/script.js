function capNhatDongHo() {
    let thoiGian = new Date();
    
    let gio = thoiGian.getHours();
    let phut = thoiGian.getMinutes();
    let giay = thoiGian.getSeconds();

    let gioChuc = Math.floor(gio / 10);
    let gioDonVi = gio % 10;
    
    let phutChuc = Math.floor(phut / 10);
    let phutDonVi = phut % 10;
    
    let giayChuc = Math.floor(giay / 10);
    let giayDonVi = giay % 10;

    document.getElementById('gio-chuc').src = `0${gioChuc}.gif`;
    document.getElementById('gio-don-vi').src = `0${gioDonVi}.gif`;
    
    document.getElementById('phut-chuc').src = `0${phutChuc}.gif`;
    document.getElementById('phut-don-vi').src = `0${phutDonVi}.gif`;
    
    document.getElementById('giay-chuc').src = `0${giayChuc}.gif`;
    document.getElementById('giay-don-vi').src = `0${giayDonVi}.gif`;

    let loiChao = '';
    if (gio >= 0 && gio < 12) {
        loiChao = 'Chào buổi sáng';
    } else if (gio >= 12 && gio < 18) {
        loiChao = 'Chào buổi chiều';
    } else {
        loiChao = 'Chào buổi tối';
    }
    
    document.getElementById('loi-chao').innerText = loiChao;
}

setInterval(capNhatDongHo, 1000);

capNhatDongHo();