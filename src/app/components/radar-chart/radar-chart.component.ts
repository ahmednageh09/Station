import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent {
  public radarChartLabels = [
    '24:00',
    '02:00',
    '04:00',
    '06:00',
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
  ];
  public diagonalColor = {
    first: '#00CBC033',
    second: '#009ACF33',
  };
  public diagonalBorderColor = {
    first: '#00CBC0',
    second: '#009ACF',
  };

  public radarChartData = [
    {
      data: [190, 270, 150, 140, 170, 180, 190, 230, 290, 150, 130, 145],
      label: 'one',
      backgroundColor: this.diagonalColor.first,
      tension: 0.5,
      borderColor: this.diagonalBorderColor.first,
      borderWidth: 0.5,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      data: [175, 190, 250, 170, 140, 150, 200, 145, 130, 140, 250, 195],
      label: 'two',
      backgroundColor: this.diagonalColor.second,
      tension: 0.5,
      borderColor: this.diagonalBorderColor.second,
      borderWidth: 0.5,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
  ];

  options = {
    plugins:{
      legend:{
         display:false
      }
   },
    scales: {
      r: {
        min:50,
        max:300,
        ticks: {
          display: false,
          stepSize:50
        },
      },
    },
  };

  constructor() {}
}
