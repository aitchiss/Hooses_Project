import React from 'react'
import AjaxRequest from '../services/AjaxRequest'

class Expenditure extends React.Component{

  componentDidMount(){
    const req = new AjaxRequest()
    req.get('http://localhost:8000/api/houses/'+ this.props.house_id + '/completed_jobs', (err, res) => {
      console.log(res)
    })
  }


  render(){

    return(

      <div className="panel panel-default">
        <div className="panel-heading">
         <div className="panel-title">Expenditure</div>
        </div>

        <div className="panel-body">
          * ONLY IN MVP IF TIME ALLOWS * 
        </div>
      </div>
      )
    }

}

export default Expenditure
