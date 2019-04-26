import { Component, Input, ViewChild, OnInit, Inject } from "@angular/core";
import { NB_WINDOW, NbMenuService, NbThemeService } from "@nebular/theme";
import { filter, map } from "rxjs/operators";

import { NbJSThemeOptions } from "@nebular/theme/services/js-themes/theme.options";
import { Key } from "protractor";
import { ThemeService } from "ng2-charts";
import { ChartOptions } from "chart.js";

@Component({
  selector: "ngx-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.scss"]
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() showTitle: boolean = true;
  private alive: boolean = true;
  themes = [
    {
      title: "default",
      key: "default",
      icon: "drop-icon-default"
    },
    {
      title: "cosmic",
      key: "cosmic",
      icon: "drop-icon-cosmic"
    },
    {
      title: "corporate",
      key: "corporate",
      icon: "drop-icon-corporate"
    }
  ];

  onToggleTheme() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "my-context-menu"),
        map(({ item: { title } }) => title)
      )
      .subscribe(key => this.switchThemes(key));
  }

  public switchThemes(key: string) {
    let overrides: ChartOptions;
    if (key == "cosmic") {
      overrides = {
        legend: {
          labels: { fontColor: "white" }
        },
        scales: {
          xAxes: [
            {
              ticks: { fontColor: "white" },
              gridLines: { color: "rgba(255,255,255,0.1)" }
            }
          ],
          yAxes: [
            {
              ticks: { fontColor: "white" },
              gridLines: { color: "rgba(255,255,255,0.1)" }
            }
          ]
        }
      };
    } else {
      overrides = {};
    }
    this.chartThemeService.setColorschemesOptions(overrides);
    this.themeService.changeTheme(key);
  }

  constructor(
    private themeService: NbThemeService,
    private nbMenuService: NbMenuService,
    private chartThemeService: ThemeService
  ) {}

  ngOnInit() {}
}
