import React from 'react'
import MainContainer from './MainContainer.jsx'
import WelcomeContainer from './WelcomeContainer.jsx'

class HomeContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      currentUser: null
    }
  }


  setUser(user){
    this.setState({currentUser: user})
  }




  render(){

     let view;

      if(this.state.currentUser){
        view = <MainContainer user={this.state.currentUser}/>
      }
      else
      {

        view = <WelcomeContainer userSignIn={this.setUser.bind(this)}/>
      }


      return(
        <div>
        {view}
        </div>

        )

  }

}



export default HomeContainer