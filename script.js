// Configuración de la fecha
const startDate = new Date('2026-07-07T21:47:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Lógica del sobre
document.getElementById('envelope').onclick = () => {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    typeWriter("Dana, cada momento a tu lado se siente como un sueño del que no quiero despertar. No solo te amo por quien eres, sino por la paz que transmites y la forma en que haces que mis días tengan un propósito único. Prometo esforzarme cada día para ser alguien de quien te sientas orgullosa, cuidarte en cada paso y construir ese futuro brillante que tanto imagino junto a ti. Eres mi prioridad y mi mayor alegría.", 0);
    setInterval(updateTimer, 1000);
};

function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

let secretClicks = 0;
function checkSecret() {
    secretClicks++;
    if(secretClicks >= 5) alert("Mensaje secreto: ¡Eres la mejor decisión de mi vida!");
}