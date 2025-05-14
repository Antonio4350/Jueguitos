const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const startBtn = document.getElementById('startBtn');
const status = document.getElementById('status');

const buttons = [green, red, yellow, blue];
const colors = ['green', 'red', 'yellow', 'blue'];

let sequence = [];
let playerSequence = [];
let level = 0;
let waitingForInput = false;

// Función para iluminar un botón
function lightUp(color) {
  const btn = buttons[colors.indexOf(color)];
  btn.classList.add('brightness-150');
  setTimeout(() => btn.classList.remove('brightness-150'), 600);
}

// Función para reproducir la secuencia
function playSequence() {
  waitingForInput = false;
  let i = 0;
  const interval = setInterval(() => {
    lightUp(sequence[i]);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
      waitingForInput = true;
      status.textContent = `Turno del jugador: nivel ${level}`;
      playerSequence = [];
    }
  }, 800);
}

// Manejo del click en los botones de colores
buttons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (!waitingForInput) return;

    lightUp(colors[idx]);
    playerSequence.push(colors[idx]);

    // Comprobar si la secuencia es correcta hasta ahora
    const currentStep = playerSequence.length - 1;
    if (playerSequence[currentStep] !== sequence[currentStep]) {
      status.textContent = '¡Fallaste! Juego terminado.';
      waitingForInput = false;
      startBtn.disabled = false;
      return;
    }

    // Si completó la secuencia correctamente
    if (playerSequence.length === sequence.length) {
      status.textContent = '¡Correcto! Preparando siguiente nivel...';
      waitingForInput = false;
      setTimeout(nextLevel, 1000);
    }
  });
});

// Iniciar el juego
function startGame() {
  sequence = [];
  level = 0;
  startBtn.disabled = true;
  status.textContent = 'Comenzando...';
  nextLevel();
}

function nextLevel() {
  level++;
  status.textContent = `Nivel ${level}`;
  // Añadir nuevo color aleatorio
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(randomColor);
  playSequence();
}

startBtn.addEventListener('click', startGame);
