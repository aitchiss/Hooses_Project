import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'

class Topics extends React.Component{


constructor(props){
  super(props)
  console.log("topics props user_id", props.user_id)


  this.state = {
  }
}

componentDidMount(){
 var req = new AjaxRequest()

 req.get('http://localhost:8000/api/houses/15/topics/', (err, res) => {

    if(!res.error){
      console.log('topics list:', res)
    }

 })

}





  render(){

    return(

      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Topics</div>
        </div>

        <div className="panel-body">
          the list of topics goes in here by scrolling through the array of topics. We can further subdivide boostrap's grid to give the layout we need for this
        </div>
      </div>
    )
  }

}

export default Topics
