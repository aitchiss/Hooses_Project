import React from 'react'
import House from './House'

class AddressTitle extends React.Component{


  render(){

    return(

      <div className="panel panel-default">
        <div className="panel-heading">
         <div className="panel-title">Current property: {this.props.title} {this.props.postcode}</div>
          
        </div>
      </div>
    )
  }

}

export default AddressTitle
