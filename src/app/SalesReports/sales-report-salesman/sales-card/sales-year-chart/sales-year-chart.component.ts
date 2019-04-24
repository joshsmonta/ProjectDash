import { Component, OnInit } from "@angular/core";
import { LINE_CHART_COLORS } from "../sales-chart/chart-colors";

const LINE_CHART_DATA: any[] = [
  { data: [240, 120, 320, 560], label: "TOTAL SALES" }
];

const LINE_CHART_LABELS: string[] = ["2016", "2017", "2018", "2019"];

@Component({
  selector: "app-sales-year-chart",
  templateUrl: "./sales-year-chart.component.html",
  styleUrls: ["./sales-year-chart.component.scss"]
})
export class SalesYearChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  lineChartData = LINE_CHART_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true
  };

  lineChartLegend: true;
  lineChartType = "line";
  lineChartColors = LINE_CHART_COLORS;
}
