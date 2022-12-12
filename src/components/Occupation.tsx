import React from 'react'
import classNames from 'classnames'

import { OccupationData } from '../types'

interface OccupationProps {
  isSelected: boolean
  occupation: OccupationData
  onClick: () => void
}

const Occupation: React.FC<OccupationProps> = (props) => {
  const image = `/assets/occupations/${props.occupation.title.replace(
    ' ',
    '',
  )}.png`

  return (
    <div
      key={props.occupation.type}
      className={classNames(
        'flex odd:bg-white even:bg-slate-50 border-2 cursor-pointer',
        {
          'odd:border-white even:border-slate-50': !props.isSelected,
          'border-cyan-300': props.isSelected,
        },
      )}
      onClick={props.onClick}
    >
      <img className="pixelated" src={image} />
      <div className="justify-center">
        <div className="text-lg">{props.occupation.title}</div>
      </div>
    </div>
  )
}

export default Occupation
