import React from 'react'
import NavBar from '../components/NavBar.jsx'
import MyHouses from '../components/MyHouses.jsx'
import CoOwners from '../components/CoOwners.jsx'
import AddressTitle from '../components/AddressTitle.jsx'
import OptionTabBar from '../components/OptionTabBar.jsx'
import Profile from '../components/Profile.jsx'

class MainContainer extends React.Component {


  constructor(props){
    super(props)
    this.state = {}
  }


  render(){

    return (

      <div className="main-content">
        <NavBar/>

        <div className="container-responsive">

          <div className="row">

            <div className="col-md-2">
              <MyHouses user_id={this.props.user.id}/>
              <CoOwners user_id={this.props.user.id}/>
            </div>

          <div className="col-md-8">
            <AddressTitle user_id={this.props.user.id}/>
            <OptionTabBar user_id={this.props.user.id}/>
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


