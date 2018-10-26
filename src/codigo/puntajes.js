import { obtenerValordePeso } from './pesos'
import { criterios } from './criterios'

// PUNTAJE TOTAL = (PUNTAJE) X (VALOR DE PESO) => (9 X 3) + (8 X 2) + (4 x 5) + (5 X 3)
// PUNTAJE TOTAL = 78

export const obtenerPuntajeTotal = jugador => {
  let puntajeTotal = 0

  criterios.forEach(criterio => {
    const puntaje = jugador.puntajes[criterio.id]
    const peso = criterio.pesos[jugador.posicion] // Peso es el nombre: 'MUY IMPORTATE', 'NORMAL', etc
    const valorDePeso = obtenerValordePeso(peso) // Valor de Peso es un número equivalente: 5, 3, 4, etc

    const puntajeDeCriterio = puntaje * valorDePeso
    puntajeTotal += puntajeDeCriterio
  })

  return puntajeTotal
}
