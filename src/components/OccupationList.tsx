import React from 'react'
import { useRecoilState } from 'recoil'

import Occupation from './Occupation'
import { occupationState } from '../atoms'
import { occupationData } from '../data'

const OccupationList: React.VFC = () => {
  const [selectedOccupation, setOccupation] = useRecoilState(occupationState)

  return (
    <div className="m-2 shadow-md border bg-slate-200 w-[200px] h-[500px] overflow-y-scroll">
      {Object.values(occupationData).map((occupation) => (
        <Occupation
          key={occupation.type}
          isSelected={occupation.type === selectedOccupation}
          occupation={occupation}
          onClick={() => setOccupation(occupation.type)}
        />
      ))}
    </div>
  )
}

export default OccupationList
