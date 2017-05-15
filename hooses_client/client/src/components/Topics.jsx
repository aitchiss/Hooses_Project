import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import Topic from './Topic.jsx'

class Topics extends React.Component{


constructor(props){
  super(props)
  this.state = {
    topics: []
  }
}

componentDidMount(){
 var req = new AjaxRequest()

 req.get('http://localhost:8000/api/houses/15/topics/', (err, res) => {

    if(!res.error){
      console.log('topics list:', res)
      this.setState({topics: res})
    }
 })
}

  render(){

    let topics = this.state.topics.map((topic, index) => {
      return <Topic key={index} title={topic.title}/>
    })


    return(

      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Topics</div>
        </div>

        <div className="panel-body">
        {topics}
        </div>
      </div>
    )
  }

}

export default Topics
