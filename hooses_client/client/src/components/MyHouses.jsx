import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import House from './House'

class MyHouses extends React.Component{

  constructor(props){
    super(props)
    console.log('MyHouses', props)
    this.state = {
      houses: [],
      currentSelection: null
    }
  }

  componentDidMount(){
    const req = new AjaxRequest()
    req.get('http://localhost:8000/api/owner_groups/user/' + this.props.user_id, (err, res) => {
      if (!res.error){

        this.setState({houses: res, currentSelection: res[0]})
        this.props.setHouseSelection(res[0])
      }
    })
  }

  houseClickHandler(index){
    let house = this.state.houses[index]
    this.props.setHouseSelection(house)
  }


  render(){

    let houses = this.state.houses.map((house, index) => {
      return <House key={index} index={index} address={house.house.address} postcode={house.house.post_code} clickHandler={this.houseClickHandler.bind(this)}/>
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
