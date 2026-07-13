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
    document.getElementById('modal-text').innerHTML = text;
    document.getElementById('modal-card').style.display = 'flex';
}
function closeModal() { document.getElementById('modal-card').style.display = 'none'; }
function checkSecret() { alert("¡Te amo más de lo que las palabras pueden expresar!"); }

// Función específica para el diario con la imagen nueva
function openDiario() {
    const titulo = "📖 Nuestra Historia";
    const contenido = "<img src='https://i.postimg.cc/vmbxPzJR/Chat-GPT-Image-13-jul-2026-09-33-41.png' style='width:100%; border-radius:15px; margin-bottom:15px;'><div class='firma-corazon'>❤️ Dana y Luis juntos por siempre ❤️</div><div class='fecha-minima'>13 de julio, 2026</div>";
    showModal(titulo, contenido);
}
