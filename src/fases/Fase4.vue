<script>
import { jugadores } from '@/codigo/jugadores'
import { criterios } from '@/codigo/criterios'
import { posicionesIdentificadores } from '@/codigo/posiciones'

export default {
  data: () => ({
    jugadores,
    criterios,
    valoresDePuntajes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
  computed: {
    mediocampistas() {
      return jugadores.filter(jugador => jugador.posicion === posicionesIdentificadores.MEDIOCAMPISTA)
    },
  },
  name: 'fase-4',
}
</script>

<template>
  <v-container class="fase-container">
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="title text-xs-center">Fase 4: Evaluar a los Jugadores Mediocampistas</h1>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          class="elevation-1 mt-4"
          :headers="[
            { text: 'Jugador', align: 'center', sortable: false, class: 'jugador-th' },
            ...criterios.map(criterio => ({ text: criterio.nombre, sortable: false, class: 'criterio-th'  })),
          ]"
          :items="mediocampistas"
          hide-actions>
            <template slot="items" slot-scope="{ item, index }">
              <td class="text-xs-center">
                <div class="py-2">
                  <v-img
                    class="mb-2"
                    :src="item.foto"
                    aspect-ratio="1" />
                  <span class="caption font-weight-light">{{ item.nombre }}</span>
                </div>
              </td>
              <td v-for="criterio in criterios" :key="criterio.id">
                <v-select v-model="item.puntajes[criterio.id]" :items="valoresDePuntajes" label="Puntuación" hide-details />
              </td>
            </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
