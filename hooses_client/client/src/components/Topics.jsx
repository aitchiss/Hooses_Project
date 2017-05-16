import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import Topic from './Topic.jsx'

class Topics extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      house_id: props.house_id,
      topics: []
    }
  }

  componentDidUpdate(){
    if (this.state.house_id !== this.props.house_id){
      var req = new AjaxRequest()

      req.get('http://localhost:8000/api/houses/' + this.props.house_id, (err, res) => {
         if(!res.error){
           this.setState({topics: res.topics, house_id: this.props.house_id})
         }
      })
    }
  }

  componentDidMount(){
   var req = new AjaxRequest()

   req.get('http://localhost:8000/api/houses/' + this.props.house_id, (err, res) => {

      if(!res.error){
        this.setState({topics: res.topics})
        console.log('topics', this.state.topics)
      }
   })
  }

  render(){

    let topics = this.state.topics.map((topic, index) => {
     return <Topic key={index} title={topic.title} status={topic.status}/>
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
