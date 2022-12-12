import React from 'react'
import { useRecoilState } from 'recoil'

import Trait from './Trait'
import { traitsState } from '../atoms'
import { traitData } from '../data'

const TraitList: React.VFC = () => {
  const [selectedTraits, setTraits] = useRecoilState(traitsState)
  console.log(selectedTraits)

  return (
    <div className="m-2 shadow-md border bg-slate-200 w-[200px] h-[500px] overflow-y-scroll">
      {Object.values(traitData).map((trait) => (
        <Trait
          key={trait.type}
          isSelected={selectedTraits.includes(trait.type)}
          data={trait}
          onClick={() => setTraits([trait.type])}
          // onClick={() => setTrait(trait.type)}
        />
      ))}
    </div>
  )
}

export default TraitList
