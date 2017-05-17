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

  signOut(event){
    const req = new AjaxRequest()
    req.delete('http://localhost:8000/users/sign_out.json', (err, status) => {
      if(err) {throw err}
      if(status === 204){
        this.setUser(null)
      }
    })
  }


  render(){

     let view;

      if(this.state.currentUser){
        view = <MainContainer user={this.state.currentUser} signOut={this.signOut.bind(this)}/>
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