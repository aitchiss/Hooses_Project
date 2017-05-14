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
              <MyHouses/>
              <CoOwners/>
            </div>


          <div className="col-md-8">
            <AddressTitle/>
            <OptionTabBar/>
          </div>

          <div className="col-md-2">
            <Profile/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}















export default MainContainer


