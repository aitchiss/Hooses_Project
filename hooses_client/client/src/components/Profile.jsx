import React from 'react'

class Profile extends React.Component{


  render(){

    return(

      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">Profile &#183; <small><a href="#">edit</a></small></div>
        </div>

        <div className="panel-body">
          Welcome 'Name'
        </div>
      </div>
    )
  }

}

export default Profile
