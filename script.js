const startDate = new Date('2026-07-07T21:47:00');
let razonActual = 0;
const razones = [
    "Porque tu sonrisa es mi lugar favorito en el mundo.",
    "Porque me escuchas como nadie más lo hace.",
    "Porque cada día a tu lado es una aventura nueva.",
    // Aquí puedes pedirme que agregue las 100, iré poniendo de 10 en 10
];

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerHTML = `${days} días de nuestra historia`;
}

document.getElementById('envelope').onclick = () => {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    setInterval(updateTimer, 1000);
};

function showModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = text;
    document.getElementById('modal-card').style.display = 'flex';
}

function closeModal() { document.getElementById('modal-card').style.display = 'none'; }

function openDiario() {
    const contenido = "<img src='https://i.postimg.cc/vmbxPzJR/Chat-GPT-Image-13-jul-2026-09-33-41.png' style='width:100%; border-radius:15px; margin-bottom:15px;'><div class='firma-corazon'>❤️ Dana y Luis juntos por siempre ❤️</div><div class='fecha-minima'>13 de julio, 2026</div>";
    showModal("📖 Nuestra Historia", contenido);
}

function openRazones() {
    mostrarRazon(0);
}

function mostrarRazon(index) {
    razonActual = index;
    const razon = razones[index] || "Si tuviera que volver a elegir, te elegiría a ti una y otra vez. ❤️";
    const contenido = `<p style="font-size: 1.5rem; margin: 20px 0;">Razón ${index + 1} de ${razones.length}:</p>
                       <p style="font-size: 1.2rem; font-style: italic;">"${razon}"</p>
                       <div class="nav-buttons">
                           ${index > 0 ? `<button onclick="mostrarRazon(${index - 1})">Anterior</button>` : ""}
                           ${index < razones.length - 1 ? `<button onclick="mostrarRazon(${index + 1})">Siguiente</button>` : ""}
                       </div>`;
    showModal("✨ 100 Razones", contenido);
}
