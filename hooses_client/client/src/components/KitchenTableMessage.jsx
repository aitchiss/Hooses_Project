import React from 'react'

const KitchenTableMessage = (props) => {

  return (
    <div className="kitchen-table-msg">
      {props.userName}: {props.message}
    </div>
  )
}

export default KitchenTableMessage