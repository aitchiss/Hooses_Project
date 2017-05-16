import React from 'react'
import KitchenTable from './KitchenTable.jsx'
import Topics from './Topics.jsx'
import JobCalls from './JobCalls.jsx'
import Expenditure from './Expenditure.jsx'
import Documents from './Documents.jsx'


class OptionTabBar extends React.Component {

  constructor(props){
    super(props)

      console.log('OptionTabBar props = ', props) //why null for house_id?
    
    this.state = {
      selectedView: 'KitchenTable'
    }
  
  }

  kitchenTable(){
    this.setState({selectedView: 'KitchenTable'})
  }

  topics(){
    this.setState({selectedView: 'Topics'})
  }

  jobCalls(){  
    this.setState({selectedView: 'JobCalls'})
  }

  expenditure(){
    this.setState({selectedView: 'Expenditure'})
  }
  
  documents(){
    this.setState({selectedView: 'Documents'})
  }

  render () {

    let view;

    switch(this.state.selectedView) {
      case 'KitchenTable':
        view = <KitchenTable/>
        break;  
      case 'Topics':
        view = <Topics house_id={this.props.house_id}/>
        break;
      case 'JobCalls':
        view = <JobCalls/>
        break;
      case 'Expenditure':
        view = <Expenditure/>
        break;              
        case 'Documents':
          view = <Documents/>
          break;        
      default:
        view = <KitchenTable/>
    }

    return (

      <div>
        <ul className="nav nav-tabs correct-pointer">
          <li><a onClick={this.kitchenTable.bind(this)}>Kitchen Table</a></li>
          <li><a onClick={this.topics.bind(this)}>Topics</a></li>
          <li><a onClick={this.jobCalls.bind(this)}>Job Calls</a></li>
          <li><a onClick={this.expenditure.bind(this)}>Expenditure</a></li>
          <li><a onClick={this.documents.bind(this)}>Documents</a></li>
        </ul>

        <div>{view}</div>
      </div>
    )
  }

}

export default OptionTabBar
