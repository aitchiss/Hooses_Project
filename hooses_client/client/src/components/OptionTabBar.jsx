import React from 'react'
import KitchenTable from './KitchenTable.jsx'
import Topics from './Topics.jsx'
import JobCalls from './JobCalls.jsx'
import Expenditure from './Expenditure.jsx'
import Documents from './Documents.jsx'
import TopicThread from './TopicThread.jsx'



class OptionTabBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedView: 'KitchenTable',
      topic_id: null
    }  
  }

  kitchenTable(){
    this.setState({selectedView: 'KitchenTable'})
  }

  topics(){
    this.setState({selectedView: 'Topics'})
  }

  topicThread(id){
    this.setState({selectedView: 'TopicThread', topic_id: id})
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

    let view

    console.log('option tab bar :', this.props.house_id)

    switch(this.state.selectedView) {
      case 'KitchenTable':
        view =  <KitchenTable house_id={this.props.house_id} user_id={this.props.user_id} />
        break;  
      case 'Topics':
        view = <Topics house_id={this.props.house_id} setTopicThread={this.topicThread.bind(this)}/>
        break;
      case 'TopicThread':
        view = <TopicThread topic_id={this.state.topic_id} house_id={this.props.house_id}/>
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
