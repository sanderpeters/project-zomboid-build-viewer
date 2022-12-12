import React from 'react'
import classNames from 'classnames'

import { TraitData } from '../types'

interface TraitProps {
  data: TraitData
  isSelected: boolean
  onClick: () => void
}

const Trait: React.FC<TraitProps> = (props) => (
  <div
    className={classNames('cursor-pointer', {
      'font-bold': props.isSelected,
    })}
    onClick={props.onClick}
  >
    {props.data.title}
  </div>
)

export default Trait
