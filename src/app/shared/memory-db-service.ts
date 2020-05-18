import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemoryDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let names = [
      'Matheus',
      'Mariana',
      'Josilene',
      'José'
    ];

    let colors = [
      'red',
      'green',
      'yellow',
      'white'
    ];

    return { names, colors };
  }
}
