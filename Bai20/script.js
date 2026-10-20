let anhHoa = document.getElementById('anh-hoa');
let cacNut = document.getElementById('thanh-nut').getElementsByTagName('button');

function apDungHieuUng(nutBam, tenHieuUng) {
    for (let i = 0; i < cacNut.length; i++) {
        cacNut[i].classList.remove('active');
    }

    nutBam.classList.add('active');

    anhHoa.className = '';
    
    if (tenHieuUng !== '') {
        anhHoa.classList.add('hieu-ung-' + tenHieuUng);
    }
}
