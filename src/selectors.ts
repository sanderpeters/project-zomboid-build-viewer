import { selector } from 'recoil'

import { occupationData, traitData } from './data'
import { occupationState, traitsState } from './atoms'
import { SkillData } from './types'

/**
 * This query retrieves the total sum of points used for the current build.
 * The sum is the starting points of the selected occupation with the points of every selected trait.
 */
export const usedPointsQuery = selector<number>({
  key: 'UsedPointsQuery',
  get({ get }) {
    const occupation = get(occupationState)
    const occupationStartingPoints = occupationData[occupation].startingPoints

    const traits = get(traitsState)
    const traitsStartingPoints = traits.reduce(
      (total, trait) => total + traitData[trait].startingPoints,
      0,
    )

    return occupationStartingPoints + traitsStartingPoints
  },
})

/**
 * This query retrieves an overview of major skill points
 */
export const skillsQuery = selector<SkillData[]>({
  key: 'SkillsQuery',
  get({ get }) {
    // get skill modifiers from the selected occupation
    const occupation = get(occupationState)
    const skillsFromOccupation = occupationData[occupation].skills

    // get skill modifiers from the selected traits
    const traits = get(traitsState)
    const skillsFromTraits = traits
      .map((trait) => traitData[trait].skills)
      .flat()

    // merge both skill arrays into 1 array
    const skills = [...skillsFromOccupation, ...skillsFromTraits]

    // apply skills of the same type to each other
    return skills.reduce<SkillData[]>((skills, skill) => {
      const existingSkillIndex = skills.findIndex(
        ({ type }) => type === skill.type,
      )

      if (existingSkillIndex < 0) {
        return [...skills, skill]
      }

      return Object.assign([], skills, {
        [existingSkillIndex]: {
          type: skill.type,
          level: Math.min(10, skill.level + skills[existingSkillIndex].level),
          multiplier: skill.multiplier * skills[existingSkillIndex].multiplier,
        },
      })
    }, [])
  },
})
