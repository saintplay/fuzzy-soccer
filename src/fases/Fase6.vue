<script>
import { jugadores } from '@/codigo/jugadores'
import { obtenerPuntajeTotal } from '@/codigo/puntajes'
import { posicionesIdentificadores } from '@/codigo/posiciones'

export default {
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
  name: 'fase-6',
}
</script>

<template>
  <v-container class="fase-container">
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="title text-xs-center">Fase 6: Resultados de las Evaluaciones Personales</h1>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs4>
        <v-data-table
          class="elevation-1"
          :headers="[
            { text: '', align: 'center', sortable: false },
            { text: 'Defensas', align: 'center', sortable: false, class: 'jugador-th' },
            { text: 'Resultados', align: 'center', sortable: false }
          ]"
          :items="defensas"
          hide-actions>
            <template slot="items" slot-scope="{ item, index }">
              <td class="text-xs-center">
                <span class="caption font-weight-light">{{ index + 1 }}</span>
              </td>
              <td class="text-xs-center">
                <div class="py-2">
                  <v-img
                    class="mb-2 mx-auto jugador-small-image"
                    :src="item.foto" />
                  <span class="caption font-weight-light">{{ item.nombre }}</span>
                </div>
              </td>
              <td class="text-xs-center">
                <span class="caption font-weight-bold">{{ item.puntajeTotal }}</span>
              </td>
            </template>
        </v-data-table>
      </v-flex>
      <v-flex xs4>
        <v-data-table
          class="elevation-1"
          :headers="[
            { text: '', align: 'center', sortable: false },
            { text: 'Mediocampistas', align: 'center', sortable: false, class: 'jugador-th' },
            { text: 'Resultados', align: 'center', sortable: false }
          ]"
          :items="mediocampistas"
          hide-actions>
            <template slot="items" slot-scope="{ item, index }">
              <td class="text-xs-center">
                <span class="caption font-weight-light">{{ index + 1 }}</span>
              </td>
              <td class="text-xs-center">
                <div class="py-2">
                  <v-img
                    class="mb-2 mx-auto jugador-small-image"
                    :src="item.foto" />
                  <span class="caption font-weight-light">{{ item.nombre }}</span>
                </div>
              </td>
              <td class="text-xs-center">
                <span class="caption font-weight-bold">{{ item.puntajeTotal }}</span>
              </td>
            </template>
        </v-data-table>
      </v-flex>
      <v-flex xs4>
        <v-data-table
          class="elevation-1"
          :headers="[
            { text: '', align: 'center', sortable: false },
            { text: 'Delanteros', align: 'center', sortable: false, class: 'jugador-th' },
            { text: 'Resultados', align: 'center', sortable: false }
          ]"
          :items="delanteros"
          hide-actions>
            <template slot="items" slot-scope="{ item, index }">
              <td class="text-xs-center">
                <span class="caption font-weight-light">{{ index + 1 }}</span>
              </td>
              <td class="text-xs-center">
                <div class="py-2">
                  <v-img
                    class="mb-2 mx-auto jugador-small-image"
                    :src="item.foto" />
                  <span class="caption font-weight-light">{{ item.nombre }}</span>
                </div>
              </td>
              <td class="text-xs-center">
                <span class="caption font-weight-bold">{{ item.puntajeTotal }}</span>
              </td>
            </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
