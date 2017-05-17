import React from 'react'

class House extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      colour: 'black'
    }
  }

  
  handleClick(){
    this.props.clickHandler(this.props.index)
  }

  decideColour(nextProps){
    if (nextProps.active){
      return '#3097D1'
    } else {
      return 'black'
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      let colour = this.decideColour(nextProps)
      this.setState({colour: colour})
    }
  }

  

  
  render(){
    return (
      <div className="house" className="correct-pointer" style={{color: this.state.colour}} onClick={this.handleClick.bind(this)} >
        <p>{this.props.address} {this.props.postcode} </p>
      </div>
      )
  }
  
}

export default House