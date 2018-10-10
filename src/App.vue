<script>
import Fase1 from '@/fases/Fase1'
import Fase2 from '@/fases/Fase2'
import Fase3 from '@/fases/Fase3'

export default {
  components: {
    Fase1,
    Fase2,
    Fase3,
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
   </v-carousel>
  </v-app>
</template>
