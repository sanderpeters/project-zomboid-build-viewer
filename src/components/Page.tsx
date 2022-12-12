import React from 'react'

import OccupationList from './OccupationList'
import Title from './Title'
import UsedPoints from './UsedPoints'

const Page: React.VFC = () => (
  <main className="bg-hero bg-cover min-h-screen font-open-sans">
    <Title />
    <UsedPoints />
    <OccupationList />
  </main>
)

export default Page
