"use client"
import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { readLocalData } from '@/data/graph';


am4core.useTheme(am4themes_animated);

let chartData = readLocalData();
console.log('chartData',chartData);
let xotherData =  [ {
  "day": "3",
  "signups": 45,
  "svalue":123.45,
  "cancellations": 8,
  "trials": 10,
  }, {
  "day": "4",
  "signups": 3,
  "svalue":23.45,
  "cancellations": 15,
  "trials": 5,
  }, {
  "day": "5",
  "signups": 17,
  "svalue":3.45,
  "cancellations": 5,
  "trials": 30,
} ];
console.log('chartData',xotherData);

/*foo.then((data) => {
    console.log('data',data);
});*/

console.log(process.cwd())




class Graph extends React.Component {
    chart: am4charts.XYChart | undefined; // This is the chart object that will be created when the component mounts
     

   

    componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    // Create axes
 
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "day_of_month";
    categoryAxis.title.text = "Current Month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Subscriptions (M & A)";

    // Create series
    function createSeries( name: string, field: string, stacked: boolean) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;

        series.dataFields.categoryX = "day_of_month";
        series.name = name;
        let textStr = "{name}: [bold]{valueY}[/]";
       /*if(field === "signups"){
            textStr = "{name}: [bold]{valueY}[/] - ${svalue}";
        }*/
        series.columns.template.tooltipText = textStr;
        series.stacked = stacked;
        series.columns.template.width = am4core.percent(95);
    }

    createSeries("Month Sales", "monthPurchases", false);
    createSeries("Annual Sales", "annualPurchases", true);

    createSeries("Month Payments", "monthPayments", true);
    createSeries("Annual Payments", "annualPayments", true);

    createSeries("Month Cancels", "monthCancelled", false);
    createSeries("Annual Cancels", "annualCancelled", true);

    chart.data = chartData;
    // Add legend
    chart.legend = new am4charts.Legend();
   
    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

   selectDataset(set: string) {

    //todo
    /*chart.dataSource.url = "newData.json";
chart.dataSource.load();
8*/
    console.log(set);
    if(this.chart){ 
        if (set === "1") {
        this.chart.data = chartData;
        } else {
        //this.chart.data = otherData;
       // this.chart.dataSource.url = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
        this.chart.dataSource.load();
        }
    }
  }
  


render() {
    
    return (
        <div>
            <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => this.selectDataset(event.target.value)}>
                <option value="1">Data Set #1</option>
                <option value="2">Data Set #2</option>
            </select>
            <div id="chartdiv" style={{ width: "800px", height: "500px" }}></div>
        </div>
    );
  }
}

export { Graph };