import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import classNames from 'classnames'

import { occupationListQuery } from '../selectors'
import { occupationState } from '../atoms'

const OccupationList: React.VFC = () => {
  const setOccupation = useSetRecoilState(occupationState)
  const occupationList = useRecoilValue(occupationListQuery)

  return (
    <div className="m-2 shadow-md border bg-slate-200 w-[200px] h-[500px] overflow-y-scroll">
      {occupationList.map((occupation) => (
        <div
          key={occupation.type}
          className={classNames(
            'flex odd:bg-white even:bg-slate-50 border-2 cursor-pointer',
            {
              'odd:border-white even:border-slate-50': !occupation.isSelected,
              'border-cyan-300': occupation.isSelected,
            },
          )}
          onClick={() => setOccupation(occupation.type)}
        >
          <img className="pixelated" src={`/assets/occupations/Veteran.png`} />
          <div className="justify-center">
            <div className="text-">{occupation.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OccupationList
