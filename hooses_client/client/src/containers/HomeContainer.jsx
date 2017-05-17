import React from 'react'
import MainContainer from './MainContainer.jsx'
import WelcomeContainer from './WelcomeContainer.jsx'
import AjaxRequest from '../services/AjaxRequest'

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

  fetchUser(){
    
    const req = new AjaxRequest()
   
    req.get('http://localhost:8000/api/users.json', (err, user, status) => {
      if (err) { throw err }

      console.log('fetched', user)

      if (status === 200){
        this.setState({
          currentUser: user
        })
      } else if (status === 401){
        this.setUser(null)
      }
    })
  }


  componentDidMount(){
    this.fetchUser()
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