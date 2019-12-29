const foldr = require('../foldr')

describe('foldr', () => {
  it('is a function of arity 3', () => {
    expect(typeof foldr).toEqual('function')
    expect(foldr.length).toBe(3)
  })
  it('returns 21 for given values', () => {
    const expected = 21
    const actual = foldr((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6])
    expect(actual).toEqual(expected)
  })
  it('returns concatenated string for given values', () => {
    const expected = 'a string is concatenated.'
    const actual = foldr((a, b) => a + b, '', ['a ', 'string ', 'is ', 'concatenated.'])
    expect(actual).toEqual(expected)
  })
})
