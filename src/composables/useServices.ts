import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import type { Service } from 'types'

export default function useServices() {
  const services = ref<Service[]>([])
  const loading = ref(false)
  const error = ref(false)

  const getServices = async () => {
    try {
      loading.value = true
      const { data } = await axios.get(import.meta.env.VITE_APP_API_URL + '/api/services') // Using environment variable for API URL
      services.value = data
    } catch (err) {
      error.value = true
      console.error(err) // Output error for debugging
    } finally {
      loading.value = false
    }
  }

  onBeforeMount(async () => {
    await getServices()
  })

  return {
    services,
    loading,
    error,
  }
}
