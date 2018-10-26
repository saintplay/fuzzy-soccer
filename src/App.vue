<script>
import Fase1 from '@/fases/Fase1'
import Fase2 from '@/fases/Fase2'
import Fase3 from '@/fases/Fase3'
import Fase4 from '@/fases/Fase4'
import Fase5 from '@/fases/Fase5'
import Fase6 from '@/fases/Fase6'
import Fase7 from '@/fases/Fase7'

export default {
  data: () => ({
    faseActual: 1,
    cargando: false,
  }),
  methods: {
    cambiarFase(fase) {
      this.cargando = true

      this.$nextTick(() => {
        this.faseActual = fase
        this.$nextTick(() => {
          this.cargando = false
        })
      })
    },
  },
  components: {
    Fase1,
    Fase2,
    Fase3,
    Fase4,
    Fase5,
    Fase6,
    Fase7,
  },
  name: 'app',
}
</script>

<template>
  <v-app id="app">
    <v-stepper class="step-container" v-model="faseActual" non-linear>
      <v-stepper-header>
        <v-stepper-step class="v-stepper__step--editable" :step="1" @click.native.stop="cambiarFase(1)"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step class="v-stepper__step--editable" :step="2" @click.native.stop="cambiarFase(2)"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step class="v-stepper__step--editable" :step="3" @click.native.stop="cambiarFase(3)"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step class="v-stepper__step--editable" :step="4" @click.native.stop="cambiarFase(4)"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step class="v-stepper__step--editable" :step="5" @click.native.stop="cambiarFase(5)"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step class="v-stepper__step--editable" :step="6" @click.native.stop="cambiarFase(6)"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step class="v-stepper__step--editable" :step="7" @click.native.stop="cambiarFase(7)"></v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="`fase-${faseActual}`"></component>
      </keep-alive>
    </transition>

    <v-container class="loading-container" justify-center fluid fill-height>
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate />
    </v-container>
  </v-app>
</template>

<style>
.jugador-th {
  min-width: 150px;
}

.jugador-small-image {
  width: 100px;
  height: 100px;
}

.criterio-th {
  min-width: 180px;
}

.step-container {
  z-index: 30;
}

.fase-container {
  z-index: 20;
}

.loading-container {
  position: absolute;
  height: 100vh;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
