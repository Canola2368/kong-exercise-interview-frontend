import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavButton from './NavButton.vue'
import AccountButton from './AccountButton.vue'

describe('navigation bar', () => {
  it('shows the organization button', async () => {
    const wrapper = mount(NavButton, {
      props: { label: 'organization', link: '/organization' },
    })
    expect(wrapper.findTestId('organization').isVisible()).toBe(true)
  })

  it('shows the settings button', async () => {
    const wrapper = mount(NavButton, {
      props: { label: 'settings', link: '/settings' },
    })
    expect(wrapper.findTestId('settings').isVisible()).toBe(true)
  })

  it('shows the account button', async () => {
    const wrapper = mount(AccountButton, {
      props: { name: 'account', link: '/account' },
    })
    expect(wrapper.findTestId('account').isVisible()).toBe(true)
  })

  // tba: mobile test for responsive purposes
})
