import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import ProfileEditModal from './ProfileEditModal'

class Profile extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      first_name: '',
      last_name:'',
      address:'',
      email:'',
      image:''
    }
  }

  componentDidMount(){
    var req = new AjaxRequest()
    req.get('http://localhost:8000/api/users/' + this.props.user_id, (err, res) => {

      if(!res.error){

        this.setState({
          first_name: res.profiles[0].first_name,
          last_name: res.profiles[0].last_name,
          address: res.profiles[0].address,
          email: res.email,
          image: res.profiles[0].url
        })

      }
    })
  }

  render(){

    return(

      <div className="panel panel-default">
      <div className="panel-heading">
      <div className="panel-title">Profile &#183; 
      <small data-toggle="modal" data-target="#editModal" >edit</small></div>
      
      <ProfileEditModal />
      </div>

      <div className="panel-body">
      Welcome {this.state.first_name}
      </div>
      </div>
      )
  }

}

export default Profile
