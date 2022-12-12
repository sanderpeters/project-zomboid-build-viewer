import { atom } from 'recoil'

import { Theme, Occupation, Trait } from './types'
import { themeEffect, localStorageEffect } from './effects'

export const themeState = atom<Theme>({
  key: 'theme',
  default: 'dark',
  effects: [themeEffect, localStorageEffect<Theme>('theme')],
})

export const occupationState = atom<Occupation>({
  key: 'occupation',
  default: Occupation.Unemployed,
})

export const traitsState = atom<Trait[]>({
  key: 'traits',
  default: [],
})
