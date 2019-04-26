import { Component, OnInit } from "@angular/core";
import { ChartOptions } from "chart.js";

@Component({
  selector: "app-quota-card",
  templateUrl: "./quota-card.component.html",
  styleUrls: ["./quota-card.component.scss"]
})
export class QuotaCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  pieChartData: number[] = [200, 80];
  pieChartLabels: string[] = ["Label A", "Label B"];
  colors: any[] = [{ backgroundColor: ["#58d2ff", "#58ff85"] }];
  pieChartType = "doughnut";

  public pieChartOptions: ChartOptions = {
    legend: { position: "left" }
  };
}
