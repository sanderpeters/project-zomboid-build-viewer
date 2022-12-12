import React from 'react'
import classNames from 'classnames'

import { SkillData } from '../types'

interface SkillProps {
  data: SkillData
}

const Skill: React.FC<SkillProps> = (props) => (
  <div>
    {props.data.type}

    {props.data.level}
    <div className="flex">
      {new Array(10).fill(undefined).map((_, index) => (
        <div
          key={index}
          className={classNames('w-[20px] h-[20px] border border-black', {
            'bg-slate-500': index < props.data.level,
            'bg-white': index >= props.data.level,
          })}
        />
      ))}
    </div>
    {props.data.multiplier}
  </div>
)

export default Skill
