<<<<<<< HEAD
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
=======
var entrar=true;
var jugar=true;
while(entrar==true){
    orden= newArray();
    orden.pop();
    while(jugar==true){
        numusuario=newArray();
        var na= numeroRandom(1,4);
        function numeroRandom(min,max){
            orden.push(Math.floor(Math.random()* (max-min+1))+min);
        }
        for(let i=0;i>orden.lenght;i++)
        {
            if(orden[i]==1)
            {   
                const color= document.getElementById

            }
            if(orde[2]==1)
            {
                
            }
            if(orde[3]==1)
            {
                
            }
            if(orde[4]==1)
            {
                
            }
        }
        console.log(orden);
        if(orden!==numusuario)jugar==false;
    }
    function seguirJugando(){
        if(cartel==false)entrar==false;
            else if(cartel==true)jugar==true;
    }
}
>>>>>>> 7d6be219a9106b2080bbcafdc9ca75861904907b
