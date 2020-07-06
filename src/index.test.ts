import {
  Result,
  Ok,
  Err,
  Option,
  Some,
  None,
} from './index'

describe('Result', () => {
  describe('ok', () => {
    test('returns some when result is ok', () => {
      const result: Result<number, string> = Ok(2)

      expect(result.ok()).toEqual(Some(2))
    })

    test('returns none when result is err', () => {
      const result: Result<number, string> = Err('error')

      expect(result.ok()).toEqual(None)
    })
  })

  describe('err', () => {
    test('returns some when result is err', () => {
      const result: Result<number, string> = Err('error')

      expect(result.err()).toEqual(Some('error'))
    })

    test('returns none when result is err', () => {
      const result: Result<number, string> = Ok(2)

      expect(result.err()).toEqual(None)
    })
  })
})

describe('Option', () => {
  describe('okOr', () => {
    test('returns Ok when option is Some', () => {
      const option: Option<number> = Some(2)

      expect(option.okOr(Err('error'))).toEqual(Ok(2))
    })

    test('returns Err when option is None', () => {
      const option: Option<number> = None

      expect(option.okOr('error')).toEqual(Err('error'))
    })
  })

  describe('okOrElse', () => {
    test('returns Ok when option is Some', () => {
      const option: Option<number> = Some(2)

      expect(option.okOrElse(() => Err('error'))).toEqual(Ok(2))
    })

    test('returns Err when option is None', () => {
      const option: Option<number> = None

      expect(option.okOrElse(() => 'error')).toEqual(Err('error'))
    })
  })
})
