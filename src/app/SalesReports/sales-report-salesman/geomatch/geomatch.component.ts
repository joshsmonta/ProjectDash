import { Component, OnInit } from "@angular/core";

export const locations1: string[] = [
  "Bankerohan",
  "Agdao",
  "Sasa",
  "Boulevard",
  "Maa"
];

export const locations2: string[] = [
  "Mt. Apo",
  "Aguisan",
  "Surigao",
  "Cotabato",
  "Quirino",
  "Mati",
  "Tagum",
  "Matina",
  "Bajada",
  "R. Castillo",
  "Ecoland"
];

@Component({
  selector: "app-geomatch",
  templateUrl: "./geomatch.component.html",
  styleUrls: ["./geomatch.component.scss"]
})
export class GeomatchComponent implements OnInit {
  value = 25;
  matched = locations1;
  pending = locations2;

  setValue(newValue) {
    this.value = Math.min(Math.max(newValue, 0), 100);
  }

  get status() {
    if (this.value <= 25) {
      return "danger";
    } else if (this.value <= 50) {
      return "warning";
    } else if (this.value <= 75) {
      return "info";
    } else {
      return "success";
    }
  }

  constructor() {}

  ngOnInit() {}
}
