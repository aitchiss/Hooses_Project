import React from 'react'

class NavBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
  }

render () {

return (


  <nav className="navbar navbar-default navbar-fixed-top">
   

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed bs-example-navbar-collapse-1" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="http://localhost:3000/#/app">Hooses</a>
      </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li>Community</li>
          <li>About</li>
          <li className="end-li">Sign Out</li>
        </ul>
    </div>

   
  </nav>

  )


}


}



export default NavBar
