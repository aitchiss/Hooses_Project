import React from 'react'
import ExpenditureRow from './ExpenditureRow'


class ExpenditureTable extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: props.data
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      this.setState({data: nextProps.data})
    }
  }

  

  render(){

    let rows = []

    if (this.state.data){
      //put the items into date order first
      let data = this.state.data.sort(function(a, b){
        return a.date - b.date
      })

      rows = data.map((item, index) => {
        return <ExpenditureRow key={index} date={item.date} description={item.description} category={item.category} cost={item.cost}/>
      })
    }
    

    return(
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Cost (£)</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>

    )
  }
}


export default ExpenditureTable