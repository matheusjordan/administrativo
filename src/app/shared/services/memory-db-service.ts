import { InMemoryDbService } from 'angular-in-memory-web-api';

import Beacon from '../../pages/beacon/shared/beacon.model';
import User from '../../pages/user/shared/user.model';
import { ERole } from '../enum/role.enum';
import { EBeaconType } from '../enum/beacon-type.enum';

export class MemoryDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let beacons = this.beaconList();
    let users = this.userList();
    return { beacons, users }
  }

  private beaconList(): Beacon[] {
    return [
      new Beacon(1, '76498', 'Quadro Monalisa', 'link da imagem', EBeaconType.IMAGE, 'Lorem ipsum dolor simet'),
      new Beacon(1, '87600', 'Diversidade', 'link do video', EBeaconType.VIDEO, 'Lorem ipsum dolor simet'),
      new Beacon(1, '43912', 'Jair messias bostonaro', 'link do texto', EBeaconType.TEXT, 'Lorem ipsum dolor simet'),
    ];
  }

  private userList(): User[] {
    return [
      new User(1, 'Administrador', 'admin', 'adm@adm.com', 'admin', ERole.ADMIN),
      new User(2, 'Usuário', 'user', 'user@user.com', 'user', ERole.USER),
    ];
  }
}


