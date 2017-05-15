import React from 'react'
import AjaxRequest from '../services/AjaxRequest'


class WelcomeContainer extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      email: '',
      password:''
    }

  }

handleOnChangeEmail(event){
  this.setState({email: event.target.value})
}

handleOnChangePassword(event){
  this.setState({password: event.target.value})
}

signIn(event){
event.preventDefault()

const userData = {
  user:{
    email: this.state.email,
    password: this.state.password
  }
}

console.log(userData)

const req = new AjaxRequest()

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// fetch("http://127.0.0.1:8000/users/sign_in.json", {
//   credentials: 'include',
//   method: 'POST',
//   body: JSON.stringify(userData),
//   headers: myHeaders
// }).then((resp) => {
//   console.log(resp);
// });


req.post('http://localhost:8000/users/sign_in.json', JSON.stringify(userData), (err, res) => {
  console.log("we're in ajax request")

  if(!res.error){
    this.props.userSignIn(res)
  }




} )

}



  render(){

    return (

      <div className="main-content">
        <div className="container-responsive">
          <div className="welcome-container">

            <div className="hero-title">care for shared property ... easily</div>



            <form className="form-signin">

              <h2 className="form-signin-heading">Please sign in</h2>

              <label className="sr-only">Email address</label>

              <input type="email" onChange={this.handleOnChangeEmail.bind(this)} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>

              <label className="sr-only">Password</label>

              <input type="password" onChange={this.handleOnChangePassword.bind(this)} id="inputPassword" className="form-control" placeholder="Password" required/>

              <div className="checkbox">
                
              <label><input type="checkbox" id="remember-me" value="remember-me"/>Remember Me</label>
            </div>

            <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn.bind(this)}type="submit">Sign in</button>

          </form>






        </div>
      </div>
    </div>
    );

  }

}

export default WelcomeContainer


