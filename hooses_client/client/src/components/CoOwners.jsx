import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import CoOwnerThumbnail from './CoOwnerThumbnail'

class CoOwners extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      owners: [],
      currentHouseId: props.houseId
    }
  }

  componentDidUpdate(){
    if (this.props.houseId !== this.state.currentHouseId){
      const req = new AjaxRequest()
      req.get('http://localhost:8000/api/owner_groups/house/' + this.props.houseId, (err, res) => {
        if (!res.error){
          console.log('coowners', res)

          let ownerProfiles = res.map((owner) => {
            return owner.profiles[0]
          })
          this.setState({owners: ownerProfiles, currentHouseId: this.props.houseId})
          
        }
      })
    }
    
  }



  render(){

    
    let coOwners = this.state.owners.map((owner, index) => {

      return <CoOwnerThumbnail key={index} first_name={owner.first_name} last_name={owner.last_name} img={owner.image} />
    })

    return (

    <div className="panel panel-success">
      <div className="panel-heading">
       <div className="panel-title">Owners &#183; <small><a href="#">edit</a></small></div>
      </div>

      <div className="panel-body">

        {coOwners}
      </div>

    </div>
    )

    

    
  }
}

export default CoOwners
