import { Component, OnInit } from '@angular/core';

import { BeaconService } from '../shared/beacon.service';
import Beacon from '../shared/beacon.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-beacon-list',
  templateUrl: './beacon-list.component.html',
  styleUrls: ['./beacon-list.component.scss']
})
export class BeaconListComponent implements OnInit {
  beacons: Beacon[] = [];

  constructor(
    private beaconService: BeaconService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getBeacons();
  }

  delete(beacon: Beacon) {
    const mustDelete = confirm(`Deseja deletar o beacon: ${beacon.name}?`);

    if (mustDelete) {
      this.deleteBeacon(beacon.id);
    }
  }

  // PRIVATE METHODS

  private getBeacons() {
    this.beaconService.getAll().subscribe(
      beacons => this.beacons = beacons,
      error => this.toastrService.error('Falha ao listar beacons')
    );
  }

  private deleteBeacon(id: number) {
    this.beaconService.delete(id).subscribe(
      () => {
        this.getBeacons();
        this.toastrService.success('Beacon excluida com sucesso!');
      },
      error => this.toastrService.error('Falha ao deletar categoria')
    );
  }
}
