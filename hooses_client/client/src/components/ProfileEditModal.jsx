import React from 'react'

class ProfileEditModal extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      first_name: props.first_name,
      last_name: props.last_name
    }
  }

  onSave(){
    let newData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }

    this.props.updateHandler(newData)
  }

  onFirstNameChange(e){
    this.setState({first_name: e.target.value})
  }

  onLastNameChange(e){
    this.setState({last_name: e.target.value})
  }

  render(){
    return (
      <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Update your profile details:</p>
              
              <p>First Name: <input type="text" id="first_name" onChange={this.onFirstNameChange.bind(this)} placeholder={this.props.first_name}></input></p>
              <p>Last Name: <input type="text" id="last_name" onChange={this.onLastNameChange.bind(this)} placeholder={this.props.last_name}></input></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.onSave.bind(this)} data-dismiss="modal">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default ProfileEditModal