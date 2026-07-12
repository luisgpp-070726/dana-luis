const startDate = new Date('2026-07-07T21:47:00');
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML = `${days} días, ${hours}h ${minutes}m ${seconds}s`;
}
document.getElementById('envelope').onclick = () => {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    typeWriter("Dana, cada segundo a tu lado confirma que eres la persona que quiero conmigo. No busco perfección, busco crecer contigo, cuidarte y hacerte sonreír cada día. Gracias por ser mi princesa y por permitirme escribir esta historia a tu lado.", 0);
    setInterval(updateTimer, 1000);
};
function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 40);
    }
}
function showModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal-card').style.display = 'flex';
}
function closeModal() { document.getElementById('modal-card').style.display = 'none'; }
function checkSecret() { alert("¡Te amo más de lo que las palabras pueden expresar!"); }
