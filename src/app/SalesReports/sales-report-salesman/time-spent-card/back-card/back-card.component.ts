import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "ngx-time-back-card",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./back-card.component.html",
  styleUrls: ["./back-card.component.scss"]
})
export class BackCardComponent {
  constructor() {}

  ngOnInit() {}
}
