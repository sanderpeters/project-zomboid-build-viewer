import { Entries } from './types'

export const getEntries = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>
