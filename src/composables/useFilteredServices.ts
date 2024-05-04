import { ref } from 'vue'
import type { AxiosError } from 'axios'
import axios, { isAxiosError } from 'axios'
import type { Service } from 'types'

export default function useFilteredServices() {
  const filteredServices = ref<Service[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const filterServices = async (inputValue: string) => {
    loading.value = true
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/services?q=${inputValue}`)
      filteredServices.value = response.data
    } catch (error) {
      handleRequestError(error)
    } finally {
      loading.value = false
    }
  }

  const handleRequestError = (error: any) => {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.error('Request failed with status code', axiosError.response.status)
      } else if (axiosError.request) {
        console.error('No response received from server')
      } else {
        console.error('Error setting up the request', axiosError.message)
      }
    } else {
      console.error('Non-Axios error occurred', error.message)
      error.value = `Non-Axios error occurred: ${error.message}`
    }
  }

  filterServices('')

  return {
    filteredServices,
    loading,
    error,
    filterServices,
  }
}
