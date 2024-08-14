import React from 'react'

const Card = ({nombre , edad}) => {
  return (
    <div>
        <p>{nombre}</p>
        <p>{edad}</p>
    </div>
  )
}

export default Card