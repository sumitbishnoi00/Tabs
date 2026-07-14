import Tabs from '@/components/home/Tabs'
import React from 'react'

const Page = ({ activeTab }) => {
  return (
    <div>
        <Tabs activeTab={activeTab} />
    </div>
  )
}

export default Page