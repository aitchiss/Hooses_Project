import React from 'react'
import NavBar from '../components/NavBar.jsx'
import MyHouses from '../components/MyHouses.jsx'
import CoOwners from '../components/CoOwners.jsx'
import AddressTitle from '../components/AddressTitle.jsx'
import OptionTabBar from '../components/OptionTabBar.jsx'
import Profile from '../components/Profile.jsx'
import ProfileEditModal from '../components/ProfileEditModal.jsx'


class MainContainer extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      houseSelection: null,
      house_id: null,
      currentAddress: '',
      currentPostCode: '',
      actionCable: null
    }

  }

  setHouseSelection(house){
    this.setState({houseSelection: house, house_id: house.house_id,currentAddress: house.house.address, currentPostCode: house.house.post_code})
  }

 



  render(){

    return (

      <div className="main-content">
        <NavBar signOut={this.props.signOut}/>

        <div className="container-responsive">

          <div className="row">

            <div className="col-md-2">
              <MyHouses user_id={this.props.user.id} setHouseSelection={this.setHouseSelection.bind(this)} />
              <CoOwners user_id={this.props.user.id} houseId={this.state.house_id}/>
            </div>

          <div className="col-md-8">
            <AddressTitle user_id={this.props.user.id} title={this.state.currentAddress} postcode={this.state.currentPostCode}/>
            <OptionTabBar user_id={this.props.user.id} house_id={this.state.house_id} />
          </div>

          <div className="col-md-2">
            <Profile user_id={this.props.user.id}/>
            
          </div>
        </div>
      </div>
    </div>
    );
  }
}



export default MainContainer


