import swapProtocol from '../src/strategies/swapProtocol'

describe('swap strategy', () => {
  it('returns the source input if the url is not a string', () => {
    expect(swapProtocol(null)).toBe(null)
    expect(swapProtocol(undefined)).toBe(undefined)
    expect(swapProtocol(1234)).toBe(1234)
    expect(swapProtocol(true)).toBe(true)
  })

  it('swaps from http to https', () => {
    expect(swapProtocol('http://something.com/image')).toBe('https://something.com/image')
  })

  it('only replaces the protocol', () => {
    expect(swapProtocol('http://http.http/http')).toBe('https://http.http/http')
  })

  it('returns the original url if protocol is already https', () => {
    expect(swapProtocol('https://something.com/image')).toBe('https://something.com/image')
  })
})
