<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CounterSetupValue from '@/counter/components/CounterSetupValue.vue'
import { useCounterSetupStore } from '../../store/counter-setup'

const counterStore = useCounterSetupStore()

// A diferencia de un composable .. en pinia no se puede desestructurar nuestro count/square
/** 
 const{count,square} = useCounter OPTIONSStre(),
 */

//DESESTRUCTURAMOS DE LA SIGUIENTE MANERA

const { count, squareCount } = storeToRefs(counterStore)

const { increment, incrementBy } = counterStore
</script>

<template>
  <h1>Pinia Setup</h1>
  <h1>Counter: {{ count }}</h1>
  <h4>Counter Potencia: {{ squareCount }}</h4>

  <br />

  <div class="dflex">
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>

    <!-- $Reset() es un metdoo dentro del store de pinia  -->

    <!-- ?El RESET dara error en consola.. podemos usar $patch( ) o mantener la referencia a nuestro store -->
    <button @click="counterStore.$reset()">Reset</button>

    <br />
    <CounterSetupValue />
  </div>
</template>

<style scoped>
.dflex {
  display: flex;
  flex-direction: column;
}
button {
  margin: 0.5rem;
  background-color: #6aa60f;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #6aa60f9b;
}
</style>
