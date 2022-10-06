import proxy from '../src/strategies/proxy'

describe('proxy strategy', () => {
  it('generates a proxied image url', () => {
    expect(proxy('http://something.com/image')).toBe('https://images.cloudagentsuite.com/something.com/image')
  })

  it('returns the source input if the url is not a string', () => {
    expect(proxy(null)).toBe(null)
    expect(proxy(undefined)).toBe(undefined)
    expect(proxy(1234)).toBe(1234)
    expect(proxy(true)).toBe(true)
  })
})
