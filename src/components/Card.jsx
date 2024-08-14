import React from 'react'

const Card = ({ name, phone , onReset  }) => {
    return (
      <div className="card">
        <h2>Muchas gracias {name}</h2>
        <h3>En breves Julian te mandara un msj a tu celu: {phone}</h3>
        <button className='btn-card' onClick={onReset}>Reset</button>
      </div>
    )
  }

export default Card