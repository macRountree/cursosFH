//? UTILIZAREMOS OTRO COMPOSABLE para cargar la info de cada cliente
//? en el otro composable de useClients ya utilizamos el use query

import { computed, ref, watch } from 'vue'
import type { Client } from '@/clients/interfaces/client'
import { useMutation, useQuery } from '@tanstack/vue-query'
import clientsApi from '@/api/clients-api'

//?AQUI CREAMOS NUESTRa funcion async para traernos la info del cliente

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get(`/clients/${id}`)
  return data
}
const updateClient = async (client: Client): Promise<Client> => {
  // await new Promise((res) => {
  //   setTimeout(() => res(true), 2000)
  // })
  const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client)
  return data
}
const useClients = (id: number) => {
  const client = ref<Client>()
  const clientMutation = useMutation(updateClient)

  //?Realizamos la peticion
  //En el use Query creamos un arreglo para manejar nuestro cache
  // ponemos un string cliente con su id

  const { isLoading, data, isError } = useQuery(['client', id], () => getClient(id), {
    retry: false
  })

  //?USAMOS WATCHpara estar pendiente de los ambios de la data

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value }
    },
    { immediate: true } //el immeadiate true es para que se monte la funcion
  )

  return {
    isLoading,
    client,
    clientMutation,
    isError,
    //method
    updateClient: clientMutation.mutate,
    isUpdating: computed(() => clientMutation.isLoading.value),
    isUpdatingSuccess: computed(() => clientMutation.isSuccess.value),
    isErrorUpdating: computed(() => clientMutation.isError.value)
  }
}

export default useClients
