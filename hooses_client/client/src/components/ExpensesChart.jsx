import React from 'react'


class ExpensesChart {


  create(div, data, categories){
    console.log(div, data, categories)

    let chart = new Highcharts.Chart({
      chart: {
        type: 'pie',
        renderTo: div
      },
      title: {
        text: 'expenses'
      },
      series: [{data: data}]
    })

  }

}


export default ExpensesChart