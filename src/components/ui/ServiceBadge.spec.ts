import { describe, it, beforeEach, afterEach, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServiceBadge from './ServiceBadge.vue'
import ServiceModal from './ServiceModal.vue'
import type { ServiceVersion } from 'types'

const versionMock = [
  {
    id: 'e99f0377-a254-4315-924d-721db1588f9a',
    name: '9.6.2',
    description: 'Multi-tiered 5th generation process improvement',
    developer: {
      id: '14543288-21f2-4522-96a7-363bc1966278',
      name: 'Loren Thiel',
      email: 'Loren_Thiel@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/43187312',
    },
    updated_at: '2023-09-13T23:04:17.640Z',
    type: 'http',
  },
]

describe('badge and modal on click', () => {
  beforeEach(() => {
    const el = document.createElement('section')
    el.id = 'modal'
    document.body.appendChild(el)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('teleport and modal should be rendered', async () => {
    const wrapper = mount(ServiceBadge, { props: { versions: versionMock as unknown as ServiceVersion[], id: '123' } })
    await wrapper.findTestId('versions-badge').trigger('click')
    const modal = wrapper.getComponent(ServiceModal)

    expect(modal.findTestId('versions-title').isVisible()).toBe(true)

  })
})
