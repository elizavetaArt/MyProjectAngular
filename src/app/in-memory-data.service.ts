import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Баба Яга' },
      { id: 12, name: 'Водяной' },
      { id: 13, name: 'Леший' },
      { id: 14, name: 'Алёнушка' },
      { id: 15, name: 'Илья Муромец' },
      { id: 16, name: 'Алёша Попович' },
      { id: 17, name: 'Кощей' },
      { id: 18, name: 'Чебурашка' },
      { id: 19, name: 'Шапокляк' },
      { id: 20, name: 'Крокодил Гена' }
    ];
    return {heroes};
  }
}
