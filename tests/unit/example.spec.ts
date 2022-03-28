import { mount } from '@vue/test-utils'
import MrPageMain from '@/views/MrPageMain.vue'

describe('MrPageMain.vue', () => {
  it('renders main view', () => {
    const mockRoute = {
    }
    const wrapper = mount(MrPageMain, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
  })
})
