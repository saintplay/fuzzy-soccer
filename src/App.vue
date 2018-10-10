<script>
import Fase1 from '@/fases/Fase1'
import Fase2 from '@/fases/Fase2'
import Fase3 from '@/fases/Fase3'
import Fase4 from '@/fases/Fase4'
import Fase5 from '@/fases/Fase5'

export default {
  components: {
    Fase1,
    Fase2,
    Fase3,
    Fase4,
    Fase5,
  },
  name: 'app',
}
</script>

<template>
  <v-app id="app">
    <v-carousel height="100%" light :cycle="false" hide-delimiters>
      <v-carousel-item>
        <fase-1 />
      </v-carousel-item>
      <v-carousel-item>
        <fase-2 />
      </v-carousel-item>
      <v-carousel-item>
        <fase-3 />
      </v-carousel-item>
      <v-carousel-item>
        <fase-4 />
      </v-carousel-item>
      <v-carousel-item>
        <fase-5 />
      </v-carousel-item>
   </v-carousel>
  </v-app>
</template>

<style>
.jugador-th {
  min-width: 150px;
}
</style>
