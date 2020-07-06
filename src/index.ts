import {
  Option,
  Some,
  None,
} from '@emirayka/option'

import {
  Result,
  Ok,
  Err,
} from '@emirayka/result'

Result.prototype.ok = function <T, E>(this: Result<T, E>): Option<T> {
  if (this.result.kind === 'ok') {
    return Some(this.result.value)
  } else {
    return None
  }
}

Result.prototype.err = function <T, E>(this: Result<T, E>): Option<E> {
  if (this.result.kind === 'error') {
    return Some(this.result.error)
  } else {
    return None
  }
}

Option.prototype.okOr = function<T, E>(this: Option<T>, error: E): Result<T, E> {
  if (this.value.kind === 'some') {
    return Ok(this.value.value)
  } else {
    return Err(error)
  }
}

Option.prototype.okOrElse = function<T, E>(this: Option<T>, errorConstructor: () => E): Result<T, E> {
  if (this.value.kind === 'some') {
    return Ok(this.value.value)
  } else {
    return Err(errorConstructor())
  }
}

export {
  Option,
  Some,
  None,
  Result,
  Ok,
  Err,
}
