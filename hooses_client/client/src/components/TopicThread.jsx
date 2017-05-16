import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import TopicMessageItem from './TopicMessageItem.jsx'

class TopicThread extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }


  componentDidMount(){
   var req = new AjaxRequest()

   req.get('http://localhost:8000/api/houses/' + this.props.house_id + '/topics/' + this.props.topic_id, (err, res) => {

    if(!res.error){
      this.setState({messages: res.messages})
    }
  })

 }

 render(){

  let messages = this.state.messages.map((message, index) => {
    return <TopicMessageItem key={index} message={message.content}/>
  })



  return(

    <div className="panel panel-default">
      <div className="panel-body">
        {messages}
      </div>
    </div>
    )
}

}

export default TopicThread
