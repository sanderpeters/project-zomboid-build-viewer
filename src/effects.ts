import { AtomEffect } from 'recoil'
import { Theme } from './types'

export const themeEffect: AtomEffect<Theme> = ({ onSet, setSelf }) => {
  const isDarkTheme = window.matchMedia(`(prefers-color-scheme: dark)`).matches

  if (isDarkTheme) {
    setSelf('dark')
  } else {
    setSelf('light')
  }

  onSet((theme) => {
    document.documentElement.classList.add(theme)
  })
}

export const localStorageEffect =
  <V extends string>(key: string): AtomEffect<V> =>
  ({ onSet, setSelf }) => {
    const storedValue = window.localStorage.getItem(key) as V

    if (storedValue) {
      setSelf(storedValue)
    }

    onSet((value) => window.localStorage.setItem(key, value))
  }
