import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  constructor() {}
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10,
    // plugins: {
    //   legend: {
    //     display: false,
    //   },
    // },
    scales: {
      y: {
        startValue: 100,
        step: 50,
        max: 300,
      },
    },
  };
  public barChartLabels = [
    'station name dumy 1',
    'station name dumy 1',
    'station name dumy 1',
    'station name dumy 1',
    'station name dumy 1',
  ];
  public barChartLegend = true;
  public barCartColor = '#FF7F5C';
  public barChartData = [
    {
      data: [250, 142, 200, 220, 142],
      label: 'Sales',
      backgroundColor: this.barCartColor,
    },
  ];
}
