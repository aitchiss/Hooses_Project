import React from 'react'

class TopicMessageItem extends React.Component {

  constructor(props){
    super(props)
  }

render(){


  return (

    <div className="panel-body">
      {this.props.message}
    </div>

    )
}


}

export default TopicMessageItem