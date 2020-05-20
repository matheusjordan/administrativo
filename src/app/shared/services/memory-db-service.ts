import { InMemoryDbService } from 'angular-in-memory-web-api';

import Beacon from '../../pages/beacon/shared/beacon.model';
import User from '../../pages/user/shared/user.model';
import { ERole } from '../enum/role.enum';

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
      new User(1, 'admin', ERole.ADMIN, 'admin'),
      new User(2, 'user', ERole.USER, 'user'),
    ];
  }
}


