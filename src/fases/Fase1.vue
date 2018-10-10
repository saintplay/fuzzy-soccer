<script>
import { criterios } from '@/codigo/criterios'

export default {
  data: () => ({
    criterios: criterios,
  }),
  name: 'fase-1',
}
</script>

<template>
  <v-container class="fase-container">
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="title text-xs-center">Fase 1: Elegir Criterios de Evaluación</h1>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          class="elevation-1 mt-4"
          :headers="[
            { text: 'Nombre', value: 'nombre', sortable: false },
            { text: 'Descripción', value: 'descripcion', sortable: false },
          ]"
          :items="criterios"
          hide-actions>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.nombre }}</td>
              <td>{{ item.descripcion }}</td>
            </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
