document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function () {
        let pilihanPemain = this.getAttribute('data-choice');
        let pilihanKomputer = getPilihanKomputer();
        let hasil = getHasil(pilihanPemain, pilihanKomputer);

        document.getElementById('computer-choice').textContent = simbolPilihan(pilihanKomputer);
        document.getElementById('game-result').textContent = hasil;

        // Jika pemain kalah, arahkan ke halaman "kalah.html"
        if (hasil === 'Kamu Kalah! 😢') {
            setTimeout(() => {
                window.location.href = 'kalah.html';
            }, 2000); // Redirect setelah 1 detik
        }
        if (hasil === 'Kamu Menang! 🎉') {
            setTimeout(() => {
                window.location.href = './Menang/index.html';
            }, 1500); // Redirect setelah 1 detik
        }
    });
});

// Fungsi untuk pilihan komputer secara acak
function getPilihanKomputer() {
    let choices = ['gunting', 'batu', 'kertas'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fungsi menentukan hasil pertandingan
function getHasil(pemain, komputer) {
    if (pemain === komputer) {
        return 'Seri!';
    }

    if (
        (pemain === 'gunting' && komputer === 'kertas') ||
        (pemain === 'batu' && komputer === 'gunting') ||
        (pemain === 'kertas' && komputer === 'batu')
    ) {
        return 'Kamu Menang! 🎉';
    } else {
        return 'Kamu Kalah! 😢';
    }
}

// Fungsi untuk menampilkan ikon sesuai pilihan
function simbolPilihan(pilihan) {
    const simbol = {
        gunting: '✌️',
        batu: '✊',
        kertas: '✋'
    };
    return simbol[pilihan];
}
