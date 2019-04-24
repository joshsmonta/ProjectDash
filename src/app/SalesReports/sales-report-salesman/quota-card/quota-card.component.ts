import { Component, OnInit } from "@angular/core";

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
  colors: any[] = [{ backgroundColor: ["#95ff49", "#49deff"] }];
  pieChartType = "doughnut";
}
