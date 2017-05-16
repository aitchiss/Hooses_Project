import React from 'react'

class Topic extends React.Component{

  constructor(props){
    super(props)
  }

selectTopic(event){
  console.log(event.target.value)
  this.props.setTopicThread(this.props.id)
}

render(){

  return (
    <div className="media correct-pointer" onClick={this.selectTopic.bind(this)}>

        <div className="media-left media-top">
              <img className="media-object" src=".." alt=".."/>
        </div>

        <div className="media-body">
            <h4 className="media-heading">{this.props.title}</h4>
            <p className="media-status">Status : {this.props.status}</p>
        </div>

    </div>
    )
}


  
}


export default Topic