import { InMemoryDbService } from 'angular-in-memory-web-api';

import Beacon from '../../pages/beacon/shared/beacon.model';
import User from '../../pages/user/shared/user.model';

export class MemoryDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let beacons = this.beaconList();
    let users = this.userList();
    return { beacons, users }
  }

  private beaconList(): Beacon[] {
    return [
      new Beacon(1, 'Monalisa', 'Quadro'),
      new Beacon(2, 'Torre de Pizza', 'Quadro'),
      new Beacon(3, 'Clock', 'Quadro'),
      new Beacon(4, 'Mozart', 'Quadro'),
      new Beacon(5, 'Matheus', 'Quadro'),
    ];
  }

  private userList(): User[] {
    return [
      new User(1, 'Monalisa', 'VISITOR', 1),
      new User(2, 'Matheus', 'VISITOR', 2),
      new User(3, 'João', 'VISITOR', 3),
      new User(4, 'Abella', 'ADMIN', 0),
    ];
  }
}


