import React from 'react'
import MyHouses from '../components/MyHouses.jsx'
import ViewLinks from '../components/ViewLinks.jsx'
import AddressTitle from '../components/AddressTitle.jsx'
import KitchenTable from '../components/KitchenTable.jsx'
import CoOwners from '../components/CoOwners.jsx'
import AllTopicsView from '../components/AllTopicsView.jsx'
import Profile from '../components/Profile.jsx'

class HomeContainer extends React.Component {


  constructor(props){
    super(props)

    this.state = {}
  }



render(){

return (

  <div className="container-responsive">

  <div className="row">

  <div className="col-md-3">
    <MyHouses/>
    <ViewLinks/>
    <CoOwners/>
  </div>
  

  <div className="col-md-7">

  <AddressTitle/>
  <KitchenTable/>
  <AllTopicsView/>

  </div>
  


  <div className="col-md-2">
  <Profile/>


  </div>

  
  </div>


  </div>


);

}

}















export default HomeContainer


