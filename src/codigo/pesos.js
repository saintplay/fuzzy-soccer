export const obtenerValordePeso = pesoIdentificador => {
  switch (pesoIdentificador) {
    case pesosIdentificadores.NO_IMPORTANTE:
      return 1 // NO IMPORTANTE VALE 1
    case pesosIdentificadores.NO_TAN_IMPORTANTE:
      return 2 // NO TAN IMPORTANTE VALE 2
    case pesosIdentificadores.NORMAL:
      return 3 // NORMAL VALE 3
    case pesosIdentificadores.IMPORTANTE:
      return 4 // IMPORTANTE VALE 4
    case pesosIdentificadores.MUY_IMPORTANTE:
      return 5 // MUY IMPORTANTE VALE 5
  }
}

export const pesos = [
  {
    id: 'NO_IMPORTANTE',
    nombre: 'No Importante',
  },
  {
    id: 'NO_TAN_IMPORTANTE',
    nombre: 'No Tan Importante',
  },
  {
    id: 'NORMAL',
    nombre: 'Normal',
  },
  {
    id: 'IMPORTANTE',
    nombre: 'Importante',
  },
  {
    id: 'MUY_IMPORTANTE',
    nombre: 'Muy Importante',
  },
]

export const pesosIdentificadores = {
  NO_IMPORTANTE: 'NO_IMPORTANTE',
  NO_TAN_IMPORTANTE: 'NO_TAN_IMPORTANTE',
  NORMAL: 'NORMAL',
  IMPORTANTE: 'IMPORTANTE',
  MUY_IMPORTANTE: 'MUY_IMPORTANTE',
}
