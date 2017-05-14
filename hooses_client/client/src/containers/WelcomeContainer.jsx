import React from 'react'


class WelcomeContainer extends React.Component {


  constructor(props){
    super(props)

    this.state = {}
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

              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>

              <label className="sr-only">Password</label>

              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

              <div className="checkbox">
                
              <label><input type="checkbox" id="remember-me" value="remember-me"/>Remember Me</label>
            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

          </form>
        </div>
      </div>
    </div>
    );

  }

}

export default WelcomeContainer


