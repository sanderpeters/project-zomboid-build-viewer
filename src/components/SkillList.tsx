import React from 'react'
import { useRecoilValue } from 'recoil'

import Skill from './Skill'
import { skillsQuery } from '../selectors'

const SkillList: React.VFC = () => {
  const skills = useRecoilValue(skillsQuery)

  return (
    <div className="m-2 shadow-md border bg-slate-200 w-[200px] h-[500px]">
      {skills.map((skill) => (
        <Skill key={skill.type} data={skill} />
      ))}
    </div>
  )
}

export default SkillList
