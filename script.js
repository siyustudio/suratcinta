document.addEventListener('DOMContentLoaded', function() {

    // --- Bagian Generator Alasan ---
    const reasonBtn = document.getElementById('reason-btn');
    const reasonDisplay = document.getElementById('reason-display');

    // GANTI DENGAN ALASAN-ALASAN VERSI KAMU SENDIRI!
    const reasons = [
        "Karena senyummu bisa mencerahkan hariku yang paling gelap sekalipun.",
        "Karena kamu selalu tahu cara membuatku tertawa.",
        "Karena kamu orang yang paling baik hati yang pernah aku kenal.",
        "Karena caramu menatapku membuatku merasa jadi orang paling spesial di dunia.",
        "Karena bersamamu, aku merasa seperti di rumah.",
        "Karena kamu sabar banget menghadapiku.",
        "Karena kamu mendukung semua mimpi-mimpiku.",
        "Karena kamu membuatku ingin jadi versi terbaik dari diriku.",
        "Karena setiap momen bersamamu adalah kenangan yang indah.",
        "Karena kamu menerimaku apa adanya."
    ];

    reasonBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        let randomReason = reasons[randomIndex];

        // Pastikan alasan baru tidak sama dengan yang lama
        while (randomReason === reasonDisplay.textContent) {
            const newRandomIndex = Math.floor(Math.random() * reasons.length);
            randomReason = reasons[newRandomIndex];
        }
        
        // Efek fade out-in
        reasonDisplay.style.opacity = '0';
        setTimeout(() => {
            reasonDisplay.textContent = randomReason;
            reasonDisplay.style.opacity = '1';
        }, 500); // Waktu harus cocok dengan transisi di CSS
    });


    // --- Bagian Modal Surat Cinta ---
    const modal = document.getElementById('letter-modal');
    const openBtn = document.getElementById('open-letter-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Fungsi untuk membuka modal
    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fungsi untuk menutup modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fungsi untuk menutup modal jika klik di luar area konten
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

});