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
  constructor() {}

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: any[] = SAMPLE_BARCHART_LABELS;
  public barChartType: "bar";
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {}
}
