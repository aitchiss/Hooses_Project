import React from 'react'
import AjaxRequest from '../services/AjaxRequest'
import ExpensesChart from './ExpensesChart'
import ExpenditureTable from './ExpenditureTable'

class Expenditure extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: null 
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.componentDidMount()
    }
  }

  componentDidMount(){
    const req = new AjaxRequest()
    req.get('http://localhost:8000/api/houses/'+ this.props.house_id + '/completed_jobs', (err, res) => {

      let costs = []
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
        costs.push({name: label, y: total})
      })

      const div = document.querySelector('#chart-area')

      const chart = new ExpensesChart()
      chart.create(div, costs, labels)

      this.setState({data: res})

    })
  }


  render(){


    return(

      <div className="panel panel-default">
        <div className="panel-heading">
         <div className="panel-title">Expenditure</div>
        </div>

        <div className="panel-body" id="chart-area">
        </div>
        <ExpenditureTable data={this.state.data} />
      </div>
      )
    }

}

export default Expenditure
