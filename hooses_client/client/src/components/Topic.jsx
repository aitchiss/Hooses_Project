import React from 'react'

class Topic extends React.Component{

  constructor(props){
    super(props)
  }

selectTopic(event){
  this.props.setTopicThread(this.props.id)
}

deleteTopic(){
  this.props.deleteTopic(this.props.id)
}

render(){

  return (
    <div className="media correct-pointer" >

        <div className="media-left media-top">
              <img className="media-object" src=".." alt=".."/>
        </div>

        <div className="media-body">
            <h4 className="media-heading" onClick={this.selectTopic.bind(this)}>{this.props.title}</h4>
            <p className="media-status">Status : {this.props.status}<i className="material-icons right" role="button" onClick={this.deleteTopic.bind(this)}>delete</i></p>

        </div>

    </div>
    )
}


  
}


export default Topic