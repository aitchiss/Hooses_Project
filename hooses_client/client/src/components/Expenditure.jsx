import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import ExpensesChart from './ExpensesChart'

class Expenditure extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      costData: {
        name: 'cost',
        data: []
      }
    }
  }

  componentDidMount(){
    const req = new AjaxRequest()
    req.get('http://localhost:8000/api/houses/'+ this.props.house_id + '/completed_jobs', (err, res) => {
      console.log(res)

      let costs = {
        name: 'cost',
        data: []
      }

      let labels = []

      res.forEach((item) => {
        if (labels.indexOf(item.category) === -1){
          labels.push(item.category)
        }
        
      })

      labels.forEach((label) => {
        let total = 0
        res.forEach((item) => {
          if (item.category === label){
            total += (item.cost /100)
          }
        })
        costs.data.push(total)
      })



      // this.setState({costData: {name: 'cost', data: costs}})

      const div = document.querySelector('#chart-area')

      const chart = new ExpensesChart()
      console.log(div, costs, labels)
      chart.create(div, costs, labels)

    })
  }


  render(){


    return(

      <div className="panel panel-default">
        <div className="panel-heading">
         <div className="panel-title">Expenditure</div>
        </div>

        <div className="panel-body" id="chart-area">
          * ONLY IN MVP IF TIME ALLOWS * 

        </div>
      </div>
      )
    }

}

export default Expenditure
