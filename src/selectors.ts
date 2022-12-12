import { selector } from 'recoil'

import { occupationData } from './data'
import { occupationState } from './atoms'
import { SkillData } from './types'

/**
 * This query retrieves the total sum of points used for the current build.
 * The sum is the starting points of the selected occupation with the points of every selected trait.
 */
export const usedPointsQuery = selector<number>({
  key: 'UsedPointsQuery',
  get({ get }) {
    const occupation = get(occupationState)

    return occupationData[occupation].startingPoints
  },
})

/**
 * This query retrieves an overview of major skill points
 */
export const majorSkillsQuery = selector<SkillData[]>({
  key: 'MajorSkillsQuery',
  get({ get }) {
    const occupation = get(occupationState)

    return occupationData[occupation].skills
  },
})
