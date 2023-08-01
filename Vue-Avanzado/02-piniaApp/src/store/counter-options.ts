import { defineStore } from 'pinia'

// para no typar nuestro define store ya que es muy tedioso
//?creanos una interface por fuera y asi definirlo en nuestro state */

interface CounterOptionState {
  count: number

  //?Puede ser una fecha (date ) o undefined... pero en lugar de declararlo se asigna el '?' para que  sea opcional
  lastChanged?: Date
}

//?NOS LLEVAMOS ESTE COUNTER OPTIONS A NUESTRO PAGE.vue
export const useCounterOptionsStore = defineStore('counterOptions', {
  state: () =>
    ({
      count: 0,
      lastChanged: undefined
    }) as CounterOptionState, //Nos traemos la interface y la declaramos asi

  getters: {
    //hacemos los calculos del count
    // Recibios el state como parametro para acceder a state
    squareCount: (state) => state.count * state.count
  },
  //defino las acciones por ejemplo cambiar el contador

  actions: {
    //queremos incrementar el valor de count
    incrementBy(value: number) {
      this.count += value
      //
      this.lastChanged = new Date()
    },

    increment() {
      this.incrementBy(1)
    }
  }
})
