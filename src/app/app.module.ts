import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NbThemeModule,
  NbSidebarService, 
  NbLayoutModule, 
  NbSidebarModule,
  NbMenuModule,
  NbCardModule
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './NavComponents/sidebar/sidebar.component';
import { SalesReportSiteComponent } from './SalesReports/sales-report-site/sales-report-site.component';
import { SalesReportFssComponent } from './SalesReports/sales-report-fss/sales-report-fss.component';
import { SalesReportSalesmanComponent } from './SalesReports/sales-report-salesman/sales-report-salesman.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SalesReportSiteComponent,
    SalesReportFssComponent,
    SalesReportSalesmanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({name: 'cosmic'}),
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
