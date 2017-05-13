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
          <span className="icon-bar">Community</span>
          <span className="icon-bar">About</span>
          <span className="icon-bar">Sign Out</span>
        </button>
        <a className="navbar-brand" href="#">Hooses</a>
      </div>

    
        <ul className="nav navbar-nav navbar-right bs-example-navbar-collapse-1">
          <li>Community</li>
          <li>About</li>
          <li>Sign Out</li>
        </ul>


   
  </nav>

  )


}


}



export default NavBar
