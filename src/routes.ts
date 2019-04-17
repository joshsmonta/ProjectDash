import { Routes } from '@angular/router';
import { SalesReportSiteComponent } from './app/SalesReports/sales-report-site/sales-report-site.component';
import { SalesReportFssComponent } from './app/SalesReports/sales-report-fss/sales-report-fss.component';
import { SalesReportSalesmanComponent } from './app/SalesReports/sales-report-salesman/sales-report-salesman.component';

export const appRoutes: Routes = [
    { path: 'sales-site', component: SalesReportSiteComponent },
    { path: 'sales-fss', component: SalesReportFssComponent },
    { path: 'sales-man', component: SalesReportSalesmanComponent },
    { path: '', redirectTo: '/sales-site', pathMatch: 'full' }
];