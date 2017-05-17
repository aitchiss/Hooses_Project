import React from 'react'

const ExpenditureRow = (props) => {

  return (
    <tr>
      <th scope="row">{props.date}</th>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.cost / 100}</td>
    </tr>
  )
}

export default ExpenditureRow