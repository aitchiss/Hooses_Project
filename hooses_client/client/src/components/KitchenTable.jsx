import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import KitchenTableMessage from './KitchenTableMessage'

class KitchenTable extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      house_id: props.house_id,
      messages: []
    }
  }

  componentDidUpdate(){
    if (this.props.house_id !== this.state.house_id){
      const req = new AjaxRequest()
      req.get('http://localhost:8000/api/kitchen_table_posts/house/' + this.props.house_id, (err, res) => {
        if (!res.error){
          console.log(res)
          this.setState({house_id: this.props.house_id, messages: res})
        }
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

        <div className="panel-body">
          {messages}
        </div>
      </div>
    )
  }

}

export default KitchenTable
