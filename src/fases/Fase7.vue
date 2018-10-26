<script>
import { jugadores } from '@/codigo/jugadores'
import { obtenerPuntajeTotal } from '@/codigo/puntajes'
import { posicionesIdentificadores } from '@/codigo/posiciones'

import SoccerField from '@/SoccerField'

export default {
  components: {
    SoccerField,
  },
  data: () => ({
    jugadores,
  }),
  computed: {
    defensas() {
      return jugadores
        .filter(jugador => jugador.posicion === posicionesIdentificadores.DEFENSA)
        .map(jugador => ({ ...jugador, puntajeTotal: obtenerPuntajeTotal(jugador) }))
        .sort((jugador1, jugador2) => jugador2.puntajeTotal - jugador1.puntajeTotal)
    },
    mediocampistas() {
      return jugadores
        .filter(jugador => jugador.posicion === posicionesIdentificadores.MEDIOCAMPISTA)
        .map(jugador => ({ ...jugador, puntajeTotal: obtenerPuntajeTotal(jugador) }))
        .sort((jugador1, jugador2) => jugador2.puntajeTotal - jugador1.puntajeTotal)
    },
    delanteros() {
      return jugadores
        .filter(jugador => jugador.posicion === posicionesIdentificadores.DELANTERO)
        .map(jugador => ({ ...jugador, puntajeTotal: obtenerPuntajeTotal(jugador) }))
        .sort((jugador1, jugador2) => jugador2.puntajeTotal - jugador1.puntajeTotal)
    },
  },
  name: 'fase-7',
}
</script>

<template>
  <div class="fase-container">
    <h1 class="title text-xs-center my-4">Fase 7: Selección del Equipo</h1>
      <div class="soccer-wrapper">
        <soccer-field
          :defensa1="defensas[0]"
          :defensa2="defensas[1]"
          :defensa3="defensas[2]"
          :mediocampista1="mediocampistas[0]"
          :mediocampista2="mediocampistas[1]"
          :mediocampista3="mediocampistas[2]"
          :mediocampista4="mediocampistas[3]"
          :delantero1="delanteros[0]"
          :delantero2="delanteros[1]"
          :delantero3="delanteros[2]"
        ></soccer-field>
      </div>
  </div>
</template>

<style>
.soccer-wrapper {
  position: relative;
  display: flex;
  min-height: 500px;
  justify-content: center;
}

@media screen and (max-width: 767px) {
  .soccer-wrapper {
    overflow-x: scroll;
  }
}
</style>
