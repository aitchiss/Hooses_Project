import React from 'react'


class ExpensesChart {


  create(div, data, categories){
    console.log(div, data, categories)

    let chart = new Highcharts.Chart({
      chart: {
        type: 'column',
        renderTo: div
      },
      title: {
        text: 'expenses'
      },
      series: [data],
      xAxis: {
        categories: categories
      }
    })

  }

}


export default ExpensesChart