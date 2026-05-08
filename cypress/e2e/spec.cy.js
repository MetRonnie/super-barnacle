import { hello } from '@/foo.js'

describe('template spec', () => {
  it('passes', () => {
    expect(hello()).to.equal('Hello, world!')
  })
})
