import { Component, OnInit } from "@angular/core";
import { LINE_CHART_COLORS } from "../sales-chart/chart-colors";

const LINE_CHART_DATA: any[] = [
  { data: [520, 530, 540, 120, 320, 560], label: "2017" },
  { data: [500, 406, 120, 230, 308, 530], label: "2018" },
  { data: [210, 340, 430, 140, 210, 200], label: "Forecasting 2019" }
];

const LINE_CHART_LABELS: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

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
