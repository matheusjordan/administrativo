import { Component, OnInit } from '@angular/core';

import toastr from 'toastr';

import { BeaconService } from '../shared/beacon.service';
import Beacon from '../shared/beacon.model';

@Component({
  selector: 'app-beacon-list',
  templateUrl: './beacon-list.component.html',
  styleUrls: ['./beacon-list.component.scss']
})
export class BeaconListComponent implements OnInit {
  beacons: Beacon[] = [];

  constructor(
    private beaconService: BeaconService
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
      error => alert('Falha ao listar beacons')
    );
  }

  private deleteBeacon(id: number) {
    this.beaconService.delete(id).subscribe(
      () => {
        this.getBeacons();
        toastr.success('Beacon excluida com sucesso!');
      },
      error => alert('Falha ao deletar categoria')
    );
  }
}
