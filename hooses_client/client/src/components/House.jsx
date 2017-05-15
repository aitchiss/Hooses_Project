import React from 'react'

const House = (props) => {
  console.log('house trying to create')

  return (
    <div className="house">
      <p>{props.address} {props.postcode} </p>
    </div>
    )
}

export default House