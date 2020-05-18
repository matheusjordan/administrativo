import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Portifolio } from '../../pages/portifolio/shared/portifolio.model';

export class MemoryDbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const portifolio = this.portifoliosList();

    return { portifolio }
  }

  private portifoliosList(): Portifolio[] {
    return [
      new Portifolio(1, 'Veron', [], 'Marketplace de descontos, produtos e serviços')
    ];
  }
}


