import { Component, OnInit } from "@angular/core";
import { ChartOptions } from "chart.js";

@Component({
  selector: "app-pjpcom-card",
  templateUrl: "./pjpcom-card.component.html",
  styleUrls: ["./pjpcom-card.component.scss"]
})
export class PjpcomCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  pieChartData: number[] = [60, 40];
  pieChartLabels: string[] = ["Label A", "Label B"];
  colors: any[] = [{ backgroundColor: ["#58d2ff", "#58ff85"] }];
  pieChartType = "doughnut";
  public pieChartOptions: ChartOptions = {
    maintainAspectRatio: true,
    legend: { position: "left" }
  };
}
