import React from 'react'

import OccupationList from './OccupationList'
import Title from './Title'
import UsedPoints from './UsedPoints'
import SkillList from './SkillList'
import TraitList from './TraitList'

const Page: React.VFC = () => (
  <main className="bg-hero bg-cover min-h-screen font-open-sans">
    <Title />
    <UsedPoints />

    <div className="flex">
      <OccupationList />
      <TraitList />
      <SkillList />
    </div>
  </main>
)

export default Page
