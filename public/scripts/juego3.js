    let modo = '';
    let nombres = { jugador1: 'Jugador 1', jugador2: 'Jugador 2' };
    let puntajes = { jugador1: 0, jugador2: 0 };
    let turnoJugador = 1;
    let eleccionJugador1 = '';

    function seleccionarModo(elegido) {
      modo = elegido;
      document.getElementById('formularioNombres').classList.remove('hidden');
      document.getElementById('nombre1').classList.remove('hidden');
      document.getElementById('nombre2').classList.toggle('hidden', modo === 'maquina');
      document.getElementById('error').classList.add('hidden');
      // Limpio inputs
      document.getElementById('nombre1').value = '';
      document.getElementById('nombre2').value = '';
    }

    function iniciarJuego() {
      const nombre1 = document.getElementById('nombre1').value.trim();
      const nombre2 = document.getElementById('nombre2').value.trim();

      if (!nombre1 || (modo === 'jugador' && !nombre2)) {
        document.getElementById('error').classList.remove('hidden');
        return;
      }

      nombres.jugador1 = nombre1;
      nombres.jugador2 = modo === 'jugador' ? nombre2 : 'Máquina';

      document.getElementById('modal').classList.add('hidden');
      document.getElementById('juego').classList.remove('hidden');
      document.getElementById('modoActual').textContent = `Modo: ${modo === 'jugador' ? '1 vs 1' : 'Contra la Máquina'}`;
      actualizarRanking();
      actualizarTurno();
    }

    function volverAModal() {
      // Reseteo estado de juego para que pueda elegir modo y nombres nuevamente
      modo = '';
      turnoJugador = 1;
      eleccionJugador1 = '';
      puntajes = { jugador1: 0, jugador2: 0 };
      nombres = { jugador1: 'Jugador 1', jugador2: 'Jugador 2' };

      document.getElementById('juego').classList.add('hidden');
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('formularioNombres').classList.add('hidden');
      document.getElementById('error').classList.add('hidden');
      document.getElementById('resultado').textContent = '';
      document.getElementById('modoActual').textContent = '';
      document.getElementById('turno').textContent = '';
      actualizarRanking();
    }

    function actualizarRanking() {
      document.getElementById('ranking').innerHTML = `
        <li>${nombres.jugador1}: ${puntajes.jugador1}</li>
        <li>${nombres.jugador2}: ${puntajes.jugador2}</li>
      `;
    }

    function actualizarTurno() {
      if (modo === 'jugador') {
        document.getElementById('turno').textContent = `Turno de: ${turnoJugador === 1 ? nombres.jugador1 : nombres.jugador2}`;
      } else {
        document.getElementById('turno').textContent = `${nombres.jugador1}, hacé tu jugada.`;
      }
    }

    function jugar(eleccion) {
      if (modo === 'maquina') {
        const opciones = ['piedra', 'papel', 'tijeras'];
        const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
        const resultado = obtenerResultado(eleccion, eleccionMaquina);
        mostrarResultado(eleccion, eleccionMaquina, resultado);
      } else {
        if (turnoJugador === 1) {
          eleccionJugador1 = eleccion;
          turnoJugador = 2;
          actualizarTurno();
        } else {
          const resultado = obtenerResultado(eleccionJugador1, eleccion);
          mostrarResultado(eleccionJugador1, eleccion, resultado);
          turnoJugador = 1;
          actualizarTurno();
        }
      }
    }

    function obtenerResultado(j1, j2) {
      if (j1 === j2) return 'empate';
      if (
        (j1 === 'piedra' && j2 === 'tijeras') ||
        (j1 === 'papel' && j2 === 'piedra') ||
        (j1 === 'tijeras' && j2 === 'papel')
      ) {
        puntajes.jugador1++;
        return 'gana1';
      } else {
        puntajes.jugador2++;
        return 'gana2';
      }
    }

    function mostrarResultado(j1, j2, resultado) {
      let texto = `${nombres.jugador1} eligió ${j1} - ${nombres.jugador2} eligió ${j2} → `;
      if (resultado === 'empate') texto += '¡Empate!';
      else if (resultado === 'gana1') texto += `¡Gana ${nombres.jugador1}!`;
      else texto += `¡Gana ${nombres.jugador2}!`;

      document.getElementById('resultado').textContent = texto;
      actualizarRanking();
    }