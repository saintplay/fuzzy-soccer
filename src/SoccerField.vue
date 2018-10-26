<template>
  <div class="soccer-field">
    <jugador-en-campo x="200px" y="80px" :jugador="defensa1"></jugador-en-campo>
    <jugador-en-campo x="200px" y="180px" :jugador="defensa2"></jugador-en-campo>
    <jugador-en-campo x="200px" y="280px" :jugador="defensa3"></jugador-en-campo>
    <jugador-en-campo x="450px" y="30px" :jugador="mediocampista1"></jugador-en-campo>
    <jugador-en-campo x="420px" y="130px" :jugador="mediocampista2"></jugador-en-campo>
    <jugador-en-campo x="420px" y="230px" :jugador="mediocampista3"></jugador-en-campo>
    <jugador-en-campo x="450px" y="330px" :jugador="mediocampista4"></jugador-en-campo>
    <jugador-en-campo x="calc(100% - 250px)" y="80px" :jugador="delantero1"></jugador-en-campo>
    <jugador-en-campo x="calc(100% - 200px)" y="180px" :jugador="delantero2"></jugador-en-campo>
    <jugador-en-campo x="calc(100% - 250px)" y="280px" :jugador="delantero3"></jugador-en-campo>
    <div class="gen-bdr">
      <div class="lines">
        <div class="line l0 c st"></div>
        <div id="l2" class="line c"></div>
        <div  id="l4" class="line c"></div>
        <div id="l6" class="line c"></div>
        <div id="l7" class="line "></div>
        <div id="l10" class="line c nd"></div>
      </div>
      <div class="left">
        <div class="s">
          <div class="goal"></div>
        </div>
      </div>
      <div class="center">
        <div class="dot">
        </div>
      </div>
      <div class="right">
        <div class="s">
          <div class="goal"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JugadorEnCampo from './JugadorEnCampo.vue'

export default {
  name: 'soccer-field',
  components: {
    JugadorEnCampo,
  },
  props: {
    defensa1: { type: Object, required: true },
    defensa2: { type: Object, required: true },
    defensa3: { type: Object, required: true },
    mediocampista1: { type: Object, required: true },
    mediocampista2: { type: Object, required: true },
    mediocampista3: { type: Object, required: true },
    mediocampista4: { type: Object, required: true },
    delantero1: { type: Object, required: true },
    delantero2: { type: Object, required: true },
    delantero3: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped>
$border: #b6d192;

.soccer-field {
  width: 900px;
  height: 450px;
  background: #333;
  position: absolute;

  @media screen and (max-width: 767px) {
    left: calc(-50vw + 50%);
  }

  .gen-bdr {
    width: 88%;
    height: 90%;
    border: 3px solid $border;
    position: absolute;
    top: 5%;
    left: 6%;
    overflow: hidden;
    .left {
      .s {
        position: absolute;
        width: 20%;
        height: 60%;
        top: 20%;
        left: -2px;
        border: 2px solid $border;
      }
      &:before {
        content: '';
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        left: 0;
        margin-left: -20px;
        margin-top: -20px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border-right: 2px solid $border;
        border-bottom: 2px solid $border;
        top: 0;
      }
      &:after {
        content: '';
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        left: 0;
        margin-left: -20px;
        margin-bottom: -20px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border-right: 2px solid $border;
        border-top: 2px solid $border;
        bottom: 0;
      }
    }
    .center {
      overflow: hidden;
      height: 100%;
      width: 60%;
      position: absolute;
      left: 20%;
      &:before {
        content: '';
        width: 80px;
        height: 80px;
        top: 50%;
        margin-top: -40px;
        left: -60px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        position: absolute;
        border: 2px solid $border;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      &:after {
        content: '';
        width: 80px;
        height: 80px;
        top: 50%;
        margin-top: -40px;
        right: -60px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        position: absolute;
        border: 2px solid $border;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .dot {
        height: 100%;
        width: 2px;
        left: 50%;
        margin-left: -1px;
        position: absolute;
        background: $border;
        &:before {
          content: '';
          width: 10px;
          height: 10px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -5px;
          margin-top: -5px;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background: $border;
        }
        &:after {
          content: '';
          display: block;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -50px;
          margin-top: -50px;
          border: 2px solid $border;
          box-sizing: border-box;
          width: 100px;
          height: 100px;
        }
      }
    }
    .right {
      .s {
        position: absolute;
        width: 20%;
        height: 60%;
        top: 20%;
        right: -2px;
        border: 2px solid $border;
      }
      &:before {
        content: '';
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        right: 0;
        margin-right: -20px;
        margin-top: -20px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border-left: 2px solid $border;
        border-bottom: 2px solid $border;
        top: 0;
      }
      &:after {
        content: '';
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        right: 0;
        margin-right: -20px;
        margin-bottom: -20px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border-left: 2px solid $border;
        border-top: 2px solid $border;
        bottom: 0;
      }
    }
    .line {
      width: 10%;
      float: left;
      position: absolute;
      height: 100%;
      &.c {
        background: rgba(0, 0, 0, 0.2);
      }
      &.st,
      &.nd {
        width: 5%;
      }

      &#l2 {
        left: 20%;
      }
      &#l4 {
        left: 45%;
      }

      &#l6 {
        left: 70%;
      }

      &#l10 {
        left: 95%;
      }
    }
  }
}
</style>
