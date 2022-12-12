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

    // merge both modifiers into 1 array
    const skills = [...skillsFromOccupation, ...skillsFromTraits]

    // apply skills of the same type to each other
    return skills.reduce<SkillData[]>((skills, skill) => {
      const existingSkill = skills.some(({ type }) => type === skill.type)

      if (!existingSkill) {
        return [...skills, skill]
      }

      return skills.map((s) => {
        if (s.type !== skill.type) {
          return s
        }

        return {
          type: s.type,
          level: Math.min(10, s.level + skill.level),
          multiplier: s.multiplier * skill.multiplier,
        }
      })
    }, [])
  },
})
