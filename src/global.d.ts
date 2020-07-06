import {Option} from '@emirayka/option'
import {Result} from '@emirayka/result'

declare module '@emirayka/result' {
  interface Result<T, E> {
    ok(): Option<T>
    err(): Option<E>
  }
}

declare module '@emirayka/option' {
  interface Option<T> {
    okOr<E>(error: E): Result<T, E>
    okOrElse<E>(errorConstructor: () => E): Result<T, E>
  }
}
