import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem, NbMenuService, NbThemeService } from '@nebular/theme';

import { faBars, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  faChartLine = faChartLine
  items: NbMenuItem[] = [
    { 
      title: 'Sales Reports',
      expanded: true,
      icon: 'nb-bar-chart',
      children: [
        { title: 'Site', link: '/sales-site' },
        { title: 'Salesman', link: '/sales-man' },
        { title: 'FSS', link: '/sales-fss' },
      ],
    },
  ];

  constructor(private sidebarService: NbSidebarService, private themeService: NbThemeService) { }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  enableTheme() {
    this.themeService.changeTheme('corporate')
  }

  ngOnInit() {
    this.enableTheme();
  }

}
