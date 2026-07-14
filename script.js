const startDate = new Date('2026-07-07T21:47:00');
// Ajustado: La Razón 1 se desbloquea el 14 de julio a las 07:00 AM (Cochabamba, -4:00)
const fechaInicioRazones = new Date('2026-07-14T07:00:00-04:00'); 

const razones = [
    "Porque tu sonrisa es mi lugar favorito en el mundo.",
    "Porque haces que mis días grises se conviertan en días llenos de color.",
    "Porque me escuchas con paciencia y me haces sentir comprendido siempre.",
    "Porque tu forma de ser es la más pura y hermosa que he conocido jamás.",
    "Porque juntos hacemos un equipo imparable que puede con todo.",
    "Porque tu risa es la melodía que me alegra el corazón cada vez que la escucho.",
    "Porque me inspiras a ser una mejor versión de mí mismo cada día.",
    "Porque a tu lado, el tiempo se detiene y solo importamos tú y yo.",
    "Porque tu apoyo incondicional me da fuerzas para enfrentar cualquier reto.",
    "Porque simplemente, eres la persona con la que quiero compartir el resto de mi vida."
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

// Lógica: Calcula cuántos días completos han pasado desde el 14 de julio
function obtenerRazonesDisponibles() {
    const now = new Date();
    const diff = now - fechaInicioRazones;
    const diasPasados = Math.floor(diff / (1000 * 60 * 60 * 24));
    // Si aún no es el 14 a las 7am, díasPasados será negativo, por eso usamos Math.max(0, ...)
    return Math.max(0, diasPasados + 1);
}

function mostrarRazon(index) {
    const disponibles = obtenerRazonesDisponibles();
    const razon = razones[index];
    
    let contenido = "";
    
    if (index < disponibles) {
        contenido = `<p style="font-size: 1.2rem; color: #881631;">Razón ${index + 1} de 100:</p>
                     <p style="font-size: 1.4rem; font-style: italic; color: #333; margin: 20px 0;">"${razon}"</p>`;
    } else {
        contenido = `<p style="font-size: 1.2rem; color: #881631;">¡Ups! Este es un secreto para mañana.</p>
                     <p>Vuelve mañana a las 7:00 AM para descubrir una nueva razón por la que te amo. 💖</p>`;
    }

    contenido += `<div class="nav-buttons">
                    ${index > 0 ? `<button onclick="mostrarRazon(${index - 1})">Anterior</button>` : ""}
                    ${index < (disponibles < razones.length ? disponibles : razones.length) - 1 ? `<button onclick="mostrarRazon(${index + 1})">Siguiente</button>` : ""}
                  </div>`;
                  
    showModal("✨ 100 Razones", contenido);
}

function openRazones() { mostrarRazon(0); }
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
