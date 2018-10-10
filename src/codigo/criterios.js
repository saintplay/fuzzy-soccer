import { posicionesIdentificadores } from './posiciones'
import { pesosIdentificadores } from './pesos'

export const criterios = [
  {
    id: 'SALTOS_CABECEAR',
    nombre: 'Saltar y Cabecear',
    descripcion: 'Capacidad de poder saltar alto y dar buenos cabezazos',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.NORMAL,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.MUY_IMPORTANTE,
    },
  },
  {
    id: 'TIROS',
    nombre: 'Tiros',
    descripcion: 'Capacidad de ejecutar correctamente tiros de pelota parada',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.MUY_IMPORTANTE,
    },
  },
  {
    id: 'PASES_CORTOS',
    nombre: 'Pases Cortos',
    descripcion: 'Habilidad para ejecutar buenos pases a cortas distancias',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.IMPORTANTE,
    },
  },
  {
    id: 'PASES_LARGOS',
    nombre: 'Pases Largos',
    descripcion: 'Habilidad para ejecutar buenos pases a largas distancias',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.IMPORTANTE,
    },
  },
  {
    id: 'CENTROS',
    nombre: 'Centros',
    descripcion: 'Habilidad para ejecutar buenos centros',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.IMPORTANTE,
    },
  },
  {
    id: 'CONTROL_BALON',
    nombre: 'Control del Balón',
    descripcion: 'Habilidad de tener buen control del balón, aplicar tecnicas como la bicicleta',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.MUY_IMPORTANTE,
    },
  },
  {
    id: 'DEFINICION',
    nombre: 'Definición',
    descripcion: 'Capacidad de convertir oportunidades de gol a gol',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.MUY_IMPORTANTE,
    },
  },
  {
    id: 'VELOCIDAD',
    nombre: 'Velocidad',
    descripcion: 'Velocidad del jugador durante todo el partido',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.MUY_IMPORTANTE,
    },
  },
  {
    id: 'CREATIVIDAD',
    nombre: 'Creatividad',
    descripcion: 'Capacidad de crear situaciones poco predecibles',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.IMPORTANTE,
    },
  },
  {
    id: 'AMBIDIESTRO',
    nombre: 'Ambidiestro',
    descripcion: 'Capacidad de dominar el balón con ambos pies',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.IMPORTANTE,
    },
  },
  {
    id: 'ALTURA',
    nombre: 'Altura',
    descripcion: 'La altura del jugador',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.IMPORTANTE,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.NO_TAN_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.MUY_IMPORTANTE,
    },
  },
  {
    id: 'RENDIMIENTO',
    nombre: 'Rendimiento',
    descripcion: 'Rendimiento del jugador durante todo el partido',
    pesos: {
      [posicionesIdentificadores.DEFENSA]: pesosIdentificadores.NORMAL,
      [posicionesIdentificadores.MEDIOCAMPISTA]: pesosIdentificadores.MUY_IMPORTANTE,
      [posicionesIdentificadores.DELANTERO]: pesosIdentificadores.IMPORTANTE,
    },
  },
]

export const criteriosIdentificadores = {
  SALTOS_CABECEAR: 'SALTOS_CABECEAR',
  TIROS: 'TIROS',
  PASES_CORTOS: 'PASES_CORTOS',
  PASES_LARGOS: 'PASES_LARGOS',
  CENTROS: 'CENTROS',
  CONTROL_BALON: 'CONTROL_BALON',
  DEFINICION: 'DEFINICION',
  VELOCIDAD: 'VELOCIDAD',
  CREATIVIDAD: 'CREATIVIDAD',
  AMBIDIESTRO: 'AMBIDIESTRO',
  ALTURA: 'ALTURA',
  RENDIMIENTO: 'RENDIMIENTO',
}
