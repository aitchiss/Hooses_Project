import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import TopicMessageItem from './TopicMessageItem.jsx'

class TopicThread extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      topicTitle: '',
      house_id: null,
      messages: []
    }
  }

  componentDidUpdate(){
    if (this.state.house_id !== this.props.house_id){    
      this.props.updateView();
    }
  }

  componentDidMount(){
   var req = new AjaxRequest()

   req.get('http://localhost:8000/api/houses/' + this.props.house_id + '/topics/' + this.props.topic_id, (err, res) => {

    if(!res.error){
      this.setState({topicTitle: res.title, house_id: this.props.house_id, messages: res.messages})
    }
  })

 }

 render(){

//   if(this.state.messages.length){
//     console.log('there are messages')
//   }else
//   {
//   console.log('there are no messages')
// }


  let messages = this.state.messages.map((message, index) => {
    return <TopicMessageItem key={index} message={message.content} dateTime={message.created_at} firstName={message.user.profiles[0].first_name} lastName={message.user.profiles[0].last_name}/>
  })

  return(

    <div className="panel panel-default">
        <div className="panel-heading">
          <div className='panel-title'>Topic > {this.state.topicTitle}</div>
        </div>
      <div className="panel-body">
        {messages}
      </div>
    </div>
    )
}

}

export default TopicThread
