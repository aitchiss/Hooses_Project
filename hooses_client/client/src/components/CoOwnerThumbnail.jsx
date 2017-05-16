import React from 'react'

const CoOwnerThumbnail = (props) => {

  return (
    <div className="co-owner-thumbnail">
      <img src={props.img} />
      <p>{props.first_name}</p>
    </div>
  )
}

export default CoOwnerThumbnail