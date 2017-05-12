import React from 'react'

class MyHouses extends React.Component{


render(){

return(

  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">My Houses</h3>
    </div>
    <div className="panel-body">
    <ul className='list-group'>
      <li className='list-group-item'>House 1</li>
      <li className='list-group-item'>House 2</li>
      <li className='list-group-item'>House 3</li>
    </ul>
    </div>
  </div>

  )}

}

export default MyHouses
