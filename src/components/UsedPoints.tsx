import React from 'react'
import classNames from 'classnames'
import { useRecoilValue } from 'recoil'

import { usedPointsQuery } from '../selectors'

const UsedPoints: React.VFC = () => {
  const usedPoints = useRecoilValue(usedPointsQuery)

  return (
    <span
      className={classNames('font-bold', {
        'text-red-500': usedPoints < 0,
        'text-green-500': usedPoints > 0,
      })}
    >
      {usedPoints}
    </span>
  )
}

export default UsedPoints
