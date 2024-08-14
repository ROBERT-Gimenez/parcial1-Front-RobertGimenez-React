import React from 'react'
import { mock } from '../mock'
import Card from './Card'

const Show = () => {
  return (
    <div>
      {mock.map((m)=>(
        <Card key={m.id} {...m} />
    ))}
    </div>
  )
}

export default Show