import React from 'react'

const Card = ({ name, phone }) => {
    return (
      <div className="card">
        <h2>Muchas gracias {name}</h2>
        <h3>En breves Julian te mandara un mnj a tu celu: {phone}</h3>
      </div>
    )
  }

export default Card