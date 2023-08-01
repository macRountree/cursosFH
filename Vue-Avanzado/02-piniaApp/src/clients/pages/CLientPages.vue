<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClient from '@/clients/composables/useCLient'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
//nos traemos el composable de useClient

//Mandamos el id con el useRounte (composable de vue)

const route = useRoute()
const router = useRouter()
const {
  client,
  isLoading,
  isError,
  clientMutation,
  updateClient,
  isUpdating,

  isUpdatingSuccess
} = useClient(+route.params.id)

// const updateClient = async (client: Client): Promise<Client> => {
//   await new Promise((res) => {
//     setTimeout(() => res(true), 2000)
//   })
//   const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client)
//   return data
// }

// const clientMutation = useMutation(updateClient)
//SI QUEREMOS trabajar con tansktack .. el use Query

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset()
  }, 2000)
})

watch(isError, () => {
  if (isError.value) router.replace('/clients')
})
</script>

<template>
  <h3 v-if="isUpdating">Guardando ...</h3>
  <h3 v-if="isUpdatingSuccess">Guardado</h3>
  <LoadingModal v-if="isLoading" />
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <!-- ? TS no interpretara el client del form.. pero siepre tendra un valor -->
    <form @submit.prevent="updateClient(client!)">
      <input type="text" placeholder="Nombre del CLiente" v-model="client.name" />
      <br />
      <input type="text" placeholder="Direccion" v-model="client.address" />
      <br />

      <button type="submit" :disabled="isUpdating">Guardar</button>
    </form>
  </div>

  <code>{{ client }}</code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}
</style>
