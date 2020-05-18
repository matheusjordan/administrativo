import { Component, OnInit } from '@angular/core';
import Statistic from '../shared/statistic.model';
import { StatisticService } from '../shared/statistic.service';

@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.scss']
})
export class StatisticListComponent implements OnInit {

  statistics: Statistic[] = [];

  constructor(
    private statistcService: StatisticService
  ) { }

  ngOnInit(): void {
    this.getStatistics();
  }

  // PRIVATE METHODS
  private getStatistics() {
      const totalUsers = new Statistic('Usuários cadastrados', 0, '');
      const totalBeacons = new Statistic('Beacons cadastrados', 0, '');
      const totalVisitors = new Statistic('Visitas totais', 0, '');

      this.statistcService.getTotalBeacons().subscribe(
        (beacons: any[]) => totalBeacons.value = beacons.length
      );

      this.statistcService.getTotalUsers().subscribe(
        (users: any[]) => totalUsers.value = users.length
      )

      this.statistics.push(totalUsers, totalBeacons, totalVisitors);
  }


}
