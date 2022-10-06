import { getProxiedImageUrl } from '../src'

describe('no strategy', () => {
  it('handles the none strategy', () => {
    expect(
      getProxiedImageUrl({
        url: 'https://something.com/image',
        strategy: 'none'
      })
    ).toBe('https://something.com/image')
  })

  it('handles empty strategy', () => {
    expect(getProxiedImageUrl({ url: 'https://something.com/image', strategy: '' })).toBe('https://something.com/image')
  })

  it('handles unrecognized strategy', () => {
    expect(
      getProxiedImageUrl({
        url: 'https://something.com/image',
        strategy: 'some_other_strategy'
      })
    ).toBe('https://something.com/image')
  })
})
