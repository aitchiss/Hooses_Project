import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import KitchenTableMessage from './KitchenTableMessage'



class KitchenTable extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      user_id: props.user_id,
      house_id: props.house_id,
      messages: [],
      input: ''
    }

  }




  componentDidUpdate(){
    
    if (this.props.house_id !== this.state.house_id){
      this.getNewMessages()
    }
  }
  

  componentDidMount(){
    
    this.getNewMessages()

  }


  getNewMessages(){
    const req = new AjaxRequest()
    req.get('http://localhost:8000/api/kitchen_table_posts/house/' + this.props.house_id, (err, res) => {
      if (!res.error){
        this.setState({house_id: this.props.house_id, messages: res})
        const contentDiv = document.querySelector(".kitchen-table-msgs")
        contentDiv.scrollTop = contentDiv.scrollHeight
      }
    })
  }

  onMessageInputChange(e){
    this.setState({input: e.target.value})
  }

  onMessageSubmit(e){
    if(e.which === 13){
      let message = { kitchen_table_post: {
        user_id: this.state.user_id,
        house_id: this.state.house_id,
        content: this.state.input
        }
      }

      const req = new AjaxRequest()
      req.post('http://localhost:8000/api/kitchen_table_posts.json', JSON.stringify(message), (err, res) => {
        this.getNewMessages()
        document.getElementById('kitchen-table-input').value = ""
      })
    }
    
  }



  render(){

    let messages = this.state.messages.map((msg, index) => {
      return <KitchenTableMessage key={index} userName={msg.user.profiles[0].first_name} message={msg.content}/>
    })

    return(

      <div className="panel panel-default">
      
        <div className="panel-heading">
         <div className="panel-title">Kitchen Table</div>
        </div>

        <div className="panel-body" className="kitchen-table-msgs">
          {messages}
        </div>
        <input id="kitchen-table-input" type="text" placeholder="post a message" onChange={this.onMessageInputChange.bind(this)} onKeyDown={this.onMessageSubmit.bind(this)}></input>
      </div>
    )
  }

}

export default KitchenTable
