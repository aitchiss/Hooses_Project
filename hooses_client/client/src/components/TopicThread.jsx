import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import TopicMessageItem from './TopicMessageItem.jsx'

class TopicThread extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      topicTitle: '',
      house_id: null,
      messages: [],
      placeHolder: 'please enter your message',
      newMessage:''
    }
  }

  onTopicMessageChange(e){
    this.setState({newMessage: e.target.value})
  }

  saveNewMessage(){

    if(this.state.newMessage !== ''){

        let newMessage = {
          user_id: this.props.user_id,
          topic_id: this.props.topic_id,
          content: this.state.newMessage,
        }

        console.log(newMessage)


        const req = new AjaxRequest()
          req.post('http://localhost:8000/api/messages.json', JSON.stringify(newMessage), (err, res) => {
                if(!res.error){

                  console.log(res)

                  const newMessagesArray = [...this.state.messages, res]
                  this.setState({
                    newMessages: '',
                    messages: newMessagesArray
                  })
              }
          }) 


        }
        else {
          console.log('cannot create an empty message')
        }
        document.getElementById("topicMessageEntryForm").reset()
  }

  clearNewMessage(){
    document.getElementById("topicMessageEntryForm").reset()
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

 detectEnterKeyPress(event){
  if (event.key === 'Enter') {
       this.saveNewMessage()
   }
 }

 //sortMessagesByTimeStamp(messages){
  // let displayArray = []
  // displayArray = messages
 
  // displayArray.sort(function (var1,var2){
  //   const a = new Date(var1.created_at)
  //   const b = new Date(var2.created_at)
  //   if (a < b) {
  //     return 1
  //   }
  //   if (a > b) {
  //     return -1
  //   }
  //   return 0
  // })
// }


 render(){
// *** TODO user feedback if there there are no messages

// *** to be abstracted out ... but when I do its undefined
  let displayArray = this.state.messages.slice()
  displayArray.sort(function (var1,var2){
    const a = new Date(var1.created_at)
    const b = new Date(var2.created_at)
    if (a < b) {
      return 1
    }
    if (a > b) {
      return -1
    }
    return 0
  })

  let messages = displayArray.map((message, index) => {
    return <TopicMessageItem key={index} message={message.content} dateTime={message.created_at} firstName={message.user.profiles[0].first_name} lastName={message.user.profiles[0].last_name}/>
  })

  return(

    <div className="panel panel-default">

        <div className="panel-heading">
          <div className='panel-title'>Topic <i className="material-icons in-panel-text-title">chevron_right</i> {this.state.topicTitle}</div>
        </div>

      <div className="panel-body">

      <form id="topicMessageEntryForm">
          <div className="form-group">
                <input type="text" className="form-control" id="formTextEntry" placeholder={this.state.placeHolder} onKeyPress={this.detectEnterKeyPress.bind(this)} onChange={this.onTopicMessageChange.bind(this)}/>
              </div>

          <div className="form-submit-icon"><i className="material-icons" role="button" type="submit" data-toggle="collapse" href="#collapseExample" onClick={this.saveNewMessage.bind(this)}>local_post_office</i></div>

          <div className="form-submit-icon"><i className="material-icons" role="button" type="reset" data-toggle="collapse" href="#collapseExample" onClick={this.clearNewMessage.bind(this)}>clear</i></div>
      </form>

        {messages}
      </div>

    </div>
    
    )
}

}

export default TopicThread
