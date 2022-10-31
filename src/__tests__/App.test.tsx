import renderer, { act } from 'react-test-renderer'
import App from '../App'

const mockData = {
  data: [
    { name: 'a fake name', username: 'fake username', email: 'fake@email.com' },
    {
      name: 'a fake name 2',
      username: 'fake username 2',
      email: 'fake2@email.com',
    },
  ],
}

jest.mock('axios', () => {
  return {
    get: jest.fn().mockImplementationOnce(() => Promise.resolve(mockData))

  }
})

describe('App component', () => {
  it('it works', async () => {
    let tree
    await act(async () => {
      tree = renderer.create(<App />)
    })
    console.log(tree.toJSON());
    console.log("------ " + tree.toJSON().props.className);
    expect(tree.toJSON().props.className).toBe("App");
  })
})
