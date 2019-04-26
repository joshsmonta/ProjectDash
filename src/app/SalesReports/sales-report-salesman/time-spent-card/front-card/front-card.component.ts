import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [16, 9, 4, 11, 10, 5, 9, 12, 20, 10, 11, 14], label: "Lates" },
  { data: [1, 2, 2, 3, 2, 1, 0, 0, 1, 1, 0, 3], label: "Absences" }
];

const SAMPLE_BARCHART_LABELS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

@Component({
  selector: "ngx-time-front-card",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./front-card.component.html",
  styleUrls: ["./front-card.component.scss"]
})
export class FrontCardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  constructor() {}

  ngOnInit() {}

  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    this.barChartData[0].data = data;
  }
}
