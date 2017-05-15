import React from 'react'

class CoOwners extends React.Component{
  constructor(props){
    super(props)
    console.log('CoOwners', props)
    this.state = {}
  }



  render(){

    return(

      <div className="panel panel-success">
        <div className="panel-heading">
         <div className="panel-title">Owners &#183; <small><a href="#">edit</a></small></div>
        </div>

        <div className="panel-body">
          pics and names goes in here ... see thumbnails 
        </div>

      </div>
    )
  }
}

export default CoOwners
