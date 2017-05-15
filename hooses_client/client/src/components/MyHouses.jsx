import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import House from './House'

class MyHouses extends React.Component{

  constructor(props){
    super(props)
    console.log('MyHouses', props)
    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    const req = new AjaxRequest()
    req.get('http://localhost:8000/api/owner_groups/user/' + this.props.user_id, (err, res) => {
      if (!res.error){
        let houses = []
        res.forEach((item) => {
          houses.push(item.house)
        })
        this.setState({houses: houses})
      }
    })
  }


  render(){

    let houses = this.state.houses.map((house, index) => {
      return <House key={index} address={house.address} postcode={house.post_code}/>
    })
    

    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <div className="panel-title">My Houses &#183; <small><a href="#">edit</a></small></div>
        </div>
        <div className="panel-body">
          {houses}
        </div>
      </div>
    )
  }

}

export default MyHouses
