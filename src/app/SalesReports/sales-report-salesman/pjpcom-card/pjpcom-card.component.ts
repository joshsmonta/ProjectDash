import { Component, OnInit } from "@angular/core";

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
  colors: any[] = [{ backgroundColor: ["#95ff49", "#49deff"] }];
  pieChartType = "doughnut";
}
