import { RouterModule } from "@angular/router";
import { appRoutes } from "../routes";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  NbThemeModule,
  NbSidebarService,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbPopoverModule,
  NbUserModule
} from "@nebular/theme";

import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SidebarComponent } from "./NavComponents/sidebar/sidebar.component";
import { SalesReportSiteComponent } from "./SalesReports/sales-report-site/sales-report-site.component";
import { SalesReportFssComponent } from "./SalesReports/sales-report-fss/sales-report-fss.component";
import { SalesReportSalesmanComponent } from "./SalesReports/sales-report-salesman/sales-report-salesman.component";
import { ThemeSwitcherComponent } from "./NavComponents/theme-switcher/theme-switcher.component";
import { ThemeSwitcherListComponent } from "./NavComponents/theme-switcher/themes-switcher-list/themes-switcher-list.component";
import { TimeSpentCardComponent } from "./SalesReports/sales-report-salesman/time-spent-card/time-spent-card.component";
import { FrontCardComponent } from "./SalesReports/sales-report-salesman/time-spent-card/front-card/front-card.component";
import { BackCardComponent } from "./SalesReports/sales-report-salesman/time-spent-card/back-card/back-card.component";
import { ChartsModule } from "ng2-charts";
import { SalesChartComponent } from "./SalesReports/sales-report-salesman/sales-card/sales-chart/sales-chart.component";
import { SalesYearChartComponent } from "./SalesReports/sales-report-salesman/sales-card/sales-year-chart/sales-year-chart.component";
import { SalesCardComponent } from "./SalesReports/sales-report-salesman/sales-card/sales-card.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SalesReportSiteComponent,
    SalesReportFssComponent,
    SalesReportSalesmanComponent,
    ThemeSwitcherComponent,
    ThemeSwitcherListComponent,
    TimeSpentCardComponent,
    FrontCardComponent,
    BackCardComponent,
    SalesChartComponent,
    SalesYearChartComponent,
    SalesCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: "cosmic" }),
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    NbPopoverModule,
    NbUserModule,
    ChartsModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
