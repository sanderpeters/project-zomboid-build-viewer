import React from 'react'

import OccupationList from './OccupationList'
import UsedPoints from './UsedPoints'

const Page: React.VFC = () => (
  <main className="bg-[url('/background.jpg')] bg-cover min-h-screen">
    <h1 className="text-white text-5xl text-shadow">
      Project Zomboid Build Inspector
    </h1>

    <UsedPoints />
    <OccupationList />
  </main>
)

export default Page
