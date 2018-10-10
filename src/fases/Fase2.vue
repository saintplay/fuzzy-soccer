<script>
import { posicionesIdentificadores } from '@/codigo/posiciones'
import { criterios } from '@/codigo/criterios'
import { pesos } from '@/codigo/pesos'

export default {
  data: () => ({
    posicionesIdentificadores,
    criterios,
    pesos,
  }),
  name: 'fase-2',
}
</script>

<template>
  <v-container class="fase-container">
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="title text-xs-center">Fase 2: Darle Pesos a los Criterios</h1>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          class="elevation-1 mt-4"
          :headers="[
            { text: 'Criterio', align: 'center', sortable: false },
            { text: 'Defensas', align: 'center', sortable: false },
            { text: 'Mediocampistas', align: 'center', sortable: false },
            { text: 'Delanteros', align: 'center', sortable: false },
          ]"
          :items="criterios"
          hide-actions>
            <template slot="items" slot-scope="{ item }">
              <td> <span class="caption"> {{ item.nombre }} </span> </td>
              <td>
                <v-select
                  v-model="item.pesos[posicionesIdentificadores.DEFENSA]"
                  class="my-4"
                  :items="pesos"
                  item-text="nombre"
                  item-value="id"
                  hide-details
                  label="Peso"
                  solo />
              </td>
              <td>
                <v-select
                  v-model="item.pesos[posicionesIdentificadores.MEDIOCAMPISTA]"
                  class="my-4"
                  :items="pesos"
                  item-text="nombre"
                  item-value="id"
                  hide-details
                  label="Peso"
                  solo />
              </td>
              <td>
                <v-select
                  v-model="item.pesos[posicionesIdentificadores.DELANTERO]"
                  class="my-4"
                  :items="pesos"
                  item-text="nombre"
                  item-value="id"
                  hide-details
                  label="Peso"
                  solo />
              </td>
            </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
