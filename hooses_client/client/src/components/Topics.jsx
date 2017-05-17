import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import Topic from './Topic.jsx'

class Topics extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      house_id: props.house_id,
      topics: [],
      newTopic:'',
      placeHolder:'enter new topic'
    }
  }

  componentDidUpdate(){
    if (this.state.house_id !== this.props.house_id){
      var req = new AjaxRequest()
      req.get('http://localhost:8000/api/houses/' + this.props.house_id, (err, res) => {
         if(!res.error){
           this.setState({topics: res.topics, house_id: this.props.house_id})
         }
      })
    }
  }

  onNewTopicChange(e){
    this.setState({newTopic: e.target.value})
  }

  saveNewTopic(){

    if(this.state.newTopic !== ''){

        let newTopic = {
          user_id: this.props.user_id,
          house_id: this.state.house_id,
          title: this.state.newTopic,
          status: 'open'
        }

        const req = new AjaxRequest()
          req.post('http://localhost:8000/api/topics.json', JSON.stringify(newTopic), (err, res) => {
                if(!res.error){
                  const newTopicsArray = [...this.state.topics, res]
                  this.setState({
                    newTopic: '',
                    topics: newTopicsArray
                  })
              }
          })      
        }
        else {
          console.log('cannot create an empty topic')
        }

  }

  clearNewTopic(){
   this.setState({newTopic: ''}) 
  }

  deleteTopic(id){
    console.log('delete topic pressed', id)
    const req = new AjaxRequest()

    console.log('house_id', this.state.house_id, 'topic id', id)

    req.delete('http://localhost:8000/api/houses/' + this.state.house_id + '/topics/' + id + '.json', (err, res) =>{
      if(!res.error){
          console.log('this is the response from the delete', res)
          this.setState({topics: res})
      }
    })

  }

  componentDidMount(){
   var req = new AjaxRequest()

   req.get('http://localhost:8000/api/houses/' + this.props.house_id, (err, res) => {
      if(!res.error){
        this.setState({topics: res.topics})
      }
   })
  }

  render(){

    let topics = this.state.topics.map((topic, index) => {
      return <Topic key={index} id={topic.id} title={topic.title} status={topic.status} setTopicThread={this.props.setTopicThread} deleteTopic={this.deleteTopic.bind(this)}/>
    })

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Topics<i className="material-icons right" role="button" data-toggle="collapse" href="#collapseExample">add</i></div>
        </div>

        <div className="collapse" id="collapseExample">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder={this.state.placeHolder} onChange={this.onNewTopicChange.bind(this)}/>
            </div>

            <button type="submit" className="btn btn-default" onClick={this.saveNewTopic.bind(this)}>Submit</button>
            <button type="reset" className="btn btn-default" onClick={this.clearNewTopic.bind(this)}>Clear</button>
          </form>
        </div>

        <div className="panel-body">
        {topics}
        </div>
      </div>
    )
  }

}

export default Topics
