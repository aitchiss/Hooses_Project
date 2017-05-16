import React from 'react'

const KitchenTableMessage = (props) => {

  return (
    <div className="kitchen-table-msg">
      <p>{props.userName}: {props.message}</p>
    </div>
  )
}

export default KitchenTableMessage