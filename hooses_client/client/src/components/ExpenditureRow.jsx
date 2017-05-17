import React from 'react'

const ExpenditureRow = (props) => {

  let formattedDate = props.date.substring(0, 10)
  let splitDate = formattedDate.split('-')
  let correctDateOrder = splitDate[2] + "/" + splitDate[1] + "/" + splitDate[0]
  

  return (
    <tr>
      <th scope="row">{correctDateOrder}</th>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.cost / 100}</td>
    </tr>
  )
}

export default ExpenditureRow