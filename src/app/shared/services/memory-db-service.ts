import { InMemoryDbService } from 'angular-in-memory-web-api';

import Beacon from '../../pages/beacon/shared/beacon.model';
import User from '../../pages/user/shared/user.model';
import { Visitor } from '../../pages/statistic/shared/statistic.model';
import { ERole } from '../enum/role.enum';
import { EBeaconType } from '../enum/beacon-type.enum';

export class MemoryDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let beacons = this.beaconList();
    let users = this.userList();
    let visitors = this.visitorList();
    return { beacons, users, visitors };
  }

  private beaconList(): Beacon[] {
    return [
      new Beacon(1, '76498', 'Quadro Monalisa', 'link da imagem', EBeaconType.IMAGE, 'Lorem ipsum dolor simet'),
      new Beacon(2, '87600', 'Diversidade', 'link do video', EBeaconType.VIDEO, 'Lorem ipsum dolor simet'),
      new Beacon(3, '43912', 'Jair messias bostonaro', 'link do texto', EBeaconType.TEXT, 'Lorem ipsum dolor simet'),
    ];
  }

  private userList(): User[] {
    return [
      new User(1, 'Administrador', 'admin', 'adm@adm.com', 'admin', ERole.ADMIN),
      new User(2, 'Usuário', 'user', 'user@user.com', 'user', ERole.USER),
    ];
  }

  private visitorList(): Visitor[] {
    return [
      new Visitor(1234, 'Joao da silva', 'jao@gmail.com', new Date()),
      new Visitor(4321, 'Maria joaquina', 'maria69@gmail.com', new Date()),
      new Visitor(3214, 'Cirilo guedes', 'cirilo30cm@gmail.com', new Date()),
      new Visitor(1432, 'Matheus Jordan', 'mjordan@gmail.com', new Date()),
      new Visitor(2134, 'Arthur Alves', 'alvesarthur@gmail.com', new Date()),
    ];
  }
}


