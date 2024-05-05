import { vi, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServiceCatalog from './ServiceCatalog.vue'
import servicesData from '../../../mocks/services'
import ServiceList from './ServiceList.vue'

// Mock the axios module for fetching API services
const mockedResponses = new Map().set(
  '/api/services',
  vi.fn(() => ({
    data: servicesData,
  })),
)

vi.mock('axios', async () => {
  const actual: any = await vi.importActual('axios')
  return {
    default: {
      ...actual.default,
      // Mock get request responses
      get: (url: string) =>
        vi
          .fn()
          .mockResolvedValue(
            mockedResponses.get(url) !== undefined
              ? mockedResponses.get(url)()
              : undefined,
          )(),
    },
    isAxiosError: (e: any) => console.error(e), // or any custom logic
  }
})

describe('ServiceCatalog', () => {
  it('shows the search input', async () => {
    const wrapper = mount(ServiceCatalog)
    expect(wrapper.findTestId('search-input').isVisible()).toBe(true)
  })

  it('properly handles no errors returned from api', async () => {
    const wrapper = mount(ServiceList, { props: { filteredServices: [], error: null } })
    expect(wrapper.findTestId('no-errors').isVisible()).toBe(true)
  })

  it('properly handles errors returned from api', async () => {
    const wrapper = mount(ServiceList, { props: { filteredServices: [], error: 'test' } })
    expect(wrapper.findTestId('valid-error').isVisible()).toBe(true)
  })
})
