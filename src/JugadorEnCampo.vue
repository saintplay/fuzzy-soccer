<template>
  <div class="jugador-campo" :style="{ top: y, left: x }">
    <img
      :src="jugador.foto"
      class="mb-2 mx-auto jugador-extrasmall-image"
      rounded="circle" />
    <span class="caption font-weight-light">{{ jugador.nombre }}</span>
  </div>
</template>

<script>
export default {
  name: 'jugador-en-campo',
  props: {
    x: {
      type: String,
      required: true,
    },
    y: {
      type: String,
      required: true,
    },
    jugador: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.jugador-campo {
  position: absolute;
  z-index: 2;
  color: white;
}
.jugador-extrasmall-image {
  display: block;
  width: 60px;
  height: auto;
}
</style>
