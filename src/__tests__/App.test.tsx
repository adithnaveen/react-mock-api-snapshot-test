import renderer, { act } from 'react-test-renderer'
import App from '../App'

const mockData = {
  data: [
    { name: 'a fake name', surname: 'fake surname', email: 'fake@email.com' },
    {
      name: 'a fake name 2',
      surname: 'fake surname 2',
      email: 'fake@email.com',
    },
  ],
}

jest.mock('axios', () => {
  return {
    get: jest.fn().mockImplementationOnce(() => Promise.resolve(mockData)),
  }
})

describe('App component', () => {
  it('it works', async () => {
    let tree
    await act(async () => {
      tree = renderer.create(<App />)
    })
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
