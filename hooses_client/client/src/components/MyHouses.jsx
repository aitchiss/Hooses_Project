import React from 'react'

class MyHouses extends React.Component{

  constructor(props){
    super(props)
    console.log('MyHouses', props)
    this.state = {}
  }


  render(){

    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <div className="panel-title">My Houses &#183; <small><a href="#">edit</a></small></div>
        </div>
        <div className="panel-body">
          <div>House 1</div>
          <div>House 2</div>
          <div>House 3</div>
        </div>
      </div>
    )
  }

}

export default MyHouses
